import { DEFAULT_LOCALE, type Locale } from '@/i18n/translations.ts';

export const LOCALES: readonly Locale[] = ['vi', 'en'];

/**
 * The default locale (Vietnamese) lives at the root (`/...`); the other locale
 * is carried as a URL path prefix (`/en/...`). This keeps existing URLs stable
 * and gives each language a distinct, crawlable URL for SEO.
 */
export const PREFIXED_LOCALE: Locale = 'en';
const LOCALE_PREFIX = `/${PREFIXED_LOCALE}`;

/** Derive the active locale from a (basename-stripped) pathname. */
export function getLocaleFromPathname(pathname: string): Locale {
  if (pathname === LOCALE_PREFIX || pathname.startsWith(`${LOCALE_PREFIX}/`)) {
    return PREFIXED_LOCALE;
  }

  return DEFAULT_LOCALE;
}

/** Remove any locale prefix, returning the locale-agnostic ("logical") path. */
export function stripLocalePrefix(pathname: string): string {
  if (pathname === LOCALE_PREFIX) {
    return '/';
  }

  if (pathname.startsWith(`${LOCALE_PREFIX}/`)) {
    return pathname.slice(LOCALE_PREFIX.length);
  }

  return pathname;
}

/** Prefix a logical path for the given locale (vi stays at root, en gets `/en`). */
export function withLocale(logicalPath: string, locale: Locale): string {
  const path = logicalPath.startsWith('/') ? logicalPath : `/${logicalPath}`;

  if (locale === DEFAULT_LOCALE) {
    return path;
  }

  return path === '/' ? LOCALE_PREFIX : `${LOCALE_PREFIX}${path}`;
}
