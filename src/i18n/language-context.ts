import { createContext } from 'react'
import type { Locale, TranslationParams } from '@/i18n/translations.ts'

export type TranslateFn = (key: string, params?: TranslationParams) => string

export type LanguageContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: TranslateFn
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)
