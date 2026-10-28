/** Map blog tags/slugs to SEO topic hubs for internal linking. */
const TAG_HUB: Record<string, string> = {
  Features: '/palworld-mod-menu/',
  Updates: '/blog/',
  Troubleshooting: '/how-to-install/',
  Guides: '/palworld-trainers/',
};

const SLUG_HUB: Record<string, string> = {
  'palworld-console-commands-cheats': '/palworld-console-commands/',
  'palworld-console-cheats-tips': '/palworld-console-commands/',
  'palworld-cheat-codes-guide': '/palworld-console-commands/',
  'how-to-use-palworld-cheat-codes': '/palworld-console-commands/',
  'eac-bypass-palworld-guide': '/faq/',
  'eac-patch-day-checklist': '/blog/',
  'palworld-hwid-spoofer-after-ban': '/faq/',
  'palworld-external-cheat-guide': '/palworld-trainers/',
  'palworld-stream-proof-setup': '/palworld-mod-menu/',
};

export function topicHubForBlogPost(tag: string, slug: string): { href: string; label: string } {
  const href = SLUG_HUB[slug] ?? TAG_HUB[tag] ?? '/download/';
  const labels: Record<string, string> = {
    '/palworld-mod-menu/': 'Palworld mod menu guide',
    '/palworld-trainers/': 'Free Palworld trainers',
    '/palworld-console-commands/': 'Console commands list',
    '/how-to-install/': 'Install Palworld hacks',
    '/faq/': 'Safety FAQ',
    '/blog/': 'Patch updates',
    '/download/': 'Download hub',
  };
  return { href, label: labels[href] ?? 'Related guide' };
}
