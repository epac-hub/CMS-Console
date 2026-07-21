#!/usr/bin/env node
/**
 * Refresh the "enroll_live" payload key in index.html from the Medicare
 * Monthly Enrollment API (data.cms.gov). Feeds the Circularity tab's
 * measurement-base chart (circ-ffsbase) and the Duals tab's March-vintage
 * dual-count chart (chart_duals_decline).
 *
 * Run from the repository root wherever data.cms.gov is reachable:
 *   node tools/fetch-enrollment.mjs
 * Then rebuild the artifact: ./bundle.sh
 *
 * Zero npm dependencies; fetches shell out to curl. The March snapshot of
 * each year is used as the one consistent vintage (annual-average "Year"
 * rows exist but mix vintages with the monthly series).
 */
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';

const UUID = 'd7fabe1e-d19b-4333-9eff-e80e0643f2fd'; // "latest data" UUID
const API = `https://data.cms.gov/data-api/v1/dataset/${UUID}/data`;
const COLS = [
  'YEAR', 'MONTH', 'BENE_STATE_ABRVTN', 'BENE_GEO_LVL',
  'A_B_TOT_BENES', 'A_B_ORGNL_MDCR_BENES', 'A_B_MA_AND_OTH_BENES',
  'DUAL_TOT_BENES', 'FULL_DUAL_TOT_BENES',
].join(',');

function fetchJson(params) {
  const url = `${API}?${params}&column=${COLS}&size=200`;
  const out = execFileSync('curl', ['-sS', '--fail', '--max-time', '120', url], {
    encoding: 'utf8', maxBuffer: 16 * 1024 * 1024,
  });
  return JSON.parse(out);
}

const num = (v) => Number(String(v).replace(/,/g, '')) || 0;

console.log('fetching PR March rows…');
const rows = fetchJson('filter[BENE_STATE_ABRVTN]=PR&filter[BENE_GEO_LVL]=State&filter[MONTH]=March')
  .map((r) => ({
    year: Number(r.YEAR),
    ab_ffs: num(r.A_B_ORGNL_MDCR_BENES),
    ab_ma: num(r.A_B_MA_AND_OTH_BENES),
    ab_total: num(r.A_B_TOT_BENES),
    dual_total: num(r.DUAL_TOT_BENES),
    full_dual: num(r.FULL_DUAL_TOT_BENES),
  }))
  .filter((r) => r.year >= 2013)
  .sort((a, b) => a.year - b.year);
if (rows.length < 10) throw new Error(`only ${rows.length} PR March rows returned`);

console.log('fetching US/VI latest March rows…');
const latestYear = rows[rows.length - 1].year;
const us = fetchJson(`filter[BENE_GEO_LVL]=National&filter[MONTH]=March&filter[YEAR]=${latestYear}`)[0];
const vi = fetchJson(`filter[BENE_STATE_ABRVTN]=VI&filter[BENE_GEO_LVL]=State&filter[MONTH]=March&filter[YEAR]=${latestYear}`)[0];
const pen = (r) => Math.round((num(r.A_B_MA_AND_OTH_BENES) / num(r.A_B_TOT_BENES)) * 1000) / 10;

const enrollLive = {
  src: {
    name: 'Medicare Monthly Enrollment',
    uuid: UUID,
    page: 'https://data.cms.gov/summary-statistics-on-beneficiary-enrollment/medicare-and-medicaid-reports/medicare-monthly-enrollment',
    api: API,
    as_of: `March ${latestYear}`,
    basis: 'March snapshot of each year; state-level rows; A+B = beneficiaries with both Part A and Part B',
  },
  years: rows.map((r) => r.year),
  pr: {
    ab_ffs: rows.map((r) => r.ab_ffs),
    ab_ma: rows.map((r) => r.ab_ma),
    ab_total: rows.map((r) => r.ab_total),
    ab_ffs_share: rows.map((r) => Math.round((r.ab_ffs / r.ab_total) * 10000) / 10000),
    dual_total: rows.map((r) => r.dual_total),
    full_dual: rows.map((r) => r.full_dual),
  },
  pen_ab: {
    pr: pen(rows[rows.length - 1].ab_ma !== undefined ? {
      A_B_MA_AND_OTH_BENES: rows[rows.length - 1].ab_ma,
      A_B_TOT_BENES: rows[rows.length - 1].ab_total,
    } : null),
    us: pen(us), vi: pen(vi),
    def: `MA / (A+B beneficiaries), March ${latestYear}`,
  },
};

// swap the enroll_live value inside the payload island (brace-balanced)
const html = fs.readFileSync('index.html', 'utf8');
const key = '"enroll_live":';
const start = html.indexOf(key);
if (start === -1) throw new Error('enroll_live key not found in payload');
let i = start + key.length, depth = 0;
do {
  const c = html[i];
  if (c === '{') depth += 1;
  else if (c === '}') depth -= 1;
  i += 1;
} while (depth > 0 && i < html.length);
const updated = html.slice(0, start) + key + JSON.stringify(enrollLive) + html.slice(i);
fs.writeFileSync('index.html', updated);
console.log(`enroll_live refreshed: ${rows.length} years through March ${latestYear} `
  + `(FFS ${rows[rows.length - 1].ab_ffs.toLocaleString('en-US')}, `
  + `duals ${rows[rows.length - 1].dual_total.toLocaleString('en-US')}). Now run ./bundle.sh`);
