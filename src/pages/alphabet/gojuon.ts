import { DAKUTEN_MARK, HANDAKUTEN_MARK } from '@/constants/kana-terminology.ts';

type TranslateFn = (key: string, params?: Record<string, string | number>) => string;

export type AlphabetCell = {
  char: string;
  romaji: string;
  yoonBase?: string;
  yoonSuffix?: string;
};

export type AlphabetChartRow = {
  seion: (AlphabetCell | null)[];
  dakuten?: (AlphabetCell | null)[];
  handakuten?: (AlphabetCell | null)[];
};

export type GridRow<T> = {
  label: string;
  cells: (T | null)[];
};

export const VOWEL_HEADERS = ['a', 'i', 'u', 'e', 'o'];
export const YOON_HEADERS = ['ya', 'yu', 'yo'];

export function firstCell(cells: (AlphabetCell | null)[]) {
  return cells.find((cell): cell is AlphabetCell => cell !== null);
}

/** Leading consonant of a row, e.g. か→"k", さ→"s", あ→"–", きゃ→"ky". */
export function consonantLabel(cells: (AlphabetCell | null)[]) {
  const cell = firstCell(cells);
  if (!cell) return '';
  const match = cell.romaji.toLowerCase().match(/^[^aeiou]+/);
  return match ? match[0] : '–';
}

/** Script-correct example for the dakuten explanation, e.g. か→が (or カ→ガ). */
export function getVoicedExample(rows: AlphabetChartRow[]) {
  const row = rows.find((item) => item.dakuten && firstCell(item.dakuten));
  return {
    base: row ? firstCell(row.seion) : undefined,
    voiced: row?.dakuten ? firstCell(row.dakuten) : undefined
  };
}

/** Script-correct example for the yoon explanation, e.g. き + ゃ = きゃ (or キ + ャ = キャ). */
export function getYoonExample(rows: AlphabetChartRow[]) {
  const cells = (rows[0]?.seion ?? []).filter((cell): cell is AlphabetCell => cell !== null);
  return {
    smalls: cells.map((cell) => cell.yoonSuffix ?? ''),
    example: cells[0]
  };
}

/** Dakuten/handakuten explanation with a script-correct worked example. */
export function getVoicedDescription(t: TranslateFn, rows: AlphabetChartRow[]) {
  const { base, voiced } = getVoicedExample(rows);
  return t('chart.voicedDescription', {
    dakuten: DAKUTEN_MARK,
    handakuten: HANDAKUTEN_MARK,
    base: base?.char ?? '',
    baseRomaji: base?.romaji ?? '',
    voiced: voiced?.char ?? '',
    voicedRomaji: voiced?.romaji ?? ''
  });
}

/** Yoon explanation with a script-correct worked example. */
export function getYoonDescription(t: TranslateFn, rows: AlphabetChartRow[]) {
  const { smalls, example } = getYoonExample(rows);
  return t('chart.yoonDescription', {
    small1: smalls[0] ?? '',
    small2: smalls[1] ?? '',
    small3: smalls[2] ?? '',
    base: example?.yoonBase ?? '',
    result: example?.char ?? '',
    romaji: example?.romaji ?? ''
  });
}
