#!/usr/bin/env node
// Apply the Data Expansion Plan "Priority Zero" corrections to index.html
// and app.js. Each edit's old_string must occur exactly once in its target
// file, or the whole run aborts without writing anything — a drifted source
// fails loudly instead of committing a half-applied correction set.
// Run from the repository root: node tools/apply-priority-zero-edits.mjs
import fs from 'node:fs';

const edits = JSON.parse(
  fs.readFileSync(new URL('./priority-zero-edits.json', import.meta.url), 'utf8'),
);

const files = {};
let failures = 0;
for (const e of edits) {
  files[e.file] ??= fs.readFileSync(e.file, 'utf8');
  const count = files[e.file].split(e.old_string).length - 1;
  if (count !== 1) {
    console.error(`FAIL (${count} matches) in ${e.file}: ${JSON.stringify(e.old_string.slice(0, 80))}`);
    failures += 1;
    continue;
  }
  files[e.file] = files[e.file].replace(e.old_string, () => e.new_string);
}

if (failures > 0) {
  console.error(`${failures}/${edits.length} edits failed — no files written.`);
  process.exit(1);
}
for (const [file, content] of Object.entries(files)) {
  fs.writeFileSync(file, content);
}
console.log(`Applied ${edits.length}/${edits.length} edits to ${Object.keys(files).join(', ')}.`);
