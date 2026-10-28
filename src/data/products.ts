import { t } from '../i18n';
import { checkoutForSlug, checkoutPath } from '../config/checkout';
import type { IconName } from '../components/icons/types';

export interface ProductSlide {
  src: string;
  alt: string;
  caption: string;
  captionDesc: string;
}

export interface ProductOverview {
  title: string;
  paragraphs: string[];
}

export interface AcquisitionStep {
  num: string;
  title: string;
  desc: string;
}

export interface ProductAcquisition {
  title: string;
  steps: AcquisitionStep[];
}

export interface SystemRequirement {
  icon: IconName;
  text: string;
}

export interface ProductPage {
  slug: string;
  kind: 'tier' | 'utility';
  badge: string;
  category?: string;
  tier?: string;
  name: string;
  title: string;
  subtitle: string;
  desc: string;
  features: string[];
  more: number;
  variant?: 'essential' | 'popular' | 'limited';
  buyUrl: string;
  images: ProductSlide[];
  overview: ProductOverview;
  acquisition: ProductAcquisition;
  goodToKnow: string;
  limitations: string;
  fullFeatures: string[];
  systemRequirements: SystemRequirement[];
  about?: { type: 'h2' | 'p'; text: string }[];
  body: { type: 'h2' | 'p'; text: string }[];
  relatedBlogSlugs: string[];
}

/** Guides paired with each product detail page */
export const productRelatedBlogSlugs: Record<string, string[]> = {
  lite: ['palworld-esp-wallhack-setup', 'palworld-lite-vs-pro', 'palworld-radar-hack-guide', 'eac-patch-day-checklist'],
  pro: [
    'palworld-aimbot-co-op-guide',
    'palworld-aimbot-combat-guide',
    'palworld-lite-vs-pro',
    'palworld-stream-proof-setup',
  ],
  elite: [
    'palworld-elite-tier-guide',
    'palworld-cheats-features-guide',
    'palworld-esp-wallhack-setup',
    'eac-patch-day-checklist',
    'how-to-buy-palworld-cheats-2026',
  ],
  'hwid-spoofer': [
    'palworld-hwid-spoofer-after-ban',
    'eac-bypass-palworld-guide',
    'eac-patch-day-checklist',
    'palworld-external-cheat-guide',
  ],
  ugc: [
    'eac-bypass-palworld-guide',
    'palworld-hwid-spoofer-after-ban',
    'how-to-buy-palworld-cheats-2026',
  ],
  'unlock-all': [
    'palworld-skin-changer-guide',
    'palworld-cheats-features-guide',
    'palworld-stream-proof-setup',
  ],
  'cloud-dma': [
    'palworld-external-cheat-guide',
    'palworld-cheats-features-guide',
    'how-to-buy-palworld-cheats-2026',
    'eac-patch-day-checklist',
  ],
};

const productBase = '/products/palworld-hacks/';

const defaultAcquisitionSteps: AcquisitionStep[] = [
  {
    num: '01',
    title: 'Review current status',
    desc: 'Check the live banner on getpalworldhack.net and Discord #status before purchase—especially after a Palworld or anti-cheat update.',
  },
  {
    num: '02',
    title: 'Choose your access tier',
    desc: 'Select Elite palworld hacks or the utility that matches your goal. Review the feature list before checkout via our secure checkout.',
  },
  {
    num: '03',
    title: 'Contact the team',
    desc: 'Open Discord and confirm availability, Steam Games platform, and payment details with your order email ready.',
  },
  {
    num: '04',
    title: 'Follow guided setup',
    desc: 'Use only the operator portal, patch loader, and setup guide. Test in a lobby, load presets, then queue co-op or Co-op.',
  },
];

function acquisitionFor(productName: string): ProductAcquisition {
  return {
    title: `How to get ${productName}`,
    steps: defaultAcquisitionSteps,
  };
}

