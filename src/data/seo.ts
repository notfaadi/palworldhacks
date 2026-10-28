/**
 * Single source of truth for route metadata (titles, descriptions, keywords, H1, OG slugs).
 * TODO: Replace placeholder OG JPGs in public/img/og/ with branded 1200×630 art if needed.
 */

export interface SeoPageEntry {
  path: string;
  title: string;
  description: string;
  h1: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  longTailKeywords: string[];
  /** Filename stem for /img/og/[ogSlug].jpg */
  ogSlug: string;
  /** Optional topic hub for blog internal linking */
  topicHubPath?: string;
}

function entry(e: SeoPageEntry): SeoPageEntry {
  return e;
}

/** Inventory routes — titles/descriptions applied exactly per SEO spec. */
export const SEO_PAGE_INVENTORY: Record<string, SeoPageEntry> = {
  '/': entry({
    path: '/',
    title: 'Palworld Hacks & Cheats 2026 – Free Trainers & Mods',
    description:
      'Download free, undetected Palworld hacks and trainers for PC. God mode, infinite stamina, 100% capture rate, item spawning and a mod menu — updated for 1.0.5.',
    h1: 'Palworld Hacks & Cheats — Free Trainers, Mod Menu and Console Commands',
    primaryKeyword: 'palworld hacks',
    secondaryKeywords: ['palworld cheats', 'palworld trainer', 'palworld mod menu'],
    longTailKeywords: [
      'free palworld hacks 2026',
      'palworld trainer download no survey',
      'palworld mod menu 1.0.5',
      'palworld god mode pc',
      'palworld cheat engine table',
      'palworld console commands list',
    ],
    ogSlug: 'home',
  }),
  '/palworld-trainers/': entry({
    path: '/palworld-trainers/',
    title: 'Free Palworld Trainers 2026 – Undetected PC Cheats',
    description:
      'Grab free Palworld trainers for Steam and Game Pass. God mode, infinite stamina, instant crafting, 100% capture chance and stat edits — no survey, no paywall.',
    h1: 'Free Palworld Trainers for Steam and Game Pass PC',
    primaryKeyword: 'palworld trainer',
    secondaryKeywords: [
      'palworld cheat engine table',
      'palworld trainer download',
      'fling palworld trainer',
    ],
    longTailKeywords: [
      'wemod palworld trainer',
      'external ram trainer palworld',
      'palworld trainer 1.0.5',
      'undetected palworld trainer pc',
      'game pass palworld trainer',
      'palworld infinite stamina trainer',
    ],
    ogSlug: 'palworld-trainers',
    topicHubPath: '/palworld-trainers/',
  }),
  '/palworld-mod-menu/': entry({
    path: '/palworld-mod-menu/',
    title: 'Palworld Mod Menu 2026 – Free Hack Download (PC)',
    description:
      'A free Palworld mod menu with ESP, teleport, item spawning and speed hacks. Works on the 1.0.5 patch for Steam and Game Pass PC — clean, no survey.',
    h1: 'Palworld Mod Menu — ESP, Teleport and Speed Hacks',
    primaryKeyword: 'palworld mod menu',
    secondaryKeywords: ['palworld esp', 'palworld teleport hack', 'palworld speed hack'],
    longTailKeywords: [
      'palworld mod menu download',
      'external overlay mod menu',
      'no dll injection palworld menu',
      'palworld esp wallhack menu',
      'palworld teleport coordinates',
      'palworld speed hack 1.0.5',
    ],
    ogSlug: 'palworld-mod-menu',
    topicHubPath: '/palworld-mod-menu/',
  }),
  '/palworld-console-commands/': entry({
    path: '/palworld-console-commands/',
    title: 'Palworld Console Commands & Cheat Codes (Full List)',
    description:
      'Every Palworld console command and cheat code in one list — item IDs, spawn commands, teleport, XP and admin commands. Copy-paste ready with examples.',
    h1: 'All Palworld Console Commands and Cheat Codes',
    primaryKeyword: 'palworld console commands',
    secondaryKeywords: ['palworld cheat codes', 'palworld admin commands', 'palworld spawn command'],
    longTailKeywords: [
      'palworld item spawn command',
      'palworld give item command',
      'palworld teleport command',
      'palworld xp cheat command',
      'private server admin commands',
      'dedicated server palworld cheats',
    ],
    ogSlug: 'palworld-console-commands',
    topicHubPath: '/palworld-console-commands/',
  }),
  '/palworld-mods/': entry({
    path: '/palworld-mods/',
    title: 'Best Palworld Mods 2026 – QoL, Overhauls & Cheats',
    description:
      'The best Palworld mods of 2026 — performance fixes, UI overhauls, new Pals and cheat mods. All free, version-checked against patch 1.0.5 and safe to install.',
    h1: 'Best Palworld Mods of 2026 — QoL, Overhauls and Cheats',
    primaryKeyword: 'palworld mods',
    secondaryKeywords: ['best palworld mods', 'palworld qol mods', 'palworld mod manager'],
    longTailKeywords: [
      'palworld nexus mods 2026',
      'palworld performance mod',
      'palworld ui overhaul mod',
      'palworld breeding mod',
      'palworld base building mod',
      'palworld mod pack 1.0.5',
    ],
    ogSlug: 'palworld-mods',
    topicHubPath: '/palworld-mods/',
  }),
  '/palworld-god-mode/': entry({
    path: '/palworld-god-mode/',
    title: 'Palworld God Mode Hack – How to Enable It (2026)',
    description:
      'Turn on Palworld god mode in under two minutes. Step-by-step for trainers, mods and console commands, plus what breaks and how to turn it off safely.',
    h1: 'Palworld God Mode — How to Enable It in Two Minutes',
    primaryKeyword: 'palworld god mode',
    secondaryKeywords: ['palworld invincibility', 'palworld infinite health', 'palworld no damage'],
    longTailKeywords: [
      'enable god mode palworld trainer',
      'palworld god mode console',
      'palworld invincibility cheat',
      'disable god mode palworld',
      'palworld god mode co-op',
      'palworld god mode private server',
    ],
    ogSlug: 'palworld-god-mode',
    topicHubPath: '/palworld-god-mode/',
  }),
  '/palworld-item-spawner/': entry({
    path: '/palworld-item-spawner/',
    title: 'Palworld Item Spawner & Item IDs – Spawn Anything',
    description:
      'Spawn any item in Palworld with our item spawner guide and full item ID list. Works offline and on private servers — includes commands for every material.',
    h1: 'Palworld Item Spawner and Full Item ID List',
    primaryKeyword: 'palworld item ids',
    secondaryKeywords: ['palworld item spawner', 'palworld spawn item command', 'palworld item list'],
    longTailKeywords: [
      'palworld spawn weapon id',
      'palworld sphere id list',
      'palworld material spawn command',
      'lifmunk effigy item id',
      'ancient technology points spawn',
      'palworld jetragon spawn id',
    ],
    ogSlug: 'palworld-item-spawner',
    topicHubPath: '/palworld-item-spawner/',
  }),
  '/palworld-hacks-xbox/': entry({
    path: '/palworld-hacks-xbox/',
    title: 'Palworld Hacks for Xbox & Game Pass PC (Working 2026)',
    description:
      "Palworld hacks that work on Xbox and Game Pass PC. What's supported, what isn't, and the safest trainers for console players in 2026, tested after 1.0.5.",
    h1: 'Palworld Hacks That Work on Xbox and Game Pass PC',
    primaryKeyword: 'palworld xbox cheats',
    secondaryKeywords: [
      'palworld game pass cheats',
      'palworld console hacks',
      'palworld xbox trainer',
    ],
    longTailKeywords: [
      'xbox palworld mod support',
      'game pass pc trainer palworld',
      'xbox series x palworld cheats',
      'palworld console vs pc cheats',
      'windows 11 game pass palworld',
      'palworld xbox ban risk',
    ],
    ogSlug: 'palworld-hacks-xbox',
    topicHubPath: '/palworld-hacks-xbox/',
  }),
  '/download/': entry({
    path: '/download/',
    title: 'Download Palworld Hacks – Free, No Survey (2026)',
    description:
      'Download Palworld hacks free — one archive, no survey, no installer bloat. Includes trainer, mod menu and console command sheet, updated for 1.0.5.',
    h1: 'Download Palworld Hacks — Free, No Survey',
    primaryKeyword: 'palworld hack download',
    secondaryKeywords: [
      'free palworld trainer',
      'palworld hack no survey',
      'palworld cheat download',
    ],
    longTailKeywords: [
      'palworld hacks zip download',
      'palworld trainer pack 2026',
      'no survey palworld mod menu',
      'palworld cheat bundle 1.0.5',
      'safe palworld hack download',
      'palworld hacks mirror link',
    ],
    ogSlug: 'download',
  }),
  '/how-to-install/': entry({
    path: '/how-to-install/',
    title: 'How to Install Palworld Hacks – Step-by-Step Guide',
    description:
      'How to install Palworld hacks without breaking your save. Step-by-step setup for trainers and mods, plus how to back up saves and roll back a bad install.',
    h1: 'How to Install Palworld Hacks Without Breaking Your Save',
    primaryKeyword: 'how to install palworld trainer',
    secondaryKeywords: [
      'palworld hack not working',
      'palworld trainer setup',
      'palworld save backup',
    ],
    longTailKeywords: [
      'install external palworld trainer',
      'palworld mod folder path',
      'restore palworld save backup',
      'windows defender palworld trainer',
      'run trainer as administrator',
      'palworld 1.0.5 install guide',
    ],
    ogSlug: 'how-to-install',
  }),
  '/faq/': entry({
    path: '/faq/',
    title: 'Palworld Hacks FAQ – Safety, Bans & Compatibility',
    description:
      'Is it safe? Will I get banned? Palworld hack FAQ covering detection, co-op and server rules, antivirus flags, Game Pass limits and refunds—answered straight.',
    h1: 'Palworld Hacks FAQ — Safety, Bans and Compatibility',
    primaryKeyword: 'are palworld hacks safe',
    secondaryKeywords: ['palworld ban risk', 'palworld coop cheats', 'palworld antivirus false positive'],
    longTailKeywords: [
      'palworld eac detection 2026',
      'palworld private server cheats',
      'palworld game pass anti cheat',
      'palworld hwid ban trainer',
      'palworld co-op cheat rules',
      'palworld refund after ban',
    ],
    ogSlug: 'faq',
  }),
  '/blog/': entry({
    path: '/blog/',
    title: 'Palworld Hack Updates & Patch Notes Blog',
    description:
      'Palworld hack updates, patch compatibility notes and new cheat releases. We track every 1.0.x patch so your trainer keeps working after each update.',
    h1: 'Palworld Hack Updates and Patch Notes',
    primaryKeyword: 'palworld patch notes',
    secondaryKeywords: ['palworld update compatibility', 'palworld trainer update'],
    longTailKeywords: [
      'palworld 1.0.5 patch cheats',
      'palworld hotfix trainer status',
      'palworld offset update blog',
      'palworld eac patch day',
      'palworld loader update notes',
      'palworld firmware changelog',
    ],
    ogSlug: 'blog',
  }),
};

