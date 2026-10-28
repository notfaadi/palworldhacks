import { CHECKOUT_URLS, LEVO_PALWORLD_CHECKOUT } from './checkout-redirects.mjs';

/** All Buy now buttons use this Levo Cheats checkout URL. */
export { LEVO_PALWORLD_CHECKOUT };

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

/** Levo Cheats checkout — used on every Buy now / checkout CTA. */
export function checkoutPath(_product: CheckoutProduct = 'palworld'): string {
  return LEVO_PALWORLD_CHECKOUT;
}

export const PRIMARY_CHECKOUT_PATH = LEVO_PALWORLD_CHECKOUT;

export function checkoutForSlug(_slug: string): string {
  return LEVO_PALWORLD_CHECKOUT;
}

/** Normalize blog CTAs and legacy affiliate URLs to Levo checkout. */
export function resolveCheckoutHref(href: string): string {
  const trimmed = href.trim();
  if (!trimmed) return LEVO_PALWORLD_CHECKOUT;

  if (trimmed.includes('zadeyo.com')) {
    return LEVO_PALWORLD_CHECKOUT;
  }

  if (trimmed.startsWith('/go/')) {
    return LEVO_PALWORLD_CHECKOUT;
  }

  if (!trimmed.startsWith('http')) {
    return trimmed.startsWith('/') ? trimmed : `/${trimmed}`;
  }

  if (trimmed.includes('levocheats.com')) {
    return trimmed;
  }

  for (const url of Object.values(CHECKOUT)) {
    if (trimmed === url || trimmed.startsWith(`${url}?`) || trimmed.startsWith(`${url}/`)) {
      return LEVO_PALWORLD_CHECKOUT;
    }
  }

  if (
    trimmed.includes('%2Fproducts%2F') ||
    trimmed.includes('/products/palworld') ||
    trimmed.includes('/products/cloud-dma') ||
    trimmed.includes('/products/skin-changer') ||
    trimmed.includes('/products/hwid-spoofer') ||
    trimmed.includes('/products/ugc')
  ) {
    return LEVO_PALWORLD_CHECKOUT;
  }

  return trimmed;
}
