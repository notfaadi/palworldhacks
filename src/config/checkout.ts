import {
  CHECKOUT_URLS,
  LEVO_PALWORLD_CHECKOUT,
  levoAffiliateUrl,
} from './checkout-redirects.mjs';

export { LEVO_PALWORLD_CHECKOUT, levoAffiliateUrl };

export const CHECKOUT = CHECKOUT_URLS;

export type CheckoutProduct = keyof typeof CHECKOUT;

/** URL slug for legacy /go/[slug]/ redirects (middleware + static _redirects). */
export const CHECKOUT_SLUGS: Record<CheckoutProduct, string> = {
  palworld: 'palworld',
  cloudDma: 'cloud-dma',
  skinChanger: 'skin-changer',
  hwidSpoofer: 'hwid-spoofer',
  ugc: 'ugc',
};

export const CHECKOUT_SLUG_TO_PRODUCT = Object.fromEntries(
  Object.entries(CHECKOUT_SLUGS).map(([product, slug]) => [slug, product as CheckoutProduct]),
) as Record<string, CheckoutProduct>;

export function checkoutPath(product: CheckoutProduct = 'palworld'): string {
  return CHECKOUT_URLS[product];
}

export const PRIMARY_CHECKOUT_PATH = CHECKOUT_URLS.palworld;

export function checkoutForSlug(slug: string): string {
  switch (slug) {
    case 'cloud-dma':
      return checkoutPath('cloudDma');
    case 'unlock-all':
      return checkoutPath('skinChanger');
    case 'hwid-spoofer':
      return checkoutPath('hwidSpoofer');
    case 'ugc':
    case 'account-recovery':
      return checkoutPath('ugc');
    case 'lite':
    case 'pro':
    case 'elite':
    default:
      return checkoutPath('palworld');
  }
}

function affiliateFromGoPath(href: string): string | null {
  if (!href.startsWith('/go/')) return null;
  const slug = href.replace(/^\/go\//, '').replace(/\/$/, '').split('?')[0];
  const product = CHECKOUT_SLUG_TO_PRODUCT[slug];
  return product ? CHECKOUT_URLS[product] : CHECKOUT_URLS.palworld;
}

function affiliateFromLevoUrl(href: string): string {
  try {
    const url = new URL(href);
    if (!url.hostname.includes('levocheats.com')) return href;
    if (url.pathname.startsWith('/go/')) return href;
    return levoAffiliateUrl(url.pathname);
  } catch {
    return href;
  }
}

/** Normalize blog CTAs and legacy affiliate URLs to Levo affiliate checkout. */
export function resolveCheckoutHref(href: string): string {
  const trimmed = href.trim();
  if (!trimmed) return CHECKOUT_URLS.palworld;

  if (trimmed.includes('zadeyo.com')) {
    return CHECKOUT_URLS.palworld;
  }

  const fromGo = affiliateFromGoPath(trimmed);
  if (fromGo) return fromGo;

  if (!trimmed.startsWith('http')) {
    return trimmed.startsWith('/') ? trimmed : `/${trimmed}`;
  }

  if (trimmed.includes('levocheats.com')) {
    return affiliateFromLevoUrl(trimmed);
  }

  for (const url of Object.values(CHECKOUT)) {
    if (trimmed === url || trimmed.startsWith(`${url}?`) || trimmed.startsWith(`${url}/`)) {
      return url;
    }
  }

  if (trimmed.includes('%2Fcloud-dma') || trimmed.includes('/cloud-dma')) {
    return CHECKOUT_URLS.cloudDma;
  }
  if (trimmed.includes('%2Fskin-changer') || trimmed.includes('/skin-changer')) {
    return CHECKOUT_URLS.skinChanger;
  }
  if (trimmed.includes('%2Fhwid-spoofer') || trimmed.includes('/hwid-spoofer')) {
    return CHECKOUT_URLS.hwidSpoofer;
  }
  if (trimmed.includes('%2Fgame-accounts') || trimmed.includes('/game-accounts')) {
    return CHECKOUT_URLS.ugc;
  }
  if (trimmed.includes('%2Fpalworld-cheats') || trimmed.includes('/palworld-cheats')) {
    return CHECKOUT_URLS.palworld;
  }

  return trimmed;
}
