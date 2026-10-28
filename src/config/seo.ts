import { t } from '../i18n';
import { SITE_DOMAIN as INDEXNOW_HOST_NAME, SITE_URL } from './site';
import { getProductSeoEntry } from './pageSeo';
import { getSeoPageEntry, normalizeSeoPath, resolveSeo as resolveSeoEntry } from '../data/seo';

export const SITE_ORIGIN = SITE_URL.replace(/\/$/, '');

export const DEFAULT_OG_IMAGE = '/img/og/home.jpg';

export const GA_MEASUREMENT_ID = import.meta.env.PUBLIC_GA_MEASUREMENT_ID as string | undefined;

/** @example @palworldhacks */
export const TWITTER_SITE = import.meta.env.PUBLIC_TWITTER_SITE as string | undefined;

export const TWITTER_CREATOR = import.meta.env.PUBLIC_TWITTER_CREATOR as string | undefined;

/** Comma-separated profile URLs (X, YouTube, etc.) for Organization sameAs. */
export function getOrganizationSameAs(): string[] {
  const raw = import.meta.env.PUBLIC_ORG_SAME_AS as string | undefined;
  if (!raw?.trim()) return [];
  return raw
    .split(',')
    .map((entry) => entry.trim())
    .filter(Boolean);
}

export const INDEXNOW_KEY = import.meta.env.INDEXNOW_KEY as string | undefined;

export function canonicalUrl(pathname: string): string {
  let path = pathname || '/';
  if (!path.startsWith('/')) path = `/${path}`;
  if (path !== '/' && !path.endsWith('/')) path = `${path}/`;
  return `${SITE_ORIGIN}${path}`;
}

export function absoluteAssetUrl(path: string): string {
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_ORIGIN}${normalized}`;
}

export function resolvePageSeo(pathname: string): {
  title: string;
  description: string;
  ogImage?: string;
} {
  const path = normalizeSeoPath(pathname);
  const product = getProductSeoEntry(path);
  if (product) return { ...product, ogImage: resolveSeoEntry(path).ogImage };

  const resolved = resolveSeoEntry(path);
  if (getSeoPageEntry(path)) {
    return { title: resolved.title, description: resolved.description, ogImage: resolved.ogImage };
  }
  return {
    title: resolved.title,
    description: resolved.description,
    ogImage: resolved.ogImage,
  };
}

export function pageTitle(keyword: string, brand = t.site.name): string {
  const suffix = ` | ${brand}`;
  const max = 60;
  if (`${keyword}${suffix}`.length <= max) return `${keyword}${suffix}`;
  const trimmed = keyword.slice(0, Math.max(20, max - suffix.length - 1)).trim();
  return `${trimmed}${suffix}`;
}

/** Trim to SERP-friendly 140–158 chars without mid-word cuts. */
export function fitMetaDescription(text: string, min = 140, max = 158): string {
  const trimmed = text.trim().replace(/\s+/g, ' ');
  if (trimmed.length >= min && trimmed.length <= max) return trimmed;
  if (trimmed.length <= max) return trimmed;
  const slice = trimmed.slice(0, max + 1);
  const lastSpace = slice.lastIndexOf(' ');
  const cut = lastSpace >= min ? slice.slice(0, lastSpace) : trimmed.slice(0, max);
  return cut.replace(/[,;:\-–—\s]+$/, '').trim();
}

/** Keep meta descriptions blunt about Palworld hacks for SERP snippets. */
export function cheatMetaDescription(text: string): string {
  const trimmed = text.trim();
  const base = /palworld\s*cheat/i.test(trimmed) ? trimmed : `Palworld hacks guide: ${trimmed}`;
  return fitMetaDescription(`${base} Updated for Palworld 1.0.5.`);
}

export const DEFAULT_OG_IMAGE_WIDTH = 1200;
export const DEFAULT_OG_IMAGE_HEIGHT = 630;

export const RSS_FEED_PATH = '/rss.xml';

/** Used by IndexNow postbuild script. */
export const INDEXNOW_HOST = INDEXNOW_HOST_NAME;