/** Legacy shop / utility routes (unique titles, not in public inventory). */
export const SEO_LEGACY_PAGES: Record<string, SeoPageEntry> = {
  '/products/palworld-hacks/': entry({
    path: '/products/palworld-hacks/',
    title: 'Palworld Hacks Shop 2026 – Elite, Cloud DMA & Tools',
    description:
      'Shop Palworld hacks for Windows 10 and 11: Cloud DMA, Elite ESP and aimbot, HWID spoofer and utilities. Levo checkout, tested after Palworld 1.0.5 — no survey.',
    h1: 'Palworld Hacks Shop — Elite, Cloud DMA and Utilities',
    primaryKeyword: 'buy palworld hacks',
    secondaryKeywords: ['palworld elite cheats', 'palworld cloud dma', 'levocheats palworld'],
    longTailKeywords: [],
    ogSlug: 'products',
  }),
  '/forum/': entry({
    path: '/forum/',
    title: 'Palworld Hacks Forum 2026 – Setup & Patch Help',
    description:
      'Community forum for Palworld trainer setup, ESP configs and 1.0.5 patch threads. Share logs, compare external trainers and get help before you download hacks.',
    h1: 'Palworld Hacks Community Forum',
    primaryKeyword: 'palworld hacks forum',
    secondaryKeywords: ['palworld trainer help', 'palworld esp setup'],
    longTailKeywords: [],
    ogSlug: 'forum',
  }),
  '/support/': entry({
    path: '/support/',
    title: 'Palworld Hacks Support – Loader & Install Help',
    description:
      'Get Palworld hack support for loader errors, Game Pass paths and antivirus false positives. Discord help for trainers and mod menus on patch 1.0.5 — free, no survey.',
    h1: 'Palworld Hacks Support',
    primaryKeyword: 'palworld hack support',
    secondaryKeywords: ['palworld loader help', 'palworld trainer not working'],
    longTailKeywords: [],
    ogSlug: 'support',
  }),
};

