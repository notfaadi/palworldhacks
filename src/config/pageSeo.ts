/**
 * Central titles/descriptions for high-traffic routes.
 * After Search Console shows impressions, edit the matching path here and redeploy.
 */

export interface PageSeoEntry {
  title: string;
  description: string;
}

export const PAGE_SEO: Record<string, PageSeoEntry> = {
  '/': {
    title: 'Buy Undetected Palworld Hacks | Aimbot, ESP & Wallhack',
    description:
      'Buy undetected Palworld hacks for PC — aimbot, ESP, wallhack, radar, loot ESP and skin changer. Updated after every Palworld anti-cheat patch.',
  },
  '/products/palworld-hacks/': {
    title: 'Buy Palworld Hacks | Elite, HWID Spoofer & Skin Changer',
    description:
      'Shop Palworld hacks for PC: Elite aimbot & ESP wallhack, HWID spoofer, UGC recovery and Skin Changer. Instant delivery after checkout.',
  },
  '/products/palworld-hacks/elite/': {
    title: 'Buy Palworld Elite Cheats | Aimbot, ESP & Loot Assist',
    description:
      'Buy Palworld Elite cheats with aimbot, ESP wallhack, loot assist, Auto Finish, Skin Changer and priority anti-cheat patch updates.',
  },
  '/products/palworld-hacks/hwid-spoofer/': {
    title: 'Buy Palworld HWID Spoofer | Hardware Ban Bypass',
    description:
      'Buy a Palworld HWID spoofer for PC hardware bans — disk/MAC tools, compatibility scan and post-spoof checks before you launch cheats again.',
  },
  '/products/palworld-hacks/ugc/': {
    title: 'Buy Palworld UGC | anti-cheat & Steam Ban Appeal Tools',
    description:
      'Buy Palworld UGC (Unban & Governance Control) to organize Steam and anti-cheat ban appeals, dispute workflows and case tracking.',
  },
  '/products/palworld-hacks/unlock-all/': {
    title: 'Buy Palworld Skin Changer | Unlock All Cosmetics',
    description:
      'Buy Palworld Skin Changer / Unlock All — local outfit, wrap and pickaxe previews with your Palworld hacks loadout.',
  },
  '/products/palworld-hacks/utilities/': {
    title: 'Buy Palworld Cheat Utilities | HWID, UGC & Skin Changer',
    description:
      'Buy Palworld cheat utilities: HWID spoofer after hardware bans, UGC for Steam/anti-cheat appeals, and local Skin Changer / Unlock All.',
  },
  '/blog/': {
    title: 'Palworld Cheat Guides | Aimbot, ESP Wallhack & EAC',
    description:
      'Read Palworld cheat guides on aimbot setup, ESP wallhack, Lite vs Pro, Creative practice and Palworld anti-cheat patch-day checks.',
  },
  '/forum/': {
    title: 'Palworld Hacks Forum | Aimbot, ESP & Setup Help',
    description:
      'Palworld hacks forum for aimbot configs, ESP wallhack setup, anti-cheat status and product questions before you buy.',
  },
  '/faq/': {
    title: 'Palworld Hacks FAQ | Aimbot, ESP, Bans & Setup',
    description:
      'Palworld hacks FAQ — tiers, aimbot, ESP wallhack, radar, HWID spoofer, Skin Changer, bans and loader setup before checkout.',
  },
  '/terms/': {
    title: 'Terms for Palworld Hacks | License & Refunds',
    description:
      'Terms for buying Palworld hacks on localhost:4321 — license use, delivery, refunds and account risk.',
  },
  '/privacy/': {
    title: 'Privacy Policy | Palworld Hacks Shop',
    description:
      'How the Palworld hacks shop at localhost:4321 uses analytics, cookies and contact data.',
  },
  '/about/': {
    title: 'About Palworld Hacks | Buy PC Aimbot & ESP',
    description:
      'About Palworld Hacks — we sell PC Palworld hacks (aimbot, ESP, wallhack), guides and utilities at localhost:4321.',
  },
  '/support/': {
    title: 'Palworld Hacks Support | Loader, HWID & Checkout',
    description:
      'Palworld hacks support for loader setup, aimbot/ESP configs, HWID spoofing and checkout help — 24/7 Discord.',
  },
};

export function normalizeSeoPath(pathname: string): string {
  let path = pathname || '/';
  if (!path.startsWith('/')) path = `/${path}`;
  if (path !== '/' && !path.endsWith('/')) path = `${path}/`;
  return path;
}

export function getPageSeoEntry(pathname: string): PageSeoEntry | undefined {
  return PAGE_SEO[normalizeSeoPath(pathname)];
}
