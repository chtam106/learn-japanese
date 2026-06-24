import './noto-sans-ui.css'

export const FONT_FAMILY_UI =
  '"Noto Sans Variable", "Noto Sans", "Noto Sans JP Variable", "Noto Sans JP", sans-serif'

export const FONT_FAMILY_JP = '"Noto Sans JP Variable", "Noto Sans JP", sans-serif'

let japaneseUiFontLoadPromise: Promise<unknown> | null = null

export function loadJapaneseUiFont() {
  if (!japaneseUiFontLoadPromise) {
    japaneseUiFontLoadPromise = import('@fontsource-variable/noto-sans-jp/wght.css')
  }

  return japaneseUiFontLoadPromise
}
