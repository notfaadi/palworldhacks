/** Levo Cheats affiliate code (commission tracking). */
export const LEVO_AFFILIATE_CODE = 'FDI';

/** Levo product paths (no domain). */
export const LEVO_PRODUCT_PATHS = {
  palworld: '/palworld-cheats',
  cloudDma: '/cloud-dma',
  skinChanger: '/skin-changer-cheats',
  hwidSpoofer: '/hwid-spoofer',
  ugc: '/game-accounts',
};

/** Build affiliate checkout URL: https://levocheats.com/go/FDI?to=%2F... */
export function levoAffiliateUrl(levoPath) {
  const path = levoPath.startsWith('/') ? levoPath : `/${levoPath}`;
  return `https://levocheats.com/go/${LEVO_AFFILIATE_CODE}?to=${encodeURIComponent(path)}`;
}

export const LEVO_PALWORLD_CHECKOUT = levoAffiliateUrl(LEVO_PRODUCT_PATHS.palworld);

/** Checkout destinations keyed by internal product id. */
export const CHECKOUT_URLS = {
  palworld: levoAffiliateUrl(LEVO_PRODUCT_PATHS.palworld),
  cloudDma: levoAffiliateUrl(LEVO_PRODUCT_PATHS.cloudDma),
  skinChanger: levoAffiliateUrl(LEVO_PRODUCT_PATHS.skinChanger),
  hwidSpoofer: levoAffiliateUrl(LEVO_PRODUCT_PATHS.hwidSpoofer),
  ugc: levoAffiliateUrl(LEVO_PRODUCT_PATHS.ugc),
};

/** Checkout paths → external product URLs (used by Node serve + Astro middleware). */
export const CHECKOUT_PATH_REDIRECTS = new Map([
  ['/go/palworld', CHECKOUT_URLS.palworld],
  ['/go/palworld/', CHECKOUT_URLS.palworld],
  ['/go/cloud-dma', CHECKOUT_URLS.cloudDma],
  ['/go/cloud-dma/', CHECKOUT_URLS.cloudDma],
  ['/go/skin-changer', CHECKOUT_URLS.skinChanger],
  ['/go/skin-changer/', CHECKOUT_URLS.skinChanger],
  ['/go/hwid-spoofer', CHECKOUT_URLS.hwidSpoofer],
  ['/go/hwid-spoofer/', CHECKOUT_URLS.hwidSpoofer],
  ['/go/ugc', CHECKOUT_URLS.ugc],
  ['/go/ugc/', CHECKOUT_URLS.ugc],
]);

export function resolveCheckoutPathRedirect(pathname) {
  const direct = CHECKOUT_PATH_REDIRECTS.get(pathname);
  if (direct) return direct;

  if (pathname !== '/' && !pathname.endsWith('/')) {
    return CHECKOUT_PATH_REDIRECTS.get(`${pathname}/`) ?? null;
  }

  return null;
}
