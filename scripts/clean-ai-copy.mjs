import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const files = [
  'src/utils/schema.ts',
  'src/utils/rss.ts',
  'src/data/faq.ts',
  'src/data/blog/posts.ts',
  'src/i18n/en.ts',
  'src/config/site.ts',
];

const reps = [
  ['PalworldHacks Editorial', 'Palworld Hacks'],
  ['PalworldHacks Community Forum', 'Palworld Hacks Forum'],
  ['PalworldHacks Blog', 'Palworld Hacks Blog'],
  ['PalworldHacks Support', 'Palworld Hacks Support'],
  ['Join PalworldHacks on Discord', 'Join Palworld Hacks on Discord'],
  ['PalworldHacks home', 'Palworld Hacks home'],
  ['PalworldHacks', 'Palworld Hacks'],
  ["TITLE_PREFIX = 'Palworld Hacks & Hacks'", "TITLE_PREFIX = 'Palworld Hacks'"],
  ['humanized Aimbot', 'smooth aimbot'],
  ['humanized order', 'smooth order'],
  ['humanized input', 'smooth input'],
  ['humanized', 'smooth'],
  [
    'Climbing ranked play with palworld aimbot means smooth aimbot—not instant bot bursts that draw reports.',
    'Ranked Palworld aimbot works better with smooth tracking than instant snaps that get you reported.',
  ],
  [
    'maintains private palworld hacks for Windows PC Open World and Co-op—not console lobby codes. Every module ships through the operator portal with secure checkout, Discord support, and live status banners before patch-day queues.',
    'sells Palworld hacks for Windows PC Open World and Co-op. Check status before you queue after a patch.',
  ],
  [
    'maintains private palworld hacks for Windows PC Open World and Co-op. Every module ships through the operator portal with secure checkout, Discord support, and live status banners before patch-day queues.',
    'sells Palworld hacks for Windows PC Open World and Co-op. Check status before you queue after a patch.',
  ],
  [
    'maintains private palworld hacks for Windows PC Open World and Co-op. Check live status before every patch-day queue.',
    'sells Palworld hacks for Windows PC Open World and Co-op. Check status before you queue after a patch.',
  ],
  [
    'maintains private palworld hacks for Windows PC Open World and Co-op.',
    'sells Palworld hacks for Windows PC Open World and Co-op.',
  ],
  [
    'ships a modular external suite for Windows PC ranked—not lobby cheat codes. Aimbot tracks targets, loot assist clears POIs, ESP wallhack exposes third-parties, and utility tools like Radar Hack and Skin Changer round out the toolkit. This is the complete feature map across',
    'sells external Palworld hacks for PC Ranked. Aimbot, loot assist, ESP wallhack, radar and Skin Changer. See',
  ],
];

for (const rel of files) {
  const file = path.join(root, rel);
  let text = fs.readFileSync(file, 'utf8');
  const before = text;
  for (const [from, to] of reps) text = text.split(from).join(to);
  if (text !== before) {
    fs.writeFileSync(file, text);
    console.log('updated', rel);
  } else {
    console.log('noop', rel);
  }
}
