/** Levo Cheats checkout (all Buy now buttons). */
export const LEVO_PALWORLD_CHECKOUT = 'https://levocheats.com/go/FDI?to=%2Fpalworld-cheats';

/** Checkout destinations keyed by internal product id. */
export const CHECKOUT_URLS = {
  palworld: LEVO_PALWORLD_CHECKOUT,
  cloudDma: LEVO_PALWORLD_CHECKOUT,
  skinChanger: LEVO_PALWORLD_CHECKOUT,
  hwidSpoofer: LEVO_PALWORLD_CHECKOUT,
  ugc: LEVO_PALWORLD_CHECKOUT,
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