export const ALL_SEO_PAGES: Record<string, SeoPageEntry> = {
  ...SEO_PAGE_INVENTORY,
  ...SEO_LEGACY_PAGES,
};

export function normalizeSeoPath(pathname: string): string {
  let path = pathname || '/';
  if (!path.startsWith('/')) path = `/${path}`;
  if (path !== '/' && !path.endsWith('/')) path = `${path}/`;
  return path;
}

export function getSeoPageEntry(pathname: string): SeoPageEntry | undefined {
  const path = normalizeSeoPath(pathname);
  if (ALL_SEO_PAGES[path]) return ALL_SEO_PAGES[path];
  if (path.startsWith('/blog/page/')) return ALL_SEO_PAGES['/blog/'];
  return undefined;
}

export function ogImagePathForEntry(entry: SeoPageEntry): string {
  return `/img/og/${entry.ogSlug}.jpg`;
}

export function resolveSeo(pathname: string): { title: string; description: string; ogImage: string; entry?: SeoPageEntry } {
  const entry = getSeoPageEntry(pathname);
  if (entry) {
    return {
      title: entry.title,
      description: entry.description,
      ogImage: ogImagePathForEntry(entry),
      entry,
    };
  }
  return {
    title: 'Palworld Hacks & Cheats 2026 – Free Trainers & Mods',
    description: SEO_PAGE_INVENTORY['/']!.description,
    ogImage: ogImagePathForEntry(SEO_PAGE_INVENTORY['/']!),
  };
}

/** Top-level hubs linked from the homepage. */
export const SEO_HUB_LINKS: { href: string; label: string }[] = [
  { href: '/palworld-trainers/', label: 'Trainers' },
  { href: '/palworld-mod-menu/', label: 'Mod menu' },
  { href: '/palworld-console-commands/', label: 'Console commands' },
  { href: '/palworld-mods/', label: 'Mods' },
  { href: '/palworld-god-mode/', label: 'God mode' },
  { href: '/palworld-item-spawner/', label: 'Item spawner' },
  { href: '/palworld-hacks-xbox/', label: 'Xbox & Game Pass' },
  { href: '/download/', label: 'Download' },
  { href: '/how-to-install/', label: 'Install guide' },
  { href: '/faq/', label: 'FAQ' },
  { href: '/blog/', label: 'Updates blog' },
];
