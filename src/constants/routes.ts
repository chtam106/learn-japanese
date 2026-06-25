import { COURSE_LEVELS, coursePath } from '@/constants/courses/levels.ts';

type RouteNode = string | { readonly [key: string]: RouteNode };

export const routes = {
  home: '/',
  n5: {
    index: '/n5'
  },
  n4: {
    index: '/n4'
  },
  n3: {
    index: '/n3'
  },
  n2: {
    index: '/n2'
  },
  n1: {
    index: '/n1'
  },
  frontend: {
    index: '/frontend',
    reference: '/frontend/reference'
  },
  alphabet: {
    index: '/alphabet',
    hiragana: '/alphabet/hiragana',
    katakana: '/alphabet/katakana',
    combined: '/alphabet/combined',
    exercise: {
      index: '/alphabet/exercise',
      romaji: '/alphabet/exercise/romaji',
      character: '/alphabet/exercise/character',
      listen: '/alphabet/exercise/listen',
      scriptPair: '/alphabet/exercise/script-pair',
      writing: '/alphabet/exercise/writing',
      sentence: '/alphabet/exercise/sentence'
    }
  }
} as const satisfies RouteNode;

type RouteEntry = {
  path: string;
  seoKey: string;
};

function buildSeoKey(keyPath: readonly string[]) {
  const joined = keyPath.join('.');

  return joined.endsWith('.index') ? joined.slice(0, -'.index'.length) : joined;
}

function collectRouteEntries(node: RouteNode, keyPath: string[] = []): RouteEntry[] {
  if (typeof node === 'string') {
    return [{ path: node, seoKey: buildSeoKey(keyPath) }];
  }

  return Object.entries(node).flatMap(([key, value]) =>
    collectRouteEntries(value, [...keyPath, key])
  );
}

export const routeEntries = collectRouteEntries(routes);

export const SITEMAP_PATHS = routeEntries.map((entry) => entry.path);

const pathToSeoKey = Object.fromEntries(routeEntries.map((entry) => [entry.path, entry.seoKey]));

export type SeoRouteKey = (typeof routeEntries)[number]['seoKey'] | 'notFound';

export function getSeoRouteKey(pathname: string): SeoRouteKey {
  for (const level of COURSE_LEVELS) {
    if (pathname === coursePath(level) || pathname.startsWith(`${coursePath(level)}/`)) {
      return level as SeoRouteKey;
    }
  }

  return (pathToSeoKey[pathname] as SeoRouteKey | undefined) ?? 'notFound';
}
