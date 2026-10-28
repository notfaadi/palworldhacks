import { readFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';

const seoPath = new URL('../src/data/seo.ts', import.meta.url);
// Dynamic import won't work on raw TS — duplicate inventory paths by parsing (simple regex)
const raw = readFileSync(seoPath, 'utf8');
const titleRe = /title: '([^']+)'|title: "([^"]+)"/g;
const descRe = /description:\s*\n?\s*'([^']+)'|description:\s*\n?\s*"([^"]+)"/g;

const titles = [];
const descs = [];
let m;
while ((m = titleRe.exec(raw))) titles.push(m[1] ?? m[2]);
while ((m = descRe.exec(raw))) descs.push(m[1] ?? m[2]);

const inventoryBlock = raw.split('SEO_PAGE_INVENTORY')[1]?.split('SEO_LEGACY')[0] ?? '';
const primaryRe = /primaryKeyword: '([^']+)'/g;
const primaries = [];
while ((m = primaryRe.exec(inventoryBlock))) primaries.push(m[1]);

function uniq(arr) {
  return new Set(arr).size === arr.length;
}

const titleIssues = titles.filter((t) => t.length > 60);
const descIssues = descs.filter((d) => d.length < 140 || d.length > 158);
const primaryDup = primaries.length !== new Set(primaries).size;

console.log('=== SEO verification (inventory parse) ===');
console.log('Titles <= 60:', titleIssues.length === 0 ? 'PASS' : 'FAIL', titleIssues);
console.log('Descriptions 140-158:', descIssues.length === 0 ? 'PASS' : 'FAIL');
descIssues.forEach((d) => console.log(`  len ${d.length}: ${d.slice(0, 80)}…`));
console.log('Unique primary keywords:', !primaryDup ? 'PASS' : 'FAIL');
console.log('Title count:', titles.length, 'Description count:', descs.length);
