import { createContext } from 'react';
import {
  DEFAULT_LOCALE,
  LOCALE_STORAGE_KEY,
  type Locale,
  type TranslationParams
} from '@/i18n/translations.ts';

export type TranslateFn = (key: string, params?: TranslationParams) => string;

export function readStoredLocale(): Locale {
  if (typeof window === 'undefined') {
    return DEFAULT_LOCALE;
  }

  const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY);

  return stored === 'vi' || stored === 'en' ? stored : DEFAULT_LOCALE;
}

export type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: TranslateFn;
};

export const LanguageContext = createContext<LanguageContextValue | null>(null);
