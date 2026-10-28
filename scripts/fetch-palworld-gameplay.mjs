/**
 * Download official Palworld Steam screenshots for homepage hero slider + blog thumbs.
 * Uses user-provided capture for primary hero when present.
 * Run: node scripts/fetch-palworld-gameplay.mjs && npm run optimize:images
 */
import { writeFile, mkdir, readFile, access } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const gameplayDir = path.resolve('public/images/gameplay');
const blogDir = path.resolve('public/images/blog');

const USER_HERO_CANDIDATES = [
  path.resolve(
    process.env.USER_HERO_PATH ||
      '../.cursor/projects/c-Users-Faadi-Khan-palworld-levo/assets/c__Users_Faadi_Khan_AppData_Roaming_Cursor_User_workspaceStorage_d9fd0903aaaeb91d0df45e180530e8ed_images_image-f31e9297-5492-4002-8af5-6d5eaca2a6a8.png',
  ),
  path.resolve(
    'assets/c__Users_Faadi_Khan_AppData_Roaming_Cursor_User_workspaceStorage_d9fd0903aaaeb91d0df45e180530e8ed_images_image-f31e9297-5492-4002-8af5-6d5eaca2a6a8.png',
  ),
];

const IGN_PALWORLD = [
  'https://sm.ign.com/t/ign_cz/gallery/p/palworld-s/palworld-screenshots_2j6c.1400.jpg',
  'https://sm.ign.com/t/ign_cz/photo/default/palworld-screenshot-01-1686265527901_zre8.200.jpg',
  'https://sm.ign.com/t/ign_cz/photo/default/palworld-screenshot-02-1686265527901_nn2t.200.jpg',
  'https://sm.ign.com/t/ign_cz/photo/default/palworld-screenshot-03-1686265527902_v32a.200.jpg',
  'https://sm.ign.com/t/ign_cz/photo/default/palworld-screenshot-04-1686265527902_vwu4.200.jpg',
  'https://sm.ign.com/t/ign_cz/photo/default/palworld-screenshot-05-1686265527902_yymm.200.jpg',
];

const GAMEPLAY_FILES = [
  'palworld-esp-wallhack.png',
  'palworld-aimbot-combat.png',
  'palworld-radar-hack.png',
  'palworld-skin-changer.png',
  'palworld-auto-aim.png',
  'palworld-loot-radar.png',
  'palworld-player-esp.png',
  'palworld-thermal-esp.png',
  'palworld-build-fight-esp.png',
  'palworld-arena-wallhack.png',
  'palworld-spawn-island-esp.png',
  'palworld-long-range-esp.png',
  'palworld-aimbot-lock.png',
  'palworld-chams-esp.png',
  'palworld-squad-esp.png',
  'palworld-combat-esp.png',
];

const BLOG_BASES = [
  'palworld-cheat-codes-guide',
  'palworld-console-cheats-tips',
  'how-to-use-palworld-cheat-codes',
  'palworld-cheats-features-guide',
  'palworld-console-commands-cheats',
  'palworld-lite-vs-pro',
  'palworld-elite-tier-guide',
  'palworld-aimbot-ranked-guide',
  'palworld-esp-wallhack-setup',
  'palworld-radar-hack-guide',
  'palworld-skin-changer-guide',
  'eac-patch-day-checklist',
  'palworld-hwid-spoofer-after-ban',
  'how-to-buy-palworld-cheats-2026',
  'palworld-aimbot-combat-guide',
  'eac-bypass-palworld-guide',
  'palworld-external-cheat-guide',
  'palworld-stream-proof-setup',
];

async function fileExists(p) {
  try {
    await access(p);
    return true;
  } catch {
    return false;
  }
}

async function resolveUserHeroPath() {
  for (const candidate of USER_HERO_CANDIDATES) {
    if (await fileExists(candidate)) return candidate;
  }
  return null;
}

async function fetchSteamScreenshotUrls() {
  const res = await fetch('https://store.steampowered.com/api/appdetails?appids=1623730', {
    headers: { 'User-Agent': 'Mozilla/5.0 (compatible; PalworldHacksSite/1.0)' },
  });
  if (!res.ok) throw new Error(`Steam API ${res.status}`);
  const json = await res.json();
  const shots = json['1623730']?.data?.screenshots ?? [];
  return shots.map((s) => s.path_full).filter(Boolean);
}

async function toGameplayPng(input) {
  return sharp(input)
    .rotate()
    .resize({ width: 1600, height: 900, fit: 'cover', position: 'centre' })
    .png({ compressionLevel: 8 })
    .toBuffer();
}

async function fetchRemotePng(url) {
  const res = await fetch(url, {
    headers: { 'User-Agent': 'Mozilla/5.0 (compatible; PalworldHacksSite/1.0)' },
  });
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  const input = Buffer.from(await res.arrayBuffer());
  return toGameplayPng(input);
}

async function saveGameplay(file, buf) {
  await writeFile(path.join(gameplayDir, file), buf);
  console.log('saved gameplay', file, buf.length);
}

await mkdir(gameplayDir, { recursive: true });
await mkdir(blogDir, { recursive: true });

const steamUrls = await fetchSteamScreenshotUrls();
if (steamUrls.length < 8) {
  console.warn('Unexpected Steam screenshot count', steamUrls.length);
}

const userHero = await resolveUserHeroPath();
if (userHero) {
  const buf = await toGameplayPng(await readFile(userHero));
  await saveGameplay('palworld-esp-wallhack.png', buf);
  console.log('hero from user screenshot', userHero);
} else {
  console.warn('User hero not found; using Steam shot 0');
}

let steamIndex = 0;
for (const file of GAMEPLAY_FILES) {
  if (file === 'palworld-esp-wallhack.png' && userHero) continue;

  let buf = null;
  while (steamIndex < steamUrls.length && !buf) {
    const url = steamUrls[steamIndex++];
    try {
      buf = await fetchRemotePng(url);
    } catch (err) {
      console.warn('skip steam url', url, err.message);
    }
  }

  if (!buf) {
    const ignUrl = IGN_PALWORLD[GAMEPLAY_FILES.indexOf(file) % IGN_PALWORLD.length];
    buf = await fetchRemotePng(ignUrl);
  }

  await saveGameplay(file, buf);
}

for (let i = 0; i < BLOG_BASES.length; i++) {
  const base = BLOG_BASES[i];
  const url = steamUrls[i % steamUrls.length] ?? IGN_PALWORLD[i % IGN_PALWORLD.length];
  try {
    const buf = await fetchRemotePng(url);
    await writeFile(path.join(blogDir, `${base}.png`), buf);
    console.log('saved blog', base);
  } catch (err) {
    console.warn('skip blog', base, err.message);
  }
}

console.log('Done fetching Palworld gameplay images.');
