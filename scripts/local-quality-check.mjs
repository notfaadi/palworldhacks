/**
 * Local 10/10 gate — run before GitHub push / Cloudflare deploy.
 * Usage: npm run check:local
 */
import { execSync } from 'node:child_process';
import { readFileSync, existsSync } from 'node:fs';
import { readdirSync, statSync } from 'node:fs';
import path from 'node:path';

const root = process.cwd();
let failed = false;

function fail(msg) {
  console.error('FAIL:', msg);
  failed = true;
}
function pass(msg) {
  console.log('PASS:', msg);
}

execSync('node scripts/verify-seo-inventory.mjs', { stdio: 'inherit', cwd: root });

function walkSrc(dir, acc = []) {
  for (const name of readdirSync(dir)) {
    const full = path.join(dir, name);
    if (statSync(full).isDirectory()) walkSrc(full, acc);
    else if (/\.(ts|astro)$/.test(name)) acc.push(full);
  }
  return acc;
}
const srcFiles = walkSrc(path.join(root, 'src'));
let localhostHits = 0;
let rankedHits = 0;
for (const rel of srcFiles) {
  const text = readFileSync(rel, 'utf8');
  if (text.includes('localhost:4321')) localhostHits++;
  const ranked = (text.match(/\bRanked\b/g) ?? []).length;
  rankedHits += ranked;
}

if (localhostHits > 0) fail(`${localhostHits} src files still mention localhost:4321`);
else pass('No localhost:4321 in src');

if (rankedHits > 5) fail(`${rankedHits} "Ranked" mentions remain in src (Fortnite bleed)`);
else pass(`Ranked mentions within tolerance (${rankedHits})`);

if (!existsSync(path.join(root, '.env.development'))) fail('.env.development missing');
else pass('.env.development present');

if (!existsSync(path.join(root, '.env.production'))) fail('.env.production missing');
else pass('.env.production present');

const ogDir = path.join(root, 'public/img/og');
if (!existsSync(path.join(ogDir, 'home.jpg'))) fail('OG images missing — run npm run generate:og');
else pass('OG images present');

console.log('\nRunning local-origin build smoke test (PUBLIC_SITE_URL=http://localhost:4321)…');
execSync('node scripts/build-local.mjs', { stdio: 'inherit', cwd: root });

const indexHtml = readFileSync(path.join(root, 'dist/index.html'), 'utf8');
if (!indexHtml.includes('localhost:4321')) {
  fail('dist/index.html canonicals do not include localhost:4321 after build:local');
} else {
  pass('Local build canonicals use localhost:4321');
}

if (failed) {
  console.error('\nLocal quality check FAILED.');
  process.exit(1);
}
console.log('\nLocal quality check PASSED — ready for GitHub + Cloudflare.');
