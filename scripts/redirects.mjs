/** Static path redirects (301). Keys are pathname without query/hash. */
export const PATH_REDIRECTS = new Map([
  ['/blog', '/blog/'],
  ['/about', '/about/'],
  ['/contact', '/support/'],
  ['/contact/', '/support/'],
  ['/support', '/support/'],
  ['/privacy', '/privacy/'],
  ['/terms', '/terms/'],
  ['/faq', '/faq/'],
  ['/cheats', '/products/palworld-hacks/'],
  ['/cheats/', '/products/palworld-hacks/'],
  ['/cheats/lite', '/products/palworld-hacks/'],
  ['/cheats/lite/', '/products/palworld-hacks/'],
  ['/cheats/pro', '/products/palworld-hacks/'],
  ['/cheats/pro/', '/products/palworld-hacks/'],
  ['/cheats/elite', '/products/palworld-hacks/elite/'],
  ['/cheats/elite/', '/products/palworld-hacks/elite/'],
  ['/cheats/compare', '/blog/palworld-lite-vs-pro/'],
  ['/cheats/compare/', '/blog/palworld-lite-vs-pro/'],
  ['/products/palworld-hacks/utilities', '/products/palworld-hacks/utilities/'],
  ['/products/palworld-hacks', '/products/palworld-hacks/'],
  ['/products/palworld-hacks/account-recovery', '/products/palworld-hacks/ugc/'],
  ['/products/palworld-hacks/account-recovery/', '/products/palworld-hacks/ugc/'],
  ['/products/dota-2-cheats', '/products/palworld-hacks/'],
  ['/products/dota-2-cheats/', '/products/palworld-hacks/'],
  ['/products/dota-2-cheats/elite', '/products/palworld-hacks/elite/'],
  ['/products/dota-2-cheats/elite/', '/products/palworld-hacks/elite/'],
  ['/products/dota-2-cheats/utilities', '/products/palworld-hacks/utilities/'],
  ['/products/dota-2-cheats/utilities/', '/products/palworld-hacks/utilities/'],
]);

/** Paths that should not receive a forced trailing slash. */
export const TRAILING_SLASH_SKIP = /\.[a-z0-9]+$/i;

export function resolvePathRedirect(pathname) {
  const direct = PATH_REDIRECTS.get(pathname);
  if (direct) return direct;

  if (pathname !== '/' && !pathname.endsWith('/') && !TRAILING_SLASH_SKIP.test(pathname)) {
    return `${pathname}/`;
  }

  return null;
}