const sharedGoodToKnow =
  'Palworld and anti-cheat receive frequent updates. Confirm module availability on the live status panel at getpalworldhack.net before you purchase or launch. Overlay behavior may differ in lobbies, replays and spectator mode after patches.';

const sharedLimitations =
  'Third-party software in Palworld can violate Steam Terms of Service and lead to anti-cheat bans or account action. You use this software at your own risk. Compatibility and availability can change after game, EAC, or Windows updates without notice.';

const palworldSystemRequirements: SystemRequirement[] = [
  { icon: 'reqWindows', text: 'Supported 64-bit edition of Windows 10 or Windows 11.' },
  { icon: 'reqSteam', text: 'Current Palworld client via Steam Games with latest patches applied.' },
  { icon: 'reqSettings', text: 'Administrator access for loader installation and patch updates.' },
  { icon: 'reqWifi', text: 'Stable internet connection for portal access and patch delivery.' },
  { icon: 'reqCpu', text: 'A system that meets Palworld published hardware requirements.' },
];

type GalleryKey = keyof typeof galleryRaw;

const gameplay = '/images/gameplay';

const galleryRaw = {
  gpMapHack: {
    src: `${gameplay}/palworld-esp-wallhack.png`,
    alt: 'Palworld PC ESP wallhack overlay with player boxes, distance tags, and aimbot FOV circle',
    caption: 'ESP wallhack',
    captionDesc: 'Player boxes, distance tags and FOV overlay in Palworld.',
  },
  gpScripts: {
    src: `${gameplay}/palworld-aimbot-combat.png`,
    alt: 'Palworld PC aimbot in combat with FOV circle and green skeleton ESP on an enemy',
    caption: 'Aimbot',
    captionDesc: 'Aimbot FOV and skeleton ESP on an enemy player.',
  },
  gpZoomHack: {
    src: `${gameplay}/palworld-radar-hack.png`,
    alt: 'Palworld radar hack and ESP overlay showing enemy names, health bars, and range markers',
    caption: 'Radar / ESP',
    captionDesc: 'Enemy name tags, health and range on radar ESP.',
  },
  gpSkinChanger: {
    src: `${gameplay}/palworld-skin-changer.png`,
    alt: 'Palworld chams and skeleton ESP with aim lock during a pier fight on PC',
    caption: 'Chams / ESP',
    captionDesc: 'Skeleton ESP and aim lock on a pier fight.',
  },
  gpAutoKill: {
    src: `${gameplay}/palworld-auto-aim.png`,
    alt: 'Palworld sniper aimbot with green ESP box, weapon label, and scoped FOV circle',
    caption: 'Sniper aimbot',
    captionDesc: 'Scoped aimbot with ESP box and weapon label.',
  },
  gpFarmBot: {
    src: `${gameplay}/palworld-loot-radar.png`,
    alt: 'Palworld loot and chest ESP with enemy boxes and distance trackers on the map',
    caption: 'Loot ESP',
    captionDesc: 'Loot and enemy ESP with distance trackers.',
  },
  gpHeroEsp: {
    src: `${gameplay}/palworld-player-esp.png`,
    alt: 'Palworld player ESP wallhack showing skeletons, boxes, and distance meters',
    caption: 'Player ESP',
    captionDesc: 'Skeletons, boxes and distance meters on players.',
  },
  gpThermal: {
    src: `${gameplay}/palworld-thermal-esp.png`,
    alt: 'Palworld thermal ESP wallhack with skeleton outlines, HP, and distance readouts',
    caption: 'Thermal ESP',
    captionDesc: 'Thermal view with skeleton wallhack, HP and distance.',
  },
  gpBuildFight: {
    src: `${gameplay}/palworld-build-fight-esp.png`,
    alt: 'Palworld build-fight ESP wallhack through builds with names, HP bars, and FOV',
    caption: 'Build fight ESP',
    captionDesc: 'ESP through builds with names, HP and FOV.',
  },
  gpArena: {
    src: `${gameplay}/palworld-arena-wallhack.png`,
    alt: 'Palworld arena wallhack ESP with wireframe players and weapon tags',
    caption: 'Arena wallhack',
    captionDesc: 'Wireframe ESP and weapon tags in an arena.',
  },
  gpSpawn: {
    src: `${gameplay}/palworld-spawn-island-esp.png`,
    alt: 'Palworld spawn island ESP with skeleton boxes and aimbot reticle overlay',
    caption: 'Spawn island ESP',
    captionDesc: 'Skeleton boxes and aimbot reticle on spawn island.',
  },
  gpLongRange: {
    src: `${gameplay}/palworld-long-range-esp.png`,
    alt: 'Palworld long-range ESP wallhack with enemy names, health, and weapons through cover',
    caption: 'Long range ESP',
    captionDesc: 'Long-range enemy names, health and weapons through cover.',
  },
  gpAimLock: {
    src: `${gameplay}/palworld-aimbot-lock.png`,
    alt: 'Palworld aimbot lock with green skeleton ESP, FOV circle, and head-bone priority',
    caption: 'Aimbot lock',
    captionDesc: 'Aimbot lock with skeleton ESP and head priority.',
  },
  gpChams: {
    src: `${gameplay}/palworld-chams-esp.png`,
    alt: 'Palworld chams and skeleton ESP cheat overlay on a wooden pier',
    caption: 'Chams ESP',
    captionDesc: 'Chams and skeleton ESP on a wooden pier.',
  },
  gpSquad: {
    src: `${gameplay}/palworld-squad-esp.png`,
    alt: 'Palworld multi-player squad ESP wallhack with boxes, skeletons, and distances',
    caption: 'Squad ESP',
    captionDesc: 'Multi-player ESP boxes, skeletons and distances.',
  },
  gpCombat: {
    src: `${gameplay}/palworld-combat-esp.png`,
    alt: 'Palworld combat ESP and aimbot overlay during an open-field fight on PC',
    caption: 'Combat ESP',
    captionDesc: 'ESP and aimbot overlay in an open-field fight.',
  },
  gpHomeModMenu: {
    src: `${gameplay}/palworld-home-mod-menu-inventory.png`,
    alt: 'Palworld mod menu overlay on the character inventory screen on PC',
    caption: 'Mod menu',
    captionDesc: 'Trainer mod menu with stats, toggles and item tools.',
  },
  gpHomeInstaCraft: {
    src: `${gameplay}/palworld-home-insta-craft.png`,
    alt: 'Palworld instant craft trainer enabled at the workbench on PC',
    caption: 'Instant craft',
    captionDesc: 'Speed crafting and workbench automation.',
  },
  gpHomeOpenWorld: {
    src: `${gameplay}/palworld-home-open-world.png`,
    alt: 'Palworld open world gameplay with Pal sphere capture on PC',
    caption: 'Open world',
    captionDesc: 'Capture and exploration with trainer support.',
  },
  gpHomeMagnet: {
    src: `${gameplay}/palworld-home-magnet-loot.png`,
    alt: 'Palworld loot magnet cheat pulling items in the open world on PC',
    caption: 'Loot magnet',
    captionDesc: 'Magnet loot and resource collection.',
  },
  gpHomeSpheres: {
    src: `${gameplay}/palworld-home-legendary-spheres.png`,
    alt: 'Palworld mod menu with legendary sphere spawner and launcher on PC',
    caption: 'Item spawner',
    captionDesc: 'Legendary spheres and spawn tools.',
  },
  gpHomeBoss: {
    src: `${gameplay}/palworld-home-boss-katress.png`,
    alt: 'Palworld boss fight against Katress with cheat overlay on PC',
    caption: 'Boss fights',
    captionDesc: 'Tower boss encounters with god mode and ESP.',
  },
  gpHomeFirstKill: {
    src: `${gameplay}/palworld-home-boss-first-kill.png`,
    alt: 'Palworld boss first kill reward screen after using cheats on PC',
    caption: 'Boss rewards',
    captionDesc: 'Ancient Technology Points and first-clear drops.',
  },
};

