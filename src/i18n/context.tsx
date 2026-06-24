import { useCallback, useMemo, useState, type ReactNode } from 'react'
import {
  DEFAULT_LOCALE,
  LOCALE_STORAGE_KEY,
  enTranslations,
  type Locale,
  type TranslationTree,
} from '@/i18n/translations.ts'
import { LanguageContext, type TranslateFn } from '@/i18n/language-context.ts'

type TranslationMap = Partial<Record<Locale, TranslationTree>>

let viTranslationsPromise: Promise<TranslationTree> | null = null

function loadViTranslations() {
  if (!viTranslationsPromise) {
    viTranslationsPromise = import('@/i18n/translations-vi.ts').then(
      ({ viTranslations }) => viTranslations,
    )
  }

  return viTranslationsPromise
}

function getNestedValue(tree: TranslationTree, key: string): string | undefined {
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

type LanguageProviderProps = {
  children: ReactNode
  initialLocale?: Locale
  initialTranslations?: TranslationMap
}

export function LanguageProvider({
  children,
  initialLocale,
  initialTranslations,
}: LanguageProviderProps) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale ?? readStoredLocale)
  const [translationsByLocale, setTranslationsByLocale] = useState<TranslationMap>(() => ({
    en: enTranslations,
    ...(initialTranslations ?? {}),
  }))

  const setLocale = useCallback(
    (nextLocale: Locale) => {
      if (nextLocale === 'vi' && !translationsByLocale.vi) {
        void loadViTranslations().then((viTranslations) => {
          setTranslationsByLocale((previous) => ({ ...previous, vi: viTranslations }))
          setLocaleState('vi')
          window.localStorage.setItem(LOCALE_STORAGE_KEY, 'vi')
        })

        return
      }

      setLocaleState(nextLocale)
      window.localStorage.setItem(LOCALE_STORAGE_KEY, nextLocale)
    },
    [translationsByLocale.vi],
  )

  const t = useCallback<TranslateFn>(
    (key, params) => {
      const localeTree = translationsByLocale[locale]
      const template =
        (localeTree ? getNestedValue(localeTree, key) : undefined) ??
        getNestedValue(enTranslations, key) ??
        key

      return interpolate(template, params)
    },
    [locale, translationsByLocale],
  )

  const value = useMemo(() => ({ locale, setLocale, t }), [locale, setLocale, t])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
