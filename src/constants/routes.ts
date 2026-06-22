export const routes = {
  home: '/',
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
} as const
