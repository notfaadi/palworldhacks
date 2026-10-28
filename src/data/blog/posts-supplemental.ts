import type { BlogBlock, BlogPostFull } from './types';

const PALWORLD_CHECKOUT = 'https://levocheats.com/go/FDI?to=%2Fpalworld-cheats';
const CLOUD_DMA_CHECKOUT = 'https://levocheats.com/go/FDI?to=%2Fcloud-dma';

type Section = { h2: string; paragraphs: string[]; bullets?: string[] };

function buildPost(
  meta: Omit<BlogPostFull, 'body'>,
  sections: Section[],
  cta?: { title: string; text: string; href?: string },
): BlogPostFull {
  const body: BlogBlock[] = [];
  for (const section of sections) {
    body.push({ type: 'h2', text: section.h2 });
    for (const text of section.paragraphs) {
      body.push({ type: 'p', text });
    }
    if (section.bullets?.length) {
      body.push({ type: 'ul', items: section.bullets });
    }
  }
  if (cta) {
    body.push({
      type: 'cta',
      title: cta.title,
      text: cta.text,
      href: cta.href ?? PALWORLD_CHECKOUT,
    });
  }
  return { ...meta, body };
}

/** Extra Features, Updates, and Troubleshooting articles for Palworld. */
export const supplementalBlogPosts: BlogPostFull[] = [
  // —— Features (6 new → 7 with existing features guide) ——
  buildPost(
    {
      tag: 'Features',
      title: 'Pal ESP & wild Pal tracking modules',
      slug: 'palworld-pal-esp-features',
      image: '/images/blog/palworld-pal-esp-features.png',
      desc: 'Pal ESP for species, level, element and capture rate—filter spawns before you throw a sphere.',
      date: 'Aug 9, 2026',
      readTime: '8 min read',
    },
    [
      {
        h2: 'What Pal ESP shows in-game',
        paragraphs: [
          'Pal ESP highlights wild Pals through terrain with name, level, element and approximate distance—ideal for hunting rare spawns and tower prep.',
          'Pair with [Palworld products](/products/palworld-hacks/) Lite or Elite presets so filters stay readable in dense forests.',
        ],
        bullets: [
          'Filter by Pal species or element type',
          'Distance cap to reduce overlay clutter',
          'Works in Open World and co-op sessions',
        ],
      },
      {
        h2: 'Recommended preset',
        paragraphs: [
          'Start at 800–1000 unit range, enable health bars only for alpha Pals, then expand after a clean session.',
        ],
      },
    ],
    { title: 'Get Pal ESP', text: 'Unlock Pal ESP with Palworld cheats on Levo Cheats.' },
  ),
  buildPost(
    {
      tag: 'Features',
      title: 'Object Manipulator & loot magnet guide',
      slug: 'palworld-loot-magnet-features',
      image: '/images/blog/palworld-loot-magnet-features.png',
      desc: 'Pull eggs, ore, berries and chest loot with Object Manipulator filters and hotkeys.',
      date: 'Aug 9, 2026',
      readTime: '7 min read',
    },
    [
      {
        h2: 'Loot magnet basics',
        paragraphs: [
          'Object Manipulator pulls items in your view cone—use category filters for stone, wood, eggs, treasure and dropped gear.',
          'See also [features overview](/blog/palworld-cheats-features-guide/) for tier availability.',
        ],
        bullets: ['Bind a toggle hotkey', 'Set max pull distance conservatively', 'Disable in towns to avoid suspicious movement'],
      },
    ],
    { title: 'Enable loot tools', text: 'Palworld progression modules via secure checkout.' },
  ),
  buildPost(
    {
      tag: 'Features',
      title: 'SpeedHack, stamina and traversal exploits',
      slug: 'palworld-speedhack-features',
      image: '/images/blog/palworld-speedhack-features.png',
      desc: 'SpeedHack and infinite stamina for faster map traversal—safe defaults for PvE grinding.',
      date: 'Aug 8, 2026',
      readTime: '6 min read',
    },
    [
      {
        h2: 'Traversal modules',
        paragraphs: [
          'SpeedHack and infinite stamina shorten trips between bases, towers and bosses. Keep multipliers modest to avoid obvious animation snaps.',
        ],
        bullets: ['Use PvE-only profiles first', 'Disable before co-op boss fights if teammates notice', 'Pair with Fullbright for night routes'],
      },
    ],
    { title: 'Try traversal tools', text: 'Buy Palworld cheats with exploit options.' },
  ),
  buildPost(
    {
      tag: 'Features',
      title: 'Base building & worker Pal ESP',
      slug: 'palworld-base-esp-features',
      image: '/images/blog/palworld-base-esp-features.png',
      desc: 'Track worker Pals, base storage and production stations with ESP overlays.',
      date: 'Aug 8, 2026',
      readTime: '7 min read',
    },
    [
      {
        h2: 'Base awareness',
        paragraphs: [
          'Worker Pal ESP and structure highlights help you manage large bases—see idle Pals, furnaces and chests without running every path.',
        ],
        bullets: ['Highlight production buildings', 'Show Pal work suitability icons', 'Mark storage chests within radius'],
      },
    ],
    { title: 'Upgrade base play', text: 'Full module list on [Cloud DMA + Palworld](/products/palworld-hacks/cloud-dma/).' },
  ),
  buildPost(
    {
      tag: 'Features',
      title: 'Boss, tower & raid fight ESP',
      slug: 'palworld-boss-esp-features',
      image: '/images/blog/palworld-boss-esp-features.png',
      desc: 'Skeleton ESP, weak-spot boxes and HP tracking for tower bosses and raid encounters.',
      date: 'Aug 7, 2026',
      readTime: '8 min read',
    },
    [
      {
        h2: 'Boss fight overlays',
        paragraphs: [
          'Boss ESP draws boxes and health on tower guardians and raid bosses—combine with aimbot bone priority for head shots on humanoid targets.',
        ],
        bullets: ['Boss HP bar and phase alerts', 'Add Pal minion ESP in multi-phase fights', 'Save a “Tower” config profile'],
      },
    ],
    { title: 'Fight smarter', text: 'Elite combat modules at checkout.' },
  ),
  buildPost(
    {
      tag: 'Features',
      title: 'Co-op & multiplayer session tools',
      slug: 'palworld-coop-features',
      image: '/images/blog/palworld-coop-features.png',
      desc: 'Player ESP, team filters and radar for hosted co-op and community servers.',
      date: 'Aug 7, 2026',
      readTime: '7 min read',
    },
    [
      {
        h2: 'Multiplayer overlays',
        paragraphs: [
          'On community servers, player ESP and radar show allies and hostiles—use team color filters so guildmates stay green on overlay.',
        ],
        bullets: ['Hide friendly players option', 'Name tags at long range', 'Battle mode to reduce clutter'],
      },
    ],
    { title: 'Co-op ready', text: 'Palworld multiplayer ESP via Levo Cheats.' },
  ),
  buildPost(
    {
      tag: 'Features',
      title: 'Cloud DMA feature stack for Palworld',
      slug: 'palworld-cloud-dma-features',
      image: '/images/blog/palworld-cloud-dma-features.png',
      desc: 'How Cloud DMA pairs with Palworld ESP, aimbot and exploit modules on Levo Cheats.',
      date: 'Aug 6, 2026',
      readTime: '9 min read',
    },
    [
      {
        h2: 'Why Cloud DMA for Palworld',
        paragraphs: [
          'Levo Palworld builds assume Cloud DMA for full functionality—isolated reads and firmware sync keep modules stable after Steam patches.',
          'Read [Cloud DMA product](/products/palworld-hacks/cloud-dma/) before buying cheat tiers.',
        ],
      },
    ],
    { title: 'Buy Cloud DMA', text: 'Start with Cloud DMA infrastructure.', href: CLOUD_DMA_CHECKOUT },
  ),

  // —— Updates (6 new) ——
  buildPost(
    {
      tag: 'Updates',
      title: 'Palworld Steam hotfix — reload loader & configs',
      slug: 'palworld-steam-hotfix-update',
      image: '/images/blog/palworld-steam-hotfix-update.png',
      desc: 'After minor Steam hotfixes, refresh portal loader builds and cloud configs before co-op.',
      date: 'Aug 9, 2026',
      readTime: '6 min read',
    },
    [
      {
        h2: 'Hotfix day steps',
        paragraphs: [
          'Small Palworld patches can still shift memory layouts. Download the latest loader from the portal even when the game version bump looks minor.',
        ],
        bullets: ['Check status banner', 'Pull cloud config bundle', 'Verify ESP in a private world'],
      },
    ],
    { title: 'Stay current', text: 'Follow the full [patch day checklist](/blog/eac-patch-day-checklist/).' },
  ),
  buildPost(
    {
      tag: 'Updates',
      title: 'Cloud DMA firmware sync after Palworld patches',
      slug: 'palworld-cloud-dma-firmware-update',
      image: '/images/blog/palworld-cloud-dma-firmware-update.png',
      desc: 'When to flash DMA firmware and restart relay after Palworld or anti-cheat updates.',
      date: 'Aug 8, 2026',
      readTime: '7 min read',
    },
    [
      {
        h2: 'Firmware workflow',
        paragraphs: [
          'Cloud DMA profiles update separately from Palworld cheat configs. Apply firmware sync in the portal before launching the external loader.',
        ],
      },
    ],
    { title: 'Update Cloud DMA', text: 'Firmware tools on Levo Cloud DMA.', href: CLOUD_DMA_CHECKOUT },
  ),
  buildPost(
    {
      tag: 'Updates',
      title: 'Breeding & Pal stats update — module compatibility',
      slug: 'palworld-breeding-update-cheats',
      image: '/images/blog/palworld-breeding-update-cheats.png',
      desc: 'Breeding UI and stat changes—what still works in Pal ESP and exploit modules.',
      date: 'Aug 8, 2026',
      readTime: '6 min read',
    },
    [
      {
        h2: 'After breeding patches',
        paragraphs: [
          'Breeding and Pal stat rebalances rarely break ESP outright but can shift UI offsets—reload configs if Pal level readouts look wrong.',
        ],
      },
    ],
    { title: 'Check modules', text: 'Palworld cheats with patch priority on Elite.' },
  ),
  buildPost(
    {
      tag: 'Updates',
      title: 'New Pal species & spawn table ESP updates',
      slug: 'palworld-new-pals-update-esp',
      image: '/images/blog/palworld-new-pals-update-esp.png',
      desc: 'How Pal ESP filters update when Pocketpair adds species and spawn regions.',
      date: 'Aug 7, 2026',
      readTime: '5 min read',
    },
    [
      {
        h2: 'Spawn updates',
        paragraphs: [
          'When new Pals release, update your Pal ESP filter list from the portal preset library—do not rely on stale species IDs from last patch.',
        ],
      },
    ],
    { title: 'Refresh Pal ESP', text: 'Download latest preset pack.' },
  ),
  buildPost(
    {
      tag: 'Updates',
      title: 'PvP & raid balance patch — status for cheats',
      slug: 'palworld-pvp-balance-update',
      image: '/images/blog/palworld-pvp-balance-update.png',
      desc: 'PvP tuning and raid damage changes—conservative aimbot profiles after balance patches.',
      date: 'Aug 7, 2026',
      readTime: '6 min read',
    },
    [
      {
        h2: 'PvP patch notes',
        paragraphs: [
          'Weapon and Pal skill rebalances affect time-to-kill—lower aimbot aggression for the first week after PvP patches.',
        ],
      },
    ],
    { title: 'Read status', text: 'Discord #status for PvP patch windows.' },
  ),
  buildPost(
    {
      tag: 'Updates',
      title: 'Major Palworld content update loader guide',
      slug: 'palworld-major-update-loader',
      image: '/images/blog/palworld-major-update-loader.png',
      desc: 'Large content drops on Steam—full loader reinstall and config reset checklist.',
      date: 'Aug 6, 2026',
      readTime: '8 min read',
    },
    [
      {
        h2: 'Major update protocol',
        paragraphs: [
          'Big Palworld updates behave like mini launch days: assume offline status until the banner is green, then reinstall loader from portal rather than overwriting old exe.',
        ],
        bullets: ['Delete old loader shortcuts', 'Run vanilla Palworld once', 'Import cloud config after verify'],
      },
    ],
    { title: 'Patch ready', text: 'Full checklist in [anti-cheat patch day](/blog/eac-patch-day-checklist/).' },
  ),

  // —— Troubleshooting (6 new) ——
  buildPost(
    {
      tag: 'Troubleshooting',
      title: 'Palworld loader will not open — fix checklist',
      slug: 'palworld-loader-not-opening',
      image: '/images/blog/palworld-loader-not-opening.png',
      desc: 'Admin rights, antivirus exclusions and portal download issues when the loader fails to start.',
      date: 'Aug 9, 2026',
      readTime: '7 min read',
    },
    [
      {
        h2: 'Loader startup fixes',
        paragraphs: [
          'Run the loader as administrator, whitelist the portal folder in Windows Defender, and confirm you downloaded the build matching today’s banner—not last week’s link.',
        ],
        bullets: ['Re-download from operator portal', 'Disable overlay apps temporarily', 'Install VC++ runtime if prompted'],
      },
    ],
    { title: 'Still stuck?', text: 'Open Discord support with order email.' },
  ),
  buildPost(
    {
      tag: 'Troubleshooting',
      title: 'ESP boxes misaligned after a Palworld patch',
      slug: 'palworld-esp-offset-fix',
      image: '/images/blog/palworld-esp-offset-fix.png',
      desc: 'When player boxes float off models—config reload, resolution scale and verify steps.',
      date: 'Aug 8, 2026',
      readTime: '6 min read',
    },
    [
      {
        h2: 'Fix misaligned ESP',
        paragraphs: [
          'Offset drift usually means outdated configs. Pull the latest cloud bundle and confirm Palworld is borderless or windowed fullscreen as recommended in the portal guide.',
        ],
      },
    ],
    { title: 'Reload ESP preset', text: 'See [ESP wallhack setup](/blog/palworld-esp-wallhack-setup/).' },
  ),
  buildPost(
    {
      tag: 'Troubleshooting',
      title: 'Cloud DMA relay connection errors',
      slug: 'palworld-cloud-dma-connection-fix',
      image: '/images/blog/palworld-cloud-dma-connection-fix.png',
      desc: 'Fix DMA host networking, USB seating and relay latency when Cloud DMA fails verification.',
      date: 'Aug 8, 2026',
      readTime: '8 min read',
    },
    [
      {
        h2: 'DMA connection troubleshooting',
        paragraphs: [
          'Verify second PC firewall allows relay traffic, reseat USB 3.0, cold reboot both machines, then rerun portal compatibility scan.',
        ],
      },
    ],
    { title: 'Cloud DMA help', text: 'Operator onboarding on [Cloud DMA](/products/palworld-hacks/cloud-dma/).', href: CLOUD_DMA_CHECKOUT },
  ),
  buildPost(
    {
      tag: 'Troubleshooting',
      title: 'Palworld crashes when enabling exploit modules',
      slug: 'palworld-crash-exploit-modules',
      image: '/images/blog/palworld-crash-exploit-modules.png',
      desc: 'Isolate SpeedHack, magnet and stamina toggles when the game crashes on module enable.',
      date: 'Aug 7, 2026',
      readTime: '7 min read',
    },
    [
      {
        h2: 'Crash isolation',
        paragraphs: [
          'Enable one exploit at a time in a private world. Crashes on magnet often mean distance set too high—halve pull radius and retry.',
        ],
      },
    ],
    { title: 'Safe defaults', text: 'Use conservative exploit profile from portal.' },
  ),
  buildPost(
    {
      tag: 'Troubleshooting',
      title: 'Steam file verify vs cheat loader order',
      slug: 'palworld-steam-verify-loader-order',
      image: '/images/blog/palworld-steam-verify-loader-order.png',
      desc: 'Correct order: verify Palworld files, launch vanilla, then external loader—avoid double anti-cheat errors.',
      date: 'Aug 7, 2026',
      readTime: '6 min read',
    },
    [
      {
        h2: 'Verify then load',
        paragraphs: [
          'Always complete Steam verify integrity while loader is closed. Launch Palworld once without modules before re-enabling external stack.',
          'Related: [EAC unable to verify](/blog/eac-bypass-palworld-guide/).',
        ],
      },
    ],
    { title: 'Fix verify errors', text: 'Step-by-step anti-cheat guide.' },
  ),
  buildPost(
    {
      tag: 'Troubleshooting',
      title: 'Portal HWID reset & license not showing',
      slug: 'palworld-hwid-reset-portal-fix',
      image: '/images/blog/palworld-hwid-reset-portal-fix.png',
      desc: 'When your key or HWID reset fails in the portal—email match, VPN off and cooldown rules.',
      date: 'Aug 6, 2026',
      readTime: '6 min read',
    },
    [
      {
        h2: 'Portal license issues',
        paragraphs: [
          'Log in with the same email used at Levo checkout, disable VPN, and wait 15 minutes after purchase for key sync. HWID resets have cooldown—do not spam reset.',
        ],
      },
    ],
    { title: 'HWID help', text: 'See [HWID spoofer guide](/blog/palworld-hwid-spoofer-after-ban/).' },
  ),
  buildPost(
    {
      tag: 'Troubleshooting',
      title: 'Overlay black screen on second monitor',
      slug: 'palworld-overlay-second-monitor-fix',
      image: '/images/blog/palworld-overlay-second-monitor-fix.png',
      desc: 'ESP drawn on wrong display—single-monitor test and DPI scaling fixes.',
      date: 'Aug 6, 2026',
      readTime: '5 min read',
    },
    [
      {
        h2: 'Display fixes',
        paragraphs: [
          'Run Palworld on primary monitor at 100% Windows scale for testing. Move game back to preferred display only after ESP aligns.',
        ],
      },
    ],
    { title: 'Stream setup', text: '[Stream-proof overlay guide](/blog/palworld-stream-proof-setup/).' },
  ),
];
