import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  LOCALE_STORAGE_KEY,
  enTranslations,
  type Locale,
  type TranslationTree
} from '@/i18n/translations.ts';
import { LanguageContext, type TranslateFn } from '@/i18n/language-context.ts';
import { getLocaleFromPathname, stripLocalePrefix, withLocale } from '@/i18n/locale-routing.ts';

type TranslationMap = Partial<Record<Locale, TranslationTree>>;

let viTranslationsPromise: Promise<TranslationTree> | null = null;

function loadViTranslations() {
  if (!viTranslationsPromise) {
    viTranslationsPromise = import('@/i18n/translations-vi.ts').then(
      ({ viTranslations }) => viTranslations
    );
  }

  return viTranslationsPromise;
}

function getNestedValue(tree: TranslationTree, key: string): string | undefined {
  const value = key.split('.').reduce<unknown>((current, part) => {
    if (current && typeof current === 'object' && part in current) {
      return (current as Record<string, unknown>)[part];
    }

    return undefined;
  }, tree);

  return typeof value === 'string' ? value : undefined;
}

function interpolate(template: string, params?: Record<string, string | number>) {
  if (!params) {
    return template;
  }

  return template.replace(/\{\{(\w+)\}\}/g, (_, name: string) => String(params[name] ?? ''));
}

type LanguageProviderProps = {
  children: ReactNode;
  initialTranslations?: TranslationMap;
};

/**
 * The active locale is derived from the URL (vi at the root, en under `/en`),
 * so each language has its own crawlable URL. Switching language navigates to
 * the equivalent path in the other locale. The choice is mirrored to
 * localStorage purely as a hint for future visits.
 */
export function LanguageProvider({ children, initialTranslations }: LanguageProviderProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const locale = getLocaleFromPathname(location.pathname);

  const [translationsByLocale, setTranslationsByLocale] = useState<TranslationMap>(() => ({
    en: enTranslations,
    ...(initialTranslations ?? {})
  }));

  // Vietnamese strings are code-split; load them on demand when first needed.
  useEffect(() => {
    if (locale !== 'vi' || translationsByLocale.vi) {
      return;
    }

    let active = true;

    void loadViTranslations().then((viTranslations) => {
      if (active) {
        setTranslationsByLocale((previous) => ({ ...previous, vi: viTranslations }));
      }
    });

    return () => {
      active = false;
    };
  }, [locale, translationsByLocale.vi]);

  // Remember the locale (read from the URL) for potential future use.
  useEffect(() => {
    window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
  }, [locale]);

  const setLocale = useCallback(
    (nextLocale: Locale) => {
      const logicalPath = stripLocalePrefix(location.pathname);
      const target = `${withLocale(logicalPath, nextLocale)}${location.search}${location.hash}`;
      navigate(target);
    },
    [location.pathname, location.search, location.hash, navigate]
  );

  const t = useCallback<TranslateFn>(
    (key, params) => {
      const localeTree = translationsByLocale[locale];
      const template =
        (localeTree ? getNestedValue(localeTree, key) : undefined) ??
        getNestedValue(enTranslations, key) ??
        key;

      return interpolate(template, params);
    },
    [locale, translationsByLocale]
  );

  const value = useMemo(() => ({ locale, setLocale, t }), [locale, setLocale, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