function slide(...keys: GalleryKey[]): ProductSlide[] {
  return keys.map((k) => {
    const item = galleryRaw[k];
    return {
      src: item.src,
      alt: item.alt,
      caption: item.caption,
      captionDesc: item.captionDesc,
    };
  });
}

function slugFromHref(href: string): string {
  const segment = href.replace(productBase, '').replace(/^\//, '').replace(/\/$/, '');
  return segment || 'palworld-cheats';
}

const tierAbout: Record<string, ProductPage['about']> = {
  lite: [
    {
      type: 'p',
      text: 'Palworld Lite is built for players who want map awareness first. in co-op, knowing enemy positions, chest locations and loot timings wins more fights than raw mechanics—Lite gives you that edge without aimbot automation.',
    },
    { type: 'h2', text: 'co-op-safe by design' },
    {
      type: 'p',
      text: 'Lite skips Aimbot and bot modules entirely. Your gameplay looks natural while ESP, radar hack and loot timers keep you informed. Stream-proof mode hides overlays from OBS capture for content creators.',
    },
  ],
  pro: [
    {
      type: 'p',
      text: 'Palworld Pro is the sweet spot for co-op grinders. Aimbot, Smooth Aim and Sticky Aim help you win squad fights without obvious bot patterns—when you tune Smoothness sliders using our portal presets.',
    },
    { type: 'h2', text: 'Aimbot + awareness combined' },
    {
      type: 'p',
      text: 'Pro inherits every Lite module and adds Aimbot, Bone Priority, Hotkey macros and FOV and smoothness drawing. You see the fight before it starts and win it with aimbot that stay human at default settings.',
    },
  ],
  elite: [
    {
      type: 'p',
      text: 'Palworld Elite is the private build for players who want everything—Loot Assist, Auto Finish, Auto Shield Break, Skin Changer, full ESP wallhack and direct developer support. Limited slots keep the build maintainable and patch cycles fast.',
    },
    { type: 'h2', text: 'Use Elite responsibly' },
    {
      type: 'p',
      text: 'Elite power demands disciplined profiles. Test in lobbies, start with portal conservative presets, and scale up over days—not minutes. Staff in Discord help Elite users tune before their first co-op queue.',
    },
  ],
};

const tierBodies: Record<string, ProductPage['body']> = {
  lite: [
    { type: 'h2', text: 'Included modules' },
    {
      type: 'p',
      text: 'Player ESP with distance and name tags, chest and reboot-van locator, loot spawn timers, radar hack, and stream-safe overlay hiding. Config presets for Open World and Co-op ship in the portal—load before your first queue.',
    },
    { type: 'h2', text: 'Upgrade path' },
    {
      type: 'p',
      text: 'Lite license holders can upgrade to Pro or Elite through the portal without losing config backups. Compare tiers on the main product page before checkout via our secure checkout.',
    },
  ],
  pro: [
    { type: 'h2', text: 'Aimbot and automation' },
    {
      type: 'p',
      text: 'Aimbot, Smooth Aim, Sticky Aim with Prediction, Bone Priority and hotkey macros for heals and mobility. Smoothness sliders tunes cast timing so aimbot stay natural in co-op. Start with portal presets, not max sliders.',
    },
    { type: 'h2', text: 'Recommended pairing' },
    {
      type: 'p',
      text: 'Pro is the most popular tier at getpalworldhack.net—enough firepower for high-rank lobbies without Elite slot limits. Pair with our aimbot guide in the blog before your first co-op session.',
    },
  ],
  elite: [
    { type: 'h2', text: 'Full bot and finish suite' },
    {
      type: 'p',
      text: 'Loot Assist, Rotation Assist AI, Auto Finish, Auto Shield Break, Skin Changer and full ESP wallhack with smoke alerts. Use lobby testing before co-op—Elite power requires disciplined profiles, not rage settings.',
    },
    { type: 'h2', text: 'Availability' },
    {
      type: 'p',
      text: 'Elite shows as limited slots on the status banner. Open a Discord ticket if checkout is gated—staff confirm slot availability before purchase.',
    },
  ],
};

const utilityBodies: Record<string, ProductPage['body']> = {
  'hwid-spoofer': [
    { type: 'h2', text: 'When you need it' },
    {
      type: 'p',
      text: 'Use when fresh Steam accounts fail instantly on one PC but work elsewhere—classic HWID enforcement. Do not use for account-only anti-cheat cases; see [UGC](/products/palworld-hacks/ugc/) instead.',
    },
    { type: 'h2', text: 'Full workflow' },
    {
      type: 'p',
      text: 'Restore point, driver cleanup, spoof application, cold reboot, identifier verification, then conservative cheat profile before co-op. Full checklist ships in the portal and in our HWID blog guide.',
    },
  ],
  'ugc': [
    { type: 'h2', text: 'What UGC covers' },
    {
      type: 'p',
      text: 'UGC (Unban & Governance Control) is an appeal workspace for Steam account restrictions, anti-cheat bans, trade holds and security flags. Build custom workflows, automate dispute steps and track case status from one dashboard—not a guaranteed unban service.',
    },
    { type: 'h2', text: 'Realistic expectations' },
    {
      type: 'p',
      text: 'Some anti-cheat bans cannot be reversed. UGC organizes evidence and follow-ups for Steam review. Pair with [HWID Spoofer](/products/palworld-hacks/hwid-spoofer/) when hardware is flagged, or a new account when reputation is burned.',
    },
  ],
  'cloud-dma': [
    { type: 'h2', text: 'When Cloud DMA fits' },
    {
      type: 'p',
      text: 'Cloud DMA pairs a compatible DMA card with a hosted relay so Palworld reads stay off your main game PC. Best for operators who already run external overlays and want hardware isolation with remote firmware updates.',
    },
    { type: 'h2', text: 'Setup expectations' },
    {
      type: 'p',
      text: 'Confirm card compatibility in the portal, flash the Palworld profile bundle, then pair with your external loader. Discord support walks through cabling, second-PC networking, and verification before you queue.',
    },
  ],
  'unlock-all': [
    { type: 'h2', text: 'Local preview only' },
    {
      type: 'p',
      text: 'Cosmetics display on your client for testing and content creation. Other players in your lobby see your actual inventory, not preview skins.',
    },
    { type: 'h2', text: 'Included with Elite' },
    {
      type: 'p',
      text: 'Skin Changer ships inside the Elite tier. Buy standalone here if you want cosmetic preview without full combat modules.',
    },
  ],
};

const productContent: Record<
  string,
  Pick<ProductPage, 'overview' | 'images' | 'fullFeatures' | 'goodToKnow' | 'limitations' | 'systemRequirements'>
> = {
  lite: {
    images: slide('gpHeroEsp', 'gpLongRange', 'gpSquad'),
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    systemRequirements: palworldSystemRequirements,
    fullFeatures: [
      'Player ESP & player boxes',
      'Chest & loot locator',
      'POI awareness',
      'Health & shield tracking',
      'Mini-radar overlay',
      'Streamproof overlay mode',
      'Distance readouts',
      'Team color filter',
      'Loot spawn timers',
      'Radar hack',
      'Co-op preset config',
      'co-op preset config',
      'Cloud config backup',
      'Patch auto-updater',
    ],
    overview: {
      title: 'Palworld Lite: ESP and radar',
      paragraphs: [
        'Lite is for player ESP, chest markers, loot timers and radar. No aimbot. Set distance, colors and stream-proof in the portal before you queue.',
        'Best if you want awareness in Open World and Co-op without combat automation. Overlays are updated after Palworld patches.',
      ],
    },
  },
  pro: {
    images: slide('gpScripts', 'gpAimLock', 'gpCombat'),
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    systemRequirements: palworldSystemRequirements,
    fullFeatures: [
      'All Lite ESP & ESP wallhack modules',
      'Aimbot',
      'Smooth Aim',
      'Sticky Aim & Prediction',
      'Bone Priority',
      'Hotkey macros (heals/shields)',
      'Auto Heal',
      'FOV & smoothness tuning',
      'Per-weapon aimbot profiles',
      'Third-party alert integration',
      'co-op-safe default presets',
      'Lobby test profile',
      'Cloud config backup',
      'Patch auto-updater',
      'Discord operator support',
    ],
    overview: {
      title: 'Palworld Pro: aimbot plus ESP',
      paragraphs: [
        'Pro includes everything in Lite, plus Aimbot, Smooth Aim, Sticky Aim and hotkey macros. Aim settings live in one tab. Start with a portal preset, not max sliders.',
        'Most people pick Pro for Open World and Co-op. Bone priority and macros help in fights while defaults stay smooth.',
      ],
    },
  },
  elite: {
    images: slide('gpAutoKill', 'gpThermal', 'gpBuildFight'),
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    systemRequirements: palworldSystemRequirements,
    fullFeatures: [
      'All Lite + Pro modules',
      'Loot Assist',
      'Rotation Assist AI',
      'Chest respawn timer',
      'Auto loadout manager',
      'Auto Finish',
      'Auto Shield Break',
      'Full ESP wallhack suite',
      'Third-party alert system',
      'Visibility detector',
      'Skin Changer (Unlock All)',
      'Priority patch queue',
      'Direct dev Discord support',
      'Elite conservative presets',
      'Cloud config backup',
      'Patch auto-updater',
      'Private slot access',
    ],
    overview: {
      title: 'Palworld Elite: full cheat + extras',
      paragraphs: [
        'Elite includes Lite and Pro modules, plus loot assist, Auto Finish, Auto Shield Break, Skin Changer, full ESP wallhack and faster patch priority.',
        'Slots are limited. Discord support helps you set safer profiles before co-op. Check the status banner on getpalworldhack.net before you buy.',
      ],
    },
  },
  'cloud-dma': {
    images: slide('gpThermal', 'gpBuildFight', 'gpLongRange'),
    goodToKnow:
      'Cloud DMA requires supported DMA hardware and a second PC or laptop on the same network. Confirm the live status banner and firmware version before purchase or launch.',
    limitations:
      'DMA does not remove anti-cheat or account risk. Unsupported cards, bad cabling, or outdated firmware can fail verification. You accept all hardware and network configuration risk.',
    systemRequirements: [
      { icon: 'reqWindows', text: 'Two Windows 10/11 64-bit systems (game PC + DMA host) on a stable LAN.' },
      { icon: 'reqCpu', text: 'Compatible DMA card listed in the operator portal compatibility scan.' },
      { icon: 'reqWifi', text: 'Low-latency network between DMA host and cloud relay endpoint.' },
      { icon: 'reqSettings', text: 'Administrator access on both machines for firmware and loader setup.' },
    ],
    fullFeatures: [
      'DMA compatibility scan',
      'Cloud relay provisioning',
      'Palworld memory profile bundle',
      'Firmware sync & rollback',
      'Second-PC networking guide',
      'External overlay pairing',
      'Latency health dashboard',
      'Portal verification tools',
      'Discord operator onboarding',
      'Patch-day firmware notices',
    ],
    overview: {
      title: 'Palworld Cloud DMA',
      paragraphs: [
        'Cloud DMA delivers hardware-backed game reads through a managed cloud relay—built for Palworld operators who want physical isolation from the game PC.',
        'Includes compatibility scanning, Palworld-tuned firmware profiles, overlay pairing, and guided setup through the operator portal and Discord.',
      ],
    },
  },
  'hwid-spoofer': {
    images: slide('gpSpawn', 'gpArena', 'gpChams'),
    goodToKnow:
      'Run the compatibility scan in the portal before spoofing. Create a Windows restore point first. Verify identifiers changed after a cold reboot before launching Palworld.',
    limitations:
      'Spoofing does not help account-only anti-cheat cases. Never stack two spoof tools. Shared or work PCs may not be suitable. You accept all risk from driver-level changes.',
    systemRequirements: [
      { icon: 'reqWindows', text: 'Windows 10 or 11 64-bit with administrator access.' },
      { icon: 'reqRestorePoint', text: 'Ability to create a system restore point before running.' },
      { icon: 'reqShieldGuide', text: 'Follow the portal setup guide before launching Palworld after spoofing.' },
      { icon: 'reqWifi', text: 'Stable connection for portal verification tools.' },
    ],
    fullFeatures: [
      'Disk serial profile tools',
      'MAC address rotation',
      'Restore point checklist',
      'Compatibility scan',
      'Driver conflict detection',
      'Post-spoof verification',
      'Identifier diff report',
      'Cold reboot guide',
      'Portal step-by-step workflow',
      'Discord recovery support',
    ],
    overview: {
      title: 'HWID Spoofer for Palworld PC bans',
      paragraphs: [
        'Use the HWID Spoofer when Palworld anti-cheat flags your PC hardware but the Steam account is still fine. Includes disk and MAC tools, a restore-point checklist, a compatibility scan and post-spoof checks.',
        'Use it when new accounts die on one PC but work on another. It does not fix account-only anti-cheat bans. After spoofing, use a safer cheat profile before co-op.',
      ],
    },
  },
  ugc: {
    images: slide('gpZoomHack', 'gpFarmBot', 'gpLongRange'),
    goodToKnow:
      'Gather order email, platform account details and restriction screenshots before opening a ticket. UGC structures appeals—it does not bypass platform review.',
    limitations:
      'UGC does not guarantee account restoration. Results vary by case type. Permanent anti-cheat bans may require a new account path instead of appeal.',
    systemRequirements: [
      { icon: 'reqMailOrder', text: 'Order email used at checkout on getpalworldhack.net or at checkout on getpalworldhack.net.' },
      { icon: 'reqShieldAccount', text: 'Account details and ban or restriction notification if available.' },
      { icon: 'reqWifiPortal', text: 'Internet access for Discord support and case dashboard.' },
    ],
    fullFeatures: [
      'Custom appeal workflows',
      'Restriction dispute automation',
      'Case documentation templates',
      'Status tracking dashboard',
      'Identity verification guide',
      'Evidence upload structure',
      'Timeline tracker',
      'Follow-up response templates',
      'Multi-platform support',
    ],
    overview: {
      title: 'UGC account appeal tools',
      paragraphs: [
        'UGC (Unban & Governance Control) helps you organize appeals for Steam restrictions and anti-cheat bans. It does not guarantee an unban.',
        'Track cases, keep evidence in one place and follow up from the dashboard. Discord support can walk you through steps when needed.',
      ],
    },
  },
  'unlock-all': {
    images: slide('gpSkinChanger', 'gpChams', 'gpCombat'),
    goodToKnow:
      'Unlock All previews cosmetics locally on your client. Other players in your lobby see your real inventory—not preview skins. Included with Elite tier.',
    limitations:
      'Local preview only—does not modify Steam locker or store state. Other players cannot see previewed skins or sets.',
    systemRequirements: palworldSystemRequirements,
    fullFeatures: [
      'Outfit skin swap',
      'Skin & wrap preview',
      'Pickaxe & wrap customizer',
      'Loading screen editor',
      'Cursor & HUD theme',
      'Chest & loot replacer',
      'Favorites list',
      'Loadout export',
    ],
    overview: {
      title: 'Skin Changer / Unlock All',
      paragraphs: [
        'Unlock All lets you preview outfits, wraps and pickaxes on your Palworld client. It does not change your Steam locker or store purchases.',
        'Only you see the preview skins. Other players see your real inventory. Included with Elite, or buy it alone without combat modules.',
      ],
    },
  },
};

function buildTierPages(): ProductPage[] {
  return t.cheats.items.map((cheat) => {
    const slug = slugFromHref(cheat.href);
    const content = productContent[slug];
    const displayName = cheat.name === 'Lite' ? 'Palworld Lite' : cheat.name === 'Pro' ? 'Palworld Pro' : 'Palworld Elite';
    return {
      slug,
      kind: 'tier',
      badge: cheat.badge,
      tier: cheat.tier,
      name: cheat.name,
      title: cheat.title,
      subtitle: cheat.desc,
      desc: cheat.desc,
      features: cheat.features,
      more: cheat.more,
      variant: cheat.variant,
      buyUrl: checkoutForSlug(slug),
      images: content.images,
      overview: content.overview,
      acquisition: acquisitionFor(displayName),
      goodToKnow: content.goodToKnow,
      limitations: content.limitations,
      fullFeatures: content.fullFeatures,
      systemRequirements: content.systemRequirements,
      about: tierAbout[slug],
      body: tierBodies[slug] ?? [],
      relatedBlogSlugs: productRelatedBlogSlugs[slug] ?? [],
    };
  });
}

function buildUtilityPages(): ProductPage[] {
  return t.products.items
    .filter((p) => p.href !== productBase)
    .map((product) => {
      const slug = slugFromHref(product.href);
      const content = productContent[slug];
      return {
        slug,
        kind: 'utility',
        badge: product.badge,
        category: product.category,
        name: product.title,
        title: product.title,
        subtitle: product.subtitle,
        desc: product.desc,
        features: product.features,
        more: product.more,
        buyUrl: checkoutForSlug(slug),
        images: content.images,
        overview: content.overview,
        acquisition: acquisitionFor(product.title),
        goodToKnow: content.goodToKnow,
        limitations: content.limitations,
        fullFeatures: content.fullFeatures,
        systemRequirements: content.systemRequirements,
        body: utilityBodies[slug] ?? [],
        relatedBlogSlugs: productRelatedBlogSlugs[slug] ?? [],
      };
    });
}

function orderProductPages(pages: ProductPage[]): ProductPage[] {
  const cloudDma = pages.find((p) => p.slug === 'cloud-dma');
  const rest = pages.filter((p) => p.slug !== 'cloud-dma');
  return cloudDma ? [cloudDma, ...rest] : pages;
}

export const productPages: ProductPage[] = orderProductPages([
  ...buildTierPages(),
  ...buildUtilityPages(),
]);

export const cheatPages = productPages.filter((p) => p.kind === 'tier');

export function getProductPage(slug: string) {
  return productPages.find((p) => p.slug === slug);
}

export function getCheatPage(slug: string) {
  return cheatPages.find((p) => p.slug === slug);
}

export function getAllProductSlugs() {
  return productPages.map((p) => p.slug);
}

export function getAllCheatSlugs() {
  return cheatPages.map((p) => p.slug);
}

const cheatsHubSlides = slide('gpAimLock', 'gpThermal', 'gpArena');

export const heroSlides = slide(
  'gpHomeModMenu',
  'gpHomeInstaCraft',
  'gpHomeOpenWorld',
  'gpHomeMagnet',
  'gpHomeSpheres',
  'gpHomeBoss',
  'gpHomeFirstKill',
);

export const productHub = {
  path: productBase,
  title: t.products.title,
  subtitle: t.products.subtitle,
  description: 'Palworld Elite cheats with aimbot and ESP, plus HWID spoofer, UGC recovery and Skin Changer for PC.',
  buyUrl: checkoutPath('palworld'),
};
