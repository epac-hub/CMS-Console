# CLAUDE.md

Orientation for Claude Code sessions working in this repository. Read this
first — it captures the things that are not obvious from a cold `ls` and that
have tripped up past sessions.

## What this project is

A single-page **CMS / Medicare data console**: a static, self-contained web app
that presents Medicare Advantage rate, enrollment, and coverage analysis —
with a strong focus on Puerto Rico and the other U.S. territories relative to
the mainland. There is **no backend, no framework, and no package.json**. The
whole app is plain HTML + inline CSS + inline vanilla JS + [Plotly](https://plotly.com/javascript/)
(v2.32.0, inlined) + a large inline JSON data payload.

The console is organized as tabs (defined in the nav and rendered by
`app.js`-style code that lives inline in `index.html`):

`Overview · Trajectory · Puerto Rico · 5-Star Plans · Enrollment by Municipio ·
The Invisible Duals · The Circularity Trap · The Territories' Perspective ·
Part D · Findings · Policy Position · Data & Sources`

## File map — what is canonical and what is derived

| File | Role | Edit it? |
| --- | --- | --- |
| **`index.html`** | **The app.** Self-contained: inline Plotly, inline `<style>`, inline app JS, and the data payload in `<script id="payload">…</script>`. | **Yes — this is the source of truth.** |
| **`bundle.html`** | Build artifact: byte-for-byte `index.html` **plus** Google Fonts embedded as base64 `data:` URIs and the external font `<link>`/preconnects stripped. Used as a Claude-conversation artifact, where a strict CSP blocks all external hosts. | Only via the build step below — do not hand-diverge it. |
| `bundle.sh` / `bundle.mjs` | Zero-dependency build: regenerate `bundle.html` from `index.html`. `bundle.mjs` inlines any local `<script src>`/`<link stylesheet>` (there are none today) and embeds the `latin`/`latin-ext` Google Font subsets. Network fetches shell out to `curl` so the proxy/CA config is honored. | Only if you change the build. |
| `app.js`, `styles.css` | **Stale extracted copies** of the app's JS/CSS from an earlier structure. `index.html` currently carries its own inline copies, so these are **not** in the edit path and have drifted behind `index.html`. Do not assume they reflect the live app. | Generally no. |
| `tools/` | Helper scripts (data + safe edits) — see below. | As needed. |

Key consequence: **`index.html` and `bundle.html` must stay in lockstep.** Every
content commit in this repo's history changes both by the same diff. The clean
way to achieve that is to edit `index.html`, then rebuild:

```bash
./bundle.sh        # rewrites bundle.html from index.html (needs node + curl)
```

If the build cannot reach Google Fonts in your environment, apply the identical
content edit to `bundle.html` directly so the two files do not diverge, and say
so in the PR.

## Editing conventions

- **The payload must stay valid JSON.** The app does
  `JSON.parse(document.getElementById('payload').textContent)` at startup; a
  trailing comma or stray quote white-screens the whole console. Re-parse after
  any payload edit (e.g. `node -e "JSON.parse(require('fs').readFileSync('/tmp/payload.json','utf8'))"`).
- **`index.html` is ~4.4 MB** (mostly inline Plotly + payload). Prefer targeted
  string edits over reading/rewriting the whole file. Reading it wholesale will
  blow up your context — grep for the section you need.
- **Self-contained is a hard constraint.** No new external `<script>`,
  `<link>`, `<img>`, font, or `fetch()` to a remote host — `bundle.mjs` audits
  for leftover external loads and they fail under the artifact CSP. Inline or
  data-URI everything.
- **Charts** are Plotly, created per-tab in render functions
  (`renderRates`, `renderPRCharts`, `renderCircularityCharts`,
  `renderDualsCharts`, `renderMuniCharts`, …) that run lazily on first tab
  activation and guard against double-render with a `window._<tab>Rendered`
  flag. Follow that pattern for new charts.

## Evidence & honesty norms (load-bearing here)

This console argues a policy case from public CMS data, so accuracy is the
product. The established, non-negotiable norms visible across the PR history:

- **Every figure is cross-checked against the payload / primary source before it
  is printed.** Numbers carry provenance (CMS ratebooks, CPSC enrollment files,
  ACS tables, U.S.C./CFR cites), often as `[NN]` register references and
  per-chart source lines.
- **When a simplified model does not reproduce the published number, disclose it**
  rather than rounding to the claim (e.g. the Territories tab openly notes the
  0.70 cost-index model yields ~$744 vs the published $777.98, and shows the
  live re-run). Do not launder an estimate into a "reproduces to the cent" claim.
- Prefer live-verifiable, reproducible checks. If you add a figure, add its
  source line too.

## Verification before you commit

There is **no committed test harness** (no Playwright config, no CI test job in
the repo). Past sessions verified changes with an ad-hoc headless browser pass;
reproduce that standard manually:

1. Open `index.html` (and, if rebuilt, `bundle.html`) in a browser.
2. Click through **all tabs** — each should render its charts with no
   JavaScript console errors.
3. Check both a desktop (~1440px) and a narrow (~390px) width: **no horizontal
   page scroll**.
4. Confirm the payload still parses (see above).

## `tools/`

- `tools/fetch-enrollment.mjs` — pulls live CMS Monthly Enrollment series (data
  refresh helper).
- `tools/apply-priority-zero-edits.mjs` + `tools/priority-zero-edits.json` — a
  **safe find-and-replace applier**: each edit's `old_string` must match exactly
  once or the whole run aborts without writing (no half-applied edit sets). A
  good pattern to reuse when applying a batch of precise string edits across
  `index.html`/`bundle.html`.

## Git / branch / PR workflow

- Branches are named `claude/<topic>`; each unit of work is a small, focused PR
  into `main` with a Summary + Verification body. Keep that shape.
- **Push to your session's designated branch only.** Do not push to `main` or
  another branch without explicit permission.
- Open PRs as **drafts** unless told otherwise.
- The project is named **CMS Console**. The repo was renamed from
  `epac-hub/CMS-Intelligent-Console` to `epac-hub/CMS-Console`, and the app's
  own "Intelligent"/"Intelligence" branding was removed; stale metadata, old
  session labels, or old links may still show the former name. Treat
  `epac-hub/CMS-Console` and `main` HEAD as ground truth. The public site is
  `https://epac-hub.github.io/CMS-Console/` (the old URL 404s).

## Quick start for a new session

```bash
git status && git log --oneline -5      # orient
grep -n 'data-tab=' index.html          # find the tabs / sections
# …make targeted edits to index.html…
./bundle.sh                             # keep bundle.html in sync
# verify in a browser per the checklist above, then commit + draft PR
```
