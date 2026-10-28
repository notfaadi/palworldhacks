/**
 * Fortnite Cheats → Palworld Hacks rebrand for local development.
 * Run from project root: node scripts/rebrand-palworld.mjs
 */
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve('.');

const TEXT_EXTS = new Set([
  '.ts',
  '.tsx',
  '.astro',
  '.mjs',
  '.js',
  '.json',
  '.md',
  '.txt',
  '.svg',
  '.html',
  '.webmanifest',
  '.css',
  '.toml',
]);

const SKIP_DIRS = new Set(['node_modules', '.git', 'dist', '.seo-baseline']);

/** Ordered longest-first replacements. */
const REPLACEMENTS = [
  ['fortnite-cheats.com', 'localhost:4321'],
  ['FortniteCheats', 'PalworldHacks'],
  ['Fortnitecheats', 'Palworldhacks'],
  ['fortnitecheats', 'palworldhacks'],

  ['/products/fortnite-cheats', '/products/palworld-hacks'],
  ['products/fortnite-cheats', 'products/palworld-hacks'],

  ['Fortnite Cheats', 'Palworld Hacks'],
  ['Fortnite cheats', 'Palworld hacks'],
  ['fortnite cheats', 'palworld hacks'],

  ['Fortnite', 'Palworld'],
  ['fortnite', 'palworld'],

  ['Easy Anti-Cheat', 'Palworld anti-cheat'],
  ['easy anti-cheat', 'palworld anti-cheat'],
  ['EAC ban', 'anti-cheat ban'],
  ['EAC update', 'anti-cheat update'],
  ['EAC patch', 'anti-cheat patch'],
  [' after EAC', ' after anti-cheat'],
  [' an EAC', ' an anti-cheat'],
  ['EAC/', 'anti-cheat/'],
  ['/EAC', '/anti-cheat'],
  [' EAC ', ' anti-cheat '],
  ['(EAC)', '(anti-cheat)'],
  ['"EAC"', '"anti-cheat"'],
  ["'EAC'", "'anti-cheat'"],

  ['Battle Royale', 'Open World'],
  ['Zero Build', 'Co-op'],
  ['Epic Games Launcher', 'Steam / Game Pass'],
  ['Epic', 'Steam'],
];

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (SKIP_DIRS.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out;
}

function applyText(content) {
  let next = content;
  for (const [from, to] of REPLACEMENTS) {
    if (next.includes(from)) next = next.split(from).join(to);
  }
  return next;
}

function renameProductDir() {
  const from = path.join(root, 'src', 'pages', 'products', 'fortnite-cheats');
  const to = path.join(root, 'src', 'pages', 'products', 'palworld-hacks');
  if (fs.existsSync(from) && !fs.existsSync(to)) {
    fs.renameSync(from, to);
    console.log('renamed product dir → palworld-hacks');
  }
}

renameProductDir();

const files = walk(root).filter((f) => TEXT_EXTS.has(path.extname(f).toLowerCase()));
let changed = 0;
for (const file of files) {
  if (file.endsWith(`${path.sep}rebrand-palworld.mjs`)) continue;
  if (file.endsWith(`${path.sep}rebrand-fortnite.mjs`)) continue;
  const before = fs.readFileSync(file, 'utf8');
  const after = applyText(before);
  if (after !== before) {
    fs.writeFileSync(file, after);
    changed++;
    console.log('updated', path.relative(root, file));
  }
}

console.log(`Done. Updated ${changed} text files.`);
