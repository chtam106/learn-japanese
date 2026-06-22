import { routes } from '@/constants/routes.ts'

export type SeoRouteKey =
  | 'home'
  | 'alphabet'
  | 'hiragana'
  | 'katakana'
  | 'exercise'
  | 'exerciseRomaji'
  | 'exerciseCharacter'
  | 'exerciseListen'
  | 'exerciseScriptPair'

const pathToSeoKey: Record<string, SeoRouteKey> = {
  [routes.home]: 'home',
  [routes.alphabet.index]: 'alphabet',
  [routes.alphabet.hiragana]: 'hiragana',
  [routes.alphabet.katakana]: 'katakana',
  [routes.alphabet.exercise.index]: 'exercise',
  [routes.alphabet.exercise.romaji]: 'exerciseRomaji',
  [routes.alphabet.exercise.character]: 'exerciseCharacter',
  [routes.alphabet.exercise.listen]: 'exerciseListen',
  [routes.alphabet.exercise.scriptPair]: 'exerciseScriptPair',
}

export function getSeoRouteKey(pathname: string): SeoRouteKey {
  return pathToSeoKey[pathname] ?? 'home'
}

export const SITEMAP_PATHS = Object.keys(pathToSeoKey)
