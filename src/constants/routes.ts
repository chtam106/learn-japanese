import {
  N5_LESSON_EXERCISE_PATHS,
  N5_LESSON_LISTENING_PATHS,
  N5_LESSON_PATHS,
} from '@/constants/n5-course.ts'

type RouteNode = string | { readonly [key: string]: RouteNode }

export const routes = {
  home: '/',
  n5: {
    index: '/n5',
  },
  alphabet: {
    index: '/alphabet',
    hiragana: '/alphabet/hiragana',
    katakana: '/alphabet/katakana',
    exercise: {
      index: '/alphabet/exercise',
      romaji: '/alphabet/exercise/romaji',
      character: '/alphabet/exercise/character',
      listen: '/alphabet/exercise/listen',
      scriptPair: '/alphabet/exercise/script-pair',
    },
  },
} as const satisfies RouteNode

type RouteEntry = {
  path: string
  seoKey: string
}

function buildSeoKey(keyPath: readonly string[]) {
  const joined = keyPath.join('.')

  return joined.endsWith('.index') ? joined.slice(0, -'.index'.length) : joined
}

function collectRouteEntries(node: RouteNode, keyPath: string[] = []): RouteEntry[] {
  if (typeof node === 'string') {
    return [{ path: node, seoKey: buildSeoKey(keyPath) }]
  }

  return Object.entries(node).flatMap(([key, value]) =>
    collectRouteEntries(value, [...keyPath, key]),
  )
}

export const routeEntries = collectRouteEntries(routes)

export const SITEMAP_PATHS = [
  ...routeEntries.map((entry) => entry.path),
  ...N5_LESSON_PATHS,
  ...N5_LESSON_EXERCISE_PATHS,
  ...N5_LESSON_LISTENING_PATHS,
]

const pathToSeoKey = Object.fromEntries(routeEntries.map((entry) => [entry.path, entry.seoKey]))

export type SeoRouteKey = (typeof routeEntries)[number]['seoKey']

export function getSeoRouteKey(pathname: string): SeoRouteKey {
  if (pathname.startsWith(`${routes.n5.index}/`)) {
    return 'n5' as SeoRouteKey
  }

  return (pathToSeoKey[pathname] as SeoRouteKey | undefined) ?? 'home'
}
