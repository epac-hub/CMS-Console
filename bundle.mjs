#!/usr/bin/env node
/**
 * Bundle the app into a single self-contained HTML artifact (bundle.html).
 *
 * Adapted from the generic Parcel + html-inline bundling script for React
 * projects: this project is a plain static app with no package.json, and
 * index.html already carries its JS/CSS inline, so no bundler toolchain is
 * needed. What still blocks single-file use (e.g. as a Claude artifact,
 * where a strict CSP blocks all external hosts) is any leftover external
 * reference. This script:
 *
 *   1. Inlines any local <script src> / <link rel="stylesheet"> references.
 *   2. Downloads the Google Fonts CSS and embeds the latin/latin-ext font
 *      files as base64 data URIs in a <style> block.
 *   3. Strips the now-useless preconnect hints.
 *   4. Audits the result for remaining external resource loads.
 *
 * Zero npm dependencies; network fetches shell out to curl so the
 * environment's proxy/CA configuration is honored.
 */

import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const INPUT = path.join(ROOT, 'index.html');
const OUTPUT = path.join(ROOT, 'bundle.html');

// Chrome UA so Google Fonts serves woff2 with per-subset unicode-range blocks.
const UA =
  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

// Subsets to embed. "latin" covers U+0000-00FF, which includes the Spanish
// accented characters used in the content; latin-ext is kept for safety.
const FONT_SUBSETS = new Set(['latin', 'latin-ext']);

function fetchText(url) {
  return execFileSync('curl', ['-sS', '--fail', '--max-time', '60', '-A', UA, url], {
    encoding: 'utf8',
    maxBuffer: 64 * 1024 * 1024,
  });
}

function fetchBinary(url) {
  return execFileSync('curl', ['-sS', '--fail', '--max-time', '60', '-A', UA, url], {
    maxBuffer: 64 * 1024 * 1024,
  });
}

function isRemote(url) {
  return /^(https?:)?\/\//i.test(url) || url.startsWith('data:');
}

let html = fs.readFileSync(INPUT, 'utf8');

// --- 1. Inline local scripts and stylesheets -------------------------------

html = html.replace(
  /<script\b([^>]*)\bsrc="([^"]+)"([^>]*)>\s*<\/script>/gi,
  (tag, pre, src, post) => {
    if (isRemote(src)) return tag;
    const file = path.join(ROOT, src.replace(/^\.?\//, ''));
    if (!fs.existsSync(file)) {
      console.warn(`⚠️  Local script not found, leaving as-is: ${src}`);
      return tag;
    }
    console.log(`   inlining script: ${src}`);
    const js = fs.readFileSync(file, 'utf8').replace(/<\/script/gi, '<\\/script');
    const attrs = `${pre} ${post}`.replace(/\bdefer\b|\basync\b/g, '').trim();
    return `<script${attrs ? ' ' + attrs : ''}>\n${js}\n</script>`;
  },
);

html = html.replace(
  /<link\b[^>]*\brel="stylesheet"[^>]*\bhref="([^"]+)"[^>]*>|<link\b[^>]*\bhref="([^"]+)"[^>]*\brel="stylesheet"[^>]*>/gi,
  (tag, href1, href2) => {
    const href = href1 || href2;
    if (isRemote(href)) return tag;
    const file = path.join(ROOT, href.replace(/^\.?\//, ''));
    if (!fs.existsSync(file)) {
      console.warn(`⚠️  Local stylesheet not found, leaving as-is: ${href}`);
      return tag;
    }
    console.log(`   inlining stylesheet: ${href}`);
    return `<style>\n${fs.readFileSync(file, 'utf8')}\n</style>`;
  },
);

// --- 2. Embed Google Fonts as data URIs ------------------------------------

const fontLinkRe =
  /<link\b[^>]*\bhref="(https:\/\/fonts\.googleapis\.com\/css2?\?[^"]+)"[^>]*>/gi;
const fontCache = new Map();

for (const match of [...html.matchAll(fontLinkRe)]) {
  const [tag, cssUrl] = match;
  if (!/rel="stylesheet"/i.test(tag)) continue;
  console.log(`   embedding fonts from: ${cssUrl}`);
  const css = fetchText(cssUrl.replace(/&amp;/g, '&'));

  // The CSS is a series of "/* subset */ @font-face { ... }" blocks.
  const kept = [];
  const blockRe = /\/\*\s*([a-z0-9-]+)\s*\*\/\s*(@font-face\s*\{[^}]*\})/g;
  let block;
  let embedded = 0;
  while ((block = blockRe.exec(css)) !== null) {
    const [, subset, face] = block;
    if (!FONT_SUBSETS.has(subset)) continue;
    const inlined = face.replace(/url\((https:\/\/[^)]+)\)/g, (_, fontUrl) => {
      if (!fontCache.has(fontUrl)) {
        const data = fetchBinary(fontUrl);
        const mime = fontUrl.endsWith('.woff2') ? 'font/woff2' : 'font/woff';
        fontCache.set(fontUrl, `url(data:${mime};base64,${data.toString('base64')})`);
        embedded += 1;
      }
      return fontCache.get(fontUrl);
    });
    kept.push(`/* ${subset} */\n${inlined}`);
  }
  if (kept.length === 0) {
    throw new Error(`No embeddable @font-face blocks found in ${cssUrl}`);
  }
  console.log(`   embedded ${embedded} font file(s), kept ${kept.length} @font-face block(s)`);
  html = html.replace(tag, () => `<style>\n${kept.join('\n')}\n</style>`);
}

// --- 3. Drop preconnect hints for the font hosts ----------------------------

html = html.replace(
  /[ \t]*<link\b[^>]*\brel="preconnect"[^>]*\bhref="https:\/\/fonts\.(?:googleapis|gstatic)\.com"[^>]*>\s*\n?/gi,
  '',
);

// --- 4. Audit for remaining external resource loads -------------------------

const leftovers = [];
for (const m of html.matchAll(/<(script|link|img|iframe|source|video|audio)\b[^>]*\b(?:src|href)="(https?:\/\/[^"]+)"[^>]*>/gi)) {
  if (m[1] === 'link' && !/rel="(stylesheet|preload|preconnect|icon)"/i.test(m[0])) continue;
  leftovers.push(`${m[1]}: ${m[2]}`);
}
if (leftovers.length > 0) {
  console.warn('⚠️  External resource loads remain (will fail under a strict CSP):');
  for (const l of leftovers) console.warn(`   ${l}`);
} else {
  console.log('   no external resource loads remain ✔');
}

fs.writeFileSync(OUTPUT, html);
const mb = (fs.statSync(OUTPUT).size / (1024 * 1024)).toFixed(2);
console.log(`   wrote ${path.basename(OUTPUT)} (${mb} MB)`);
