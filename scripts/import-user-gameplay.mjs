/**
 * Copy user cheat screenshots (long Windows paths) into public/images,
 * then write SEO-named PNGs for gameplay + blog.
 */
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const assetsDir =
  'C:\\Users\\3Tee System\\.cursor\\projects\\c-Users-3Tee-System-Downloads-palworld-cheats-com-main\\assets';
const importDir = path.resolve('_import');
const gameplayDir = path.resolve('public/images/gameplay');
const blogDir = path.resolve('public/images/blog');

/** Skip Valorant screenshot only. */
const SKIP_SUBSTRINGS = ['065800-cb09d0b5'];

const GAMEPLAY = [
  { file: 'palworld-esp-wallhack.png', alt: 'Palworld ESP wallhack cheat gameplay with player boxes distance tags and aimbot FOV' },
  { file: 'palworld-aimbot-combat.png', alt: 'Palworld aimbot cheat gameplay with FOV circle and green skeleton ESP on enemy' },
  { file: 'palworld-player-esp.png', alt: 'Palworld player ESP wallhack showing skeletons boxes and distance meters' },
  { file: 'palworld-radar-hack.png', alt: 'Palworld radar and ESP overlay with enemy name tags health and range markers' },
  { file: 'palworld-auto-aim.png', alt: 'Palworld sniper aimbot cheat with green ESP box weapon label and FOV circle' },
  { file: 'palworld-loot-radar.png', alt: 'Palworld loot and chest ESP gameplay with enemy boxes and distance trackers' },
  { file: 'palworld-skin-changer.png', alt: 'Palworld cheat gameplay with chams skeleton ESP and aim lock on pier' },
  { file: 'palworld-thermal-esp.png', alt: 'Palworld thermal vision ESP showing skeleton wallhack HP and distance' },
  { file: 'palworld-build-fight-esp.png', alt: 'Palworld build fight ESP wallhack with names HP bars and FOV circle' },
  { file: 'palworld-arena-wallhack.png', alt: 'Palworld arena wallhack ESP with wireframe players and weapon tags' },
  { file: 'palworld-spawn-island-esp.png', alt: 'Palworld spawn island ESP with skeleton boxes and aimbot reticle' },
  { file: 'palworld-long-range-esp.png', alt: 'Palworld long range ESP wallhack with enemy names health and weapons' },
  { file: 'palworld-aimbot-lock.png', alt: 'Palworld aimbot lock with green skeleton ESP FOV circle and head priority' },
  { file: 'palworld-chams-esp.png', alt: 'Palworld chams and skeleton ESP cheat on wooden pier' },
  { file: 'palworld-squad-esp.png', alt: 'Palworld multi-player ESP wallhack with boxes skeletons and distances' },
  { file: 'palworld-combat-esp.png', alt: 'Palworld combat ESP and aimbot overlay in open field fight' },
];

const BLOG = [
  'palworld-cheat-codes-guide.png',
  'palworld-console-cheats-tips.png',
  'how-to-use-palworld-cheat-codes.png',
  'palworld-cheats-features-guide.png',
  'palworld-console-commands-cheats.png',
  'palworld-lite-vs-pro.png',
  'palworld-elite-tier-guide.png',
  'palworld-aimbot-ranked-guide.png',
  'palworld-esp-wallhack-setup.png',
  'palworld-radar-hack-guide.png',
  'palworld-skin-changer-guide.png',
  'eac-patch-day-checklist.png',
  'palworld-hwid-spoofer-after-ban.png',
  'how-to-buy-palworld-cheats-2026.png',
  'palworld-aimbot-combat-guide.png',
  'eac-bypass-palworld-guide.png',
  'palworld-external-cheat-guide.png',
  'palworld-stream-proof-setup.png',
];

function longPath(p) {
  const resolved = path.resolve(p);
  if (resolved.startsWith('\\\\?\\')) return resolved;
  return `\\\\?\\${resolved}`;
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function listAssetPngs() {
  const entries = fs.readdirSync(longPath(assetsDir));
  return entries
    .filter((f) => f.toLowerCase().endsWith('.png'))
    .filter((f) => !SKIP_SUBSTRINGS.some((s) => f.includes(s)))
    .sort();
}

async function writeResizedPng(src, dest) {
  const buf = await sharp(src)
    .rotate()
    .resize({ width: 1600, withoutEnlargement: true })
    .png({ compressionLevel: 8 })
    .toBuffer();
  fs.writeFileSync(dest, buf);
  console.log('wrote', path.relative(process.cwd(), dest), buf.length);
}

ensureDir(importDir);
ensureDir(gameplayDir);
ensureDir(blogDir);

const sources = listAssetPngs();
console.log(`Found ${sources.length} source screenshots`);

const shortFiles = [];
for (let i = 0; i < sources.length; i++) {
  const name = sources[i];
  const short = `shot-${String(i + 1).padStart(2, '0')}.png`;
  const from = longPath(path.join(assetsDir, name));
  const to = path.join(importDir, short);
  fs.copyFileSync(from, to);
  shortFiles.push(to);
  console.log('copied', short, '←', name.slice(-40));
}

if (!shortFiles.length) {
  console.error('No screenshots copied.');
  process.exit(1);
}

const alts = [];
for (let i = 0; i < GAMEPLAY.length; i++) {
  const src = shortFiles[i % shortFiles.length];
  const dest = path.join(gameplayDir, GAMEPLAY[i].file);
  await writeResizedPng(src, dest);
  alts.push({ file: GAMEPLAY[i].file, alt: GAMEPLAY[i].alt, srcIndex: i % shortFiles.length });
}

for (let i = 0; i < BLOG.length; i++) {
  // Offset so blog covers prefer different frames than gameplay slots when possible
  const src = shortFiles[(i + 3) % shortFiles.length];
  await writeResizedPng(src, path.join(blogDir, BLOG[i]));
}

fs.writeFileSync(
  path.join(process.cwd(), 'scripts', 'gameplay-image-alts.json'),
  JSON.stringify({ gameplay: alts, sourceCount: shortFiles.length }, null, 2),
);

console.log('Done. Next: npm run optimize:images');
