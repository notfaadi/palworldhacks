/** Production domain (used in copy when you need a bare hostname). */
export const PRODUCTION_DOMAIN = 'getpalworldhack.net';
export const PRODUCTION_URL = `https://${PRODUCTION_DOMAIN}`;

function normalizeOrigin(url: string): string {
  return url.replace(/\/$/, '');
}

/** Resolved at build/dev time from PUBLIC_SITE_URL (.env.development | .env.production). */
export const SITE_URL = normalizeOrigin(
  import.meta.env.PUBLIC_SITE_URL ?? PRODUCTION_URL,
);

export const SITE_DOMAIN = (() => {
  try {
    return new URL(SITE_URL).host;
  } catch {
    return PRODUCTION_DOMAIN;
  }
})();

export const IS_LOCAL_DEV =
  import.meta.env.DEV || SITE_DOMAIN.includes('localhost') || SITE_DOMAIN.startsWith('127.0.0.1');

export const PRODUCT_BASE = '/products/palworld-hacks/';
export const TITLE_PREFIX = 'Palworld Hacks';
export const SUPPORT_EMAIL = `support@${IS_LOCAL_DEV ? PRODUCTION_DOMAIN : SITE_DOMAIN}`;
export const DISCORD_URL = 'https://discord.com/invite/Vu85F8auQS';
