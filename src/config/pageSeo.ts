/**
 * @deprecated Import from ../data/seo.ts — kept for backward-compatible imports.
 */
export {
  normalizeSeoPath,
  getSeoPageEntry as getPageSeoEntry,
  type SeoPageEntry as PageSeoEntry,
} from '../data/seo';

/** Product detail routes — unique titles (not in public SEO inventory). */
import type { SeoPageEntry } from '../data/seo';
import { normalizeSeoPath } from '../data/seo';

const PRODUCT_SEO: Record<string, Pick<SeoPageEntry, 'title' | 'description'>> = {
  '/products/palworld-hacks/elite/': {
    title: 'Palworld Elite Cheats 2026 – Aimbot & ESP Wallhack',
    description:
      'Palworld Elite cheats with aimbot, ESP wallhack and loot assist for Windows 11. Updated for Pocketpair 1.0.5, external loader, tested after anti-cheat patches — no survey.',
  },
  '/products/palworld-hacks/cloud-dma/': {
    title: 'Palworld Cloud DMA 2026 – Hardware DMA Suite',
    description:
      'Palworld Cloud DMA with hardware reads and cloud relay for second-PC setups on 1.0.5. Firmware profiles, operator portal and Levo checkout — no DLL injection on main PC.',
  },
  '/products/palworld-hacks/hwid-spoofer/': {
    title: 'Palworld HWID Spoofer 2026 – Hardware Ban Tool',
    description:
      'Palworld HWID spoofer for disk and MAC bans on Windows 10/11. Compatibility scan and post-spoof checks before relaunching trainers on Steam — use at your own risk.',
  },
  '/products/palworld-hacks/ugc/': {
    title: 'Palworld UGC Tools 2026 – Ban Appeal Workflow',
    description:
      'Palworld UGC utilities to organize Steam and anti-cheat ban appeals, dispute evidence and case tracking after hardware flags on 1.0.5 — documentation only, no survey.',
  },
  '/products/palworld-hacks/unlock-all/': {
    title: 'Palworld Skin Changer 2026 – Unlock All Cosmetics',
    description:
      'Palworld Skin Changer for local outfit and weapon previews on PC. Pairs with Elite cheats on patch 1.0.5 — cosmetic only, no ranked advantage claims.',
  },
  '/products/palworld-hacks/utilities/': {
    title: 'Palworld Cheat Utilities 2026 – HWID & Skin Tools',
    description:
      'Palworld cheat utilities: HWID spoofer, UGC appeal kit and Skin Changer. Windows 10/11 tools tested around 1.0.5 hotfixes — read FAQ before checkout.',
  },
  '/terms/': {
    title: 'Palworld Hacks Terms 2026 – License & Refunds',
    description:
      'Terms for Palworld hacks and utilities on getpalworldhack.net — license use, delivery, refunds and account risk on Steam and Game Pass PC after patch 1.0.5.',
  },
  '/privacy/': {
    title: 'Privacy Policy – Palworld Hacks Site',
    description:
      'How getpalworldhack.net uses analytics, cookies and contact data when you download trainers or shop Palworld cheats on Windows PC — updated 2026.',
  },
  '/about/': {
    title: 'About Palworld Hacks – Guides & Cheats 2026',
    description:
      'About getpalworldhack.net — Palworld trainer guides, mod menu docs and Elite checkout for Steam and Game Pass on patch 1.0.5. Free resources, no survey.',
  },
};

export function getProductSeoEntry(pathname: string): Pick<SeoPageEntry, 'title' | 'description'> | undefined {
  return PRODUCT_SEO[normalizeSeoPath(pathname)];
}
