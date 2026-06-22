import { useCallback, useMemo, useState, type ReactNode } from 'react'
import {
  DEFAULT_LOCALE,
  LOCALE_STORAGE_KEY,
  translations,
  type Locale,
} from '@/i18n/translations.ts'
import { LanguageContext, type TranslateFn } from '@/i18n/language-context.ts'

function getNestedValue(tree: typeof translations.en, key: string): string | undefined {
  const value = key.split('.').reduce<unknown>((current, part) => {
    if (current && typeof current === 'object' && part in current) {
      return (current as Record<string, unknown>)[part]
    }

    return undefined
  }, tree)

  return typeof value === 'string' ? value : undefined
}

function interpolate(template: string, params?: Record<string, string | number>) {
  if (!params) {
    return template
  }

  return template.replace(/\{\{(\w+)\}\}/g, (_, name: string) => String(params[name] ?? ''))
}

function readStoredLocale(): Locale {
  if (typeof window === 'undefined') {
    return DEFAULT_LOCALE
  }

  const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY)

  return stored === 'vi' || stored === 'en' ? stored : DEFAULT_LOCALE
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(readStoredLocale)

  const setLocale = useCallback((nextLocale: Locale) => {
    setLocaleState(nextLocale)
    window.localStorage.setItem(LOCALE_STORAGE_KEY, nextLocale)
  }, [])

  const t = useCallback<TranslateFn>(
    (key, params) => {
      const template =
        getNestedValue(translations[locale], key) ?? getNestedValue(translations.en, key) ?? key

      return interpolate(template, params)
    },
    [locale],
  )

  const value = useMemo(() => ({ locale, setLocale, t }), [locale, setLocale, t])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
