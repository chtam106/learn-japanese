import type { AlphabetCell, AlphabetChartRow } from '@/pages/alphabet/alphabet-chart.tsx';
import { DAKUTEN_MARK, HANDAKUTEN_MARK, voicedVariantMark } from '@/constants/kana-terminology.ts';
import type { TranslateFn } from '@/i18n/language-context.ts';
import { getYoonDisplayParts } from '@/utils/yoon-display.ts';

export type { AlphabetCell };

type BilingualCell = {
  romaji: string;
  hiragana: string;
  katakana: string;
};

type BilingualChartRow = {
  seion: (BilingualCell | null)[];
  dakuten?: (BilingualCell | null)[];
  handakuten?: (BilingualCell | null)[];
};

const bilingualChartRows: BilingualChartRow[] = [
  {
    seion: [
      { romaji: 'a', hiragana: 'あ', katakana: 'ア' },
      { romaji: 'i', hiragana: 'い', katakana: 'イ' },
      { romaji: 'u', hiragana: 'う', katakana: 'ウ' },
      { romaji: 'e', hiragana: 'え', katakana: 'エ' },
      { romaji: 'o', hiragana: 'お', katakana: 'オ' }
    ]
  },
  {
    seion: [
      { romaji: 'ka', hiragana: 'か', katakana: 'カ' },
      { romaji: 'ki', hiragana: 'き', katakana: 'キ' },
      { romaji: 'ku', hiragana: 'く', katakana: 'ク' },
      { romaji: 'ke', hiragana: 'け', katakana: 'ケ' },
      { romaji: 'ko', hiragana: 'こ', katakana: 'コ' }
    ],
    dakuten: [
      { romaji: 'ga', hiragana: 'が', katakana: 'ガ' },
      { romaji: 'gi', hiragana: 'ぎ', katakana: 'ギ' },
      { romaji: 'gu', hiragana: 'ぐ', katakana: 'グ' },
      { romaji: 'ge', hiragana: 'げ', katakana: 'ゲ' },
      { romaji: 'go', hiragana: 'ご', katakana: 'ゴ' }
    ]
  },
  {
    seion: [
      { romaji: 'sa', hiragana: 'さ', katakana: 'サ' },
      { romaji: 'shi', hiragana: 'し', katakana: 'シ' },
      { romaji: 'su', hiragana: 'す', katakana: 'ス' },
      { romaji: 'se', hiragana: 'せ', katakana: 'セ' },
      { romaji: 'so', hiragana: 'そ', katakana: 'ソ' }
    ],
    dakuten: [
      { romaji: 'za', hiragana: 'ざ', katakana: 'ザ' },
      { romaji: 'ji', hiragana: 'じ', katakana: 'ジ' },
      { romaji: 'zu', hiragana: 'ず', katakana: 'ズ' },
      { romaji: 'ze', hiragana: 'ぜ', katakana: 'ゼ' },
      { romaji: 'zo', hiragana: 'ぞ', katakana: 'ゾ' }
    ]
  },
  {
    seion: [
      { romaji: 'ta', hiragana: 'た', katakana: 'タ' },
      { romaji: 'chi', hiragana: 'ち', katakana: 'チ' },
      { romaji: 'tsu', hiragana: 'つ', katakana: 'ツ' },
      { romaji: 'te', hiragana: 'て', katakana: 'テ' },
      { romaji: 'to', hiragana: 'と', katakana: 'ト' }
    ],
    dakuten: [
      { romaji: 'da', hiragana: 'だ', katakana: 'ダ' },
      { romaji: 'di', hiragana: 'ぢ', katakana: 'ヂ' },
      { romaji: 'du', hiragana: 'づ', katakana: 'ヅ' },
      { romaji: 'de', hiragana: 'で', katakana: 'デ' },
      { romaji: 'do', hiragana: 'ど', katakana: 'ド' }
    ]
  },
  {
    seion: [
      { romaji: 'na', hiragana: 'な', katakana: 'ナ' },
      { romaji: 'ni', hiragana: 'に', katakana: 'ニ' },
      { romaji: 'nu', hiragana: 'ぬ', katakana: 'ヌ' },
      { romaji: 'ne', hiragana: 'ね', katakana: 'ネ' },
      { romaji: 'no', hiragana: 'の', katakana: 'ノ' }
    ]
  },
  {
    seion: [
      { romaji: 'ha', hiragana: 'は', katakana: 'ハ' },
      { romaji: 'hi', hiragana: 'ひ', katakana: 'ヒ' },
      { romaji: 'fu', hiragana: 'ふ', katakana: 'フ' },
      { romaji: 'he', hiragana: 'へ', katakana: 'ヘ' },
      { romaji: 'ho', hiragana: 'ほ', katakana: 'ホ' }
    ],
    dakuten: [
      { romaji: 'ba', hiragana: 'ば', katakana: 'バ' },
      { romaji: 'bi', hiragana: 'び', katakana: 'ビ' },
      { romaji: 'bu', hiragana: 'ぶ', katakana: 'ブ' },
      { romaji: 'be', hiragana: 'べ', katakana: 'ベ' },
      { romaji: 'bo', hiragana: 'ぼ', katakana: 'ボ' }
    ],
    handakuten: [
      { romaji: 'pa', hiragana: 'ぱ', katakana: 'パ' },
      { romaji: 'pi', hiragana: 'ぴ', katakana: 'ピ' },
      { romaji: 'pu', hiragana: 'ぷ', katakana: 'プ' },
      { romaji: 'pe', hiragana: 'ぺ', katakana: 'ペ' },
      { romaji: 'po', hiragana: 'ぽ', katakana: 'ポ' }
    ]
  },
  {
    seion: [
      { romaji: 'ma', hiragana: 'ま', katakana: 'マ' },
      { romaji: 'mi', hiragana: 'み', katakana: 'ミ' },
      { romaji: 'mu', hiragana: 'む', katakana: 'ム' },
      { romaji: 'me', hiragana: 'め', katakana: 'メ' },
      { romaji: 'mo', hiragana: 'も', katakana: 'モ' }
    ]
  },
  {
    seion: [
      { romaji: 'ya', hiragana: 'や', katakana: 'ヤ' },
      null,
      { romaji: 'yu', hiragana: 'ゆ', katakana: 'ユ' },
      null,
      { romaji: 'yo', hiragana: 'よ', katakana: 'ヨ' }
    ]
  },
  {
    seion: [
      { romaji: 'ra', hiragana: 'ら', katakana: 'ラ' },
      { romaji: 'ri', hiragana: 'り', katakana: 'リ' },
      { romaji: 'ru', hiragana: 'る', katakana: 'ル' },
      { romaji: 're', hiragana: 'れ', katakana: 'レ' },
      { romaji: 'ro', hiragana: 'ろ', katakana: 'ロ' }
    ]
  },
  {
    seion: [
      { romaji: 'wa', hiragana: 'わ', katakana: 'ワ' },
      null,
      null,
      null,
      { romaji: 'wo', hiragana: 'を', katakana: 'ヲ' }
    ]
  },
  {
    seion: [{ romaji: 'n', hiragana: 'ん', katakana: 'ン' }, null, null, null, null]
  }
];

const bilingualYoonRows: BilingualChartRow[] = [
  {
    seion: [
      { romaji: 'kya', hiragana: 'きゃ', katakana: 'キャ' },
      null,
      { romaji: 'kyu', hiragana: 'きゅ', katakana: 'キュ' },
      null,
      { romaji: 'kyo', hiragana: 'きょ', katakana: 'キョ' }
    ],
    dakuten: [
      { romaji: 'gya', hiragana: 'ぎゃ', katakana: 'ギャ' },
      null,
      { romaji: 'gyu', hiragana: 'ぎゅ', katakana: 'ギュ' },
      null,
      { romaji: 'gyo', hiragana: 'ぎょ', katakana: 'ギョ' }
    ]
  },
  {
    seion: [
      { romaji: 'sha', hiragana: 'しゃ', katakana: 'シャ' },
      null,
      { romaji: 'shu', hiragana: 'しゅ', katakana: 'シュ' },
      null,
      { romaji: 'sho', hiragana: 'しょ', katakana: 'ショ' }
    ],
    dakuten: [
      { romaji: 'ja', hiragana: 'じゃ', katakana: 'ジャ' },
      null,
      { romaji: 'ju', hiragana: 'じゅ', katakana: 'ジュ' },
      null,
      { romaji: 'jo', hiragana: 'じょ', katakana: 'ジョ' }
    ]
  },
  {
    seion: [
      { romaji: 'cha', hiragana: 'ちゃ', katakana: 'チャ' },
      null,
      { romaji: 'chu', hiragana: 'ちゅ', katakana: 'チュ' },
      null,
      { romaji: 'cho', hiragana: 'ちょ', katakana: 'チョ' }
    ]
  },
  {
    seion: [
      { romaji: 'nya', hiragana: 'にゃ', katakana: 'ニャ' },
      null,
      { romaji: 'nyu', hiragana: 'にゅ', katakana: 'ニュ' },
      null,
      { romaji: 'nyo', hiragana: 'にょ', katakana: 'ニョ' }
    ]
  },
  {
    seion: [
      { romaji: 'hya', hiragana: 'ひゃ', katakana: 'ヒャ' },
      null,
      { romaji: 'hyu', hiragana: 'ひゅ', katakana: 'ヒュ' },
      null,
      { romaji: 'hyo', hiragana: 'ひょ', katakana: 'ヒョ' }
    ],
    dakuten: [
      { romaji: 'bya', hiragana: 'びゃ', katakana: 'ビャ' },
      null,
      { romaji: 'byu', hiragana: 'びゅ', katakana: 'ビュ' },
      null,
      { romaji: 'byo', hiragana: 'びょ', katakana: 'ビョ' }
    ],
    handakuten: [
      { romaji: 'pya', hiragana: 'ぴゃ', katakana: 'ピャ' },
      null,
      { romaji: 'pyu', hiragana: 'ぴゅ', katakana: 'ピュ' },
      null,
      { romaji: 'pyo', hiragana: 'ぴょ', katakana: 'ピョ' }
    ]
  },
  {
    seion: [
      { romaji: 'mya', hiragana: 'みゃ', katakana: 'ミャ' },
      null,
      { romaji: 'myu', hiragana: 'みゅ', katakana: 'ミュ' },
      null,
      { romaji: 'myo', hiragana: 'みょ', katakana: 'ミョ' }
    ]
  },
  {
    seion: [
      { romaji: 'rya', hiragana: 'りゃ', katakana: 'リャ' },
      null,
      { romaji: 'ryu', hiragana: 'りゅ', katakana: 'リュ' },
      null,
      { romaji: 'ryo', hiragana: 'りょ', katakana: 'リョ' }
    ]
  }
];

function buildRomajiToCharMap(
  rows: BilingualChartRow[],
  script: 'hiragana' | 'katakana'
): Record<string, string> {
  const map: Record<string, string> = {};

  for (const row of rows) {
    for (const group of [row.seion, row.dakuten, row.handakuten]) {
      if (!group) {
        continue;
      }

      for (const cell of group) {
        if (cell) {
          map[cell.romaji] = cell[script];
        }
      }
    }
  }

  return map;
}

function toChartRows(
  rows: BilingualChartRow[],
  script: 'hiragana' | 'katakana'
): AlphabetChartRow[] {
  const mapCell = (value: BilingualCell | null) =>
    value ? { char: value[script], romaji: value.romaji } : null;

  const mapRow = (row: (BilingualCell | null)[] | undefined) => row?.map(mapCell);

  return rows.map((row) => ({
    seion: row.seion.map(mapCell),
    dakuten: mapRow(row.dakuten),
    handakuten: mapRow(row.handakuten)
  }));
}

function toYoonChartRows(
  rows: BilingualChartRow[],
  script: 'hiragana' | 'katakana'
): AlphabetChartRow[] {
  const romajiToChar = buildRomajiToCharMap(bilingualChartRows, script);

  const mapCell = (value: BilingualCell | null): AlphabetCell | null => {
    if (!value) {
      return null;
    }

    const yoonParts = getYoonDisplayParts(value.romaji, script, romajiToChar);

    return {
      char: value[script],
      romaji: value.romaji,
      ...(yoonParts && {
        yoonBase: yoonParts.base,
        yoonSuffix: yoonParts.suffix
      })
    };
  };

  const mapRow = (row: (BilingualCell | null)[] | undefined) => row?.map(mapCell);

  return rows.map((row) => ({
    seion: row.seion.map(mapCell),
    dakuten: mapRow(row.dakuten),
    handakuten: mapRow(row.handakuten)
  }));
}

export const hiraganaChartRows = toChartRows(bilingualChartRows, 'hiragana');
export const katakanaChartRows = toChartRows(bilingualChartRows, 'katakana');
export const hiraganaYoonChartRows = toYoonChartRows(bilingualYoonRows, 'hiragana');
export const katakanaYoonChartRows = toYoonChartRows(bilingualYoonRows, 'katakana');

function flattenSection(
  rows: AlphabetChartRow[],
  section: 'seion' | 'dakuten' | 'handakuten'
): AlphabetCell[] {
  const items: AlphabetCell[] = [];

  for (const row of rows) {
    const cells = section === 'seion' ? row.seion : (row[section] ?? []);

    for (const cell of cells) {
      if (cell) {
        items.push(cell);
      }
    }
  }

  return items;
}

function flattenChartRows(rows: AlphabetChartRow[]): AlphabetCell[] {
  return [
    ...flattenSection(rows, 'seion'),
    ...flattenSection(rows, 'dakuten'),
    ...flattenSection(rows, 'handakuten')
  ];
}

function getChartRows(script: 'hiragana' | 'katakana') {
  return script === 'hiragana' ? hiraganaChartRows : katakanaChartRows;
}

function getYoonChartRows(script: 'hiragana' | 'katakana') {
  return script === 'hiragana' ? hiraganaYoonChartRows : katakanaYoonChartRows;
}

function flattenAllChartRows(script: 'hiragana' | 'katakana'): AlphabetCell[] {
  return [...flattenChartRows(getChartRows(script)), ...flattenChartRows(getYoonChartRows(script))];
}

export type ExerciseScope =
  | 'all'
  | 'seion'
  | 'dakuten'
  | 'handakuten'
  | 'yoon'
  | `row-${number}`
  | `row-${number}-dakuten`
  | `row-${number}-handakuten`
  | `row-range-${number}-${number}`
  | `row-range-${number}-${number}-dakuten`
  | `row-range-${number}-${number}-handakuten`
  | `yoon-row-${number}`
  | `yoon-row-${number}-dakuten`
  | `yoon-row-${number}-handakuten`
  | `yoon-row-range-${number}-${number}`
  | `yoon-row-range-${number}-${number}-dakuten`
  | `yoon-row-range-${number}-${number}-handakuten`;

export type ExerciseOverviewScope = 'all' | 'seion' | 'dakuten' | 'handakuten' | 'yoon';

export type ExerciseRowScope = Exclude<ExerciseScope, ExerciseOverviewScope>;

export type AlphabetRowOption = {
  value: ExerciseScope;
  label: string;
};

function getRowName(row: BilingualChartRow) {
  const first = row.seion.find((cell): cell is BilingualCell => cell !== null);

  if (!first) {
    return null;
  }

  return first.romaji.charAt(0).toUpperCase() + first.romaji.slice(1);
}

function formatRowLabel(row: BilingualChartRow, t: TranslateFn): string {
  const first = row.seion.find((cell): cell is BilingualCell => cell !== null);
  const name = getRowName(row);

  if (!first || !name) {
    return t('exercise.rowDefault');
  }

  return t('exercise.rowLabel', { name, char: first.hiragana });
}

function formatVoicedRowLabel(
  row: BilingualChartRow,
  variant: 'dakuten' | 'handakuten',
  t: TranslateFn
): string {
  const cells = variant === 'dakuten' ? row.dakuten : row.handakuten;
  const first = cells?.find((cell): cell is BilingualCell => cell !== null);
  const name = getRowName(row);
  const mark = voicedVariantMark(variant);

  if (!name) {
    return t('exercise.rowDefault');
  }

  return t('exercise.voicedRowLabel', {
    name,
    mark,
    char: first?.hiragana ?? ''
  });
}

function formatYoonRowLabel(row: BilingualChartRow, t: TranslateFn): string {
  const first = row.seion.find((cell): cell is BilingualCell => cell !== null);
  const name = getRowName(row);

  if (!first || !name) {
    return t('exercise.yoonRowDefault');
  }

  return t('exercise.rowLabel', { name, char: first.hiragana });
}

function formatYoonVoicedRowLabel(
  row: BilingualChartRow,
  variant: 'dakuten' | 'handakuten',
  t: TranslateFn
): string {
  const cells = variant === 'dakuten' ? row.dakuten : row.handakuten;
  const first = cells?.find((cell): cell is BilingualCell => cell !== null);
  const name = getRowName(row);
  const mark = voicedVariantMark(variant);

  if (!name) {
    return t('exercise.yoonRowDefault');
  }

  return t('exercise.voicedRowLabel', {
    name,
    mark,
    char: first?.hiragana ?? ''
  });
}

export function getExerciseOverviewScopeOptions(t: TranslateFn): AlphabetRowOption[] {
  return [
    { value: 'all', label: t('exercise.scopeAll') },
    { value: 'seion', label: t('exercise.scopeSeion') },
    { value: 'dakuten', label: t('exercise.scopeDakuten', { mark: DAKUTEN_MARK }) },
    { value: 'handakuten', label: t('exercise.scopeHandakuten', { mark: HANDAKUTEN_MARK }) },
    { value: 'yoon', label: t('exercise.scopeYoon') }
  ];
}

export function getExerciseRowScopeOptions(t: TranslateFn): AlphabetRowOption[] {
  return [
    ...bilingualChartRows.flatMap((row, index) => {
      const options: AlphabetRowOption[] = [
        { value: `row-${index}`, label: formatRowLabel(row, t) }
      ];

      if (row.dakuten) {
        options.push({
          value: `row-${index}-dakuten`,
          label: formatVoicedRowLabel(row, 'dakuten', t)
        });
      }

      if (row.handakuten) {
        options.push({
          value: `row-${index}-handakuten`,
          label: formatVoicedRowLabel(row, 'handakuten', t)
        });
      }

      return options;
    }),
    ...bilingualYoonRows.flatMap((row, index) => {
      const options: AlphabetRowOption[] = [
        { value: `yoon-row-${index}`, label: formatYoonRowLabel(row, t) }
      ];

      if (row.dakuten) {
        options.push({
          value: `yoon-row-${index}-dakuten`,
          label: formatYoonVoicedRowLabel(row, 'dakuten', t)
        });
      }

      if (row.handakuten) {
        options.push({
          value: `yoon-row-${index}-handakuten`,
          label: formatYoonVoicedRowLabel(row, 'handakuten', t)
        });
      }

      return options;
    })
  ];
}

export function resolveExerciseScope(
  overview: ExerciseOverviewScope,
  rowFrom: ExerciseRowScope | '',
  rowTo: ExerciseRowScope | '',
  rowOptions: AlphabetRowOption[] = []
): ExerciseScope {
  if (!rowFrom && !rowTo) {
    return overview;
  }

  if (rowFrom && rowTo) {
    if (rowFrom === rowTo) {
      return rowFrom;
    }

    return buildRowRangeScope(rowFrom, rowTo) ?? rowFrom;
  }

  if (rowFrom) {
    return buildRowRangeScopeToLast(rowFrom, rowOptions) ?? rowFrom;
  }

  if (rowTo) {
    return buildRowRangeScopeFromFirst(rowTo, rowOptions) ?? rowTo;
  }

  return overview;
}

type ParsedRowScope = {
  family: 'seion' | 'yoon';
  index: number;
  variant: 'plain' | 'dakuten' | 'handakuten';
};

function parseRowScope(scope: ExerciseRowScope): ParsedRowScope | null {
  const seionPlain = scope.match(/^row-(\d+)$/);

  if (seionPlain) {
    return { family: 'seion', index: Number(seionPlain[1]), variant: 'plain' };
  }

  const seionVoiced = scope.match(/^row-(\d+)-(dakuten|handakuten)$/);

  if (seionVoiced) {
    return {
      family: 'seion',
      index: Number(seionVoiced[1]),
      variant: seionVoiced[2] as 'dakuten' | 'handakuten'
    };
  }

  const yoonPlain = scope.match(/^yoon-row-(\d+)$/);

  if (yoonPlain) {
    return { family: 'yoon', index: Number(yoonPlain[1]), variant: 'plain' };
  }

  const yoonVoiced = scope.match(/^yoon-row-(\d+)-(dakuten|handakuten)$/);

  if (yoonVoiced) {
    return {
      family: 'yoon',
      index: Number(yoonVoiced[1]),
      variant: yoonVoiced[2] as 'dakuten' | 'handakuten'
    };
  }

  return null;
}

function formatRowRangeScope(
  family: ParsedRowScope['family'],
  start: number,
  end: number,
  variant: ParsedRowScope['variant']
): ExerciseScope {
  const suffix = variant === 'plain' ? '' : `-${variant}`;

  if (family === 'seion') {
    return `row-range-${start}-${end}${suffix}` as ExerciseScope;
  }

  return `yoon-row-range-${start}-${end}${suffix}` as ExerciseScope;
}

export function buildRowRangeScope(
  from: ExerciseRowScope,
  to: ExerciseRowScope
): ExerciseScope | null {
  const fromParsed = parseRowScope(from);
  const toParsed = parseRowScope(to);

  if (!fromParsed || !toParsed) {
    return null;
  }

  if (fromParsed.family !== toParsed.family || fromParsed.variant !== toParsed.variant) {
    return null;
  }

  const start = Math.min(fromParsed.index, toParsed.index);
  const end = Math.max(fromParsed.index, toParsed.index);

  return formatRowRangeScope(fromParsed.family, start, end, fromParsed.variant);
}

export function buildRowRangeScopeToLast(
  from: ExerciseRowScope,
  options: AlphabetRowOption[]
): ExerciseScope | null {
  const fromParsed = parseRowScope(from);

  if (!fromParsed) {
    return null;
  }

  const sameFamily = options
    .map((option) => parseRowScope(option.value as ExerciseRowScope))
    .filter(
      (parsed): parsed is ParsedRowScope =>
        parsed !== null &&
        parsed.family === fromParsed.family &&
        parsed.variant === fromParsed.variant
    );

  if (sameFamily.length === 0) {
    return from;
  }

  const end = Math.max(...sameFamily.map((parsed) => parsed.index));

  return formatRowRangeScope(fromParsed.family, fromParsed.index, end, fromParsed.variant);
}

export function buildRowRangeScopeFromFirst(
  to: ExerciseRowScope,
  options: AlphabetRowOption[]
): ExerciseScope | null {
  const toParsed = parseRowScope(to);

  if (!toParsed) {
    return null;
  }

  const sameFamily = options
    .map((option) => parseRowScope(option.value as ExerciseRowScope))
    .filter(
      (parsed): parsed is ParsedRowScope =>
        parsed !== null && parsed.family === toParsed.family && parsed.variant === toParsed.variant
    );

  if (sameFamily.length === 0) {
    return to;
  }

  const start = Math.min(...sameFamily.map((parsed) => parsed.index));

  return formatRowRangeScope(toParsed.family, start, toParsed.index, toParsed.variant);
}

export function getExerciseRowScopeGroup(scope: ExerciseScope, t: TranslateFn) {
  return scope.startsWith('yoon-row-') ? t('exercise.groupYoonRows') : t('exercise.groupSeionRows');
}

export function getExerciseRowScopeOptionsForOverview(
  overview: ExerciseOverviewScope,
  t: TranslateFn
): AlphabetRowOption[] {
  const exerciseRowScopeOptions = getExerciseRowScopeOptions(t);

  switch (overview) {
    case 'all':
      return exerciseRowScopeOptions;
    case 'seion':
      return exerciseRowScopeOptions.filter((option) => /^row-\d+$/.test(option.value));
    case 'dakuten':
      return exerciseRowScopeOptions.filter((option) => /^row-\d+-dakuten$/.test(option.value));
    case 'handakuten':
      return exerciseRowScopeOptions.filter((option) => /^row-\d+-handakuten$/.test(option.value));
    case 'yoon':
      return exerciseRowScopeOptions.filter((option) => option.value.startsWith('yoon-row-'));
    default:
      return [];
  }
}

function getRowRangeItems(
  rows: AlphabetChartRow[],
  scope: ExerciseScope,
  prefix: 'row-range' | 'yoon-row-range'
): AlphabetCell[] {
  const rangeMatch = scope.match(new RegExp(`^${prefix}-(\\d+)-(\\d+)(?:-(dakuten|handakuten))?$`));

  if (!rangeMatch) {
    return [];
  }

  const start = Number(rangeMatch[1]);
  const end = Number(rangeMatch[2]);
  const variant = rangeMatch[3];
  const rowPrefix = prefix === 'row-range' ? 'row' : 'yoon-row';
  const items: AlphabetCell[] = [];

  for (let index = start; index <= end; index += 1) {
    const rowScope = variant
      ? (`${rowPrefix}-${index}-${variant}` as ExerciseScope)
      : (`${rowPrefix}-${index}` as ExerciseScope);

    items.push(
      ...(prefix === 'row-range'
        ? getRowScopeItems(rows, rowScope)
        : getYoonRowScopeItems(rows, rowScope))
    );
  }

  return items;
}

function getRowScopeItems(rows: AlphabetChartRow[], scope: ExerciseScope): AlphabetCell[] {
  const rowScopeMatch = scope.match(/^row-(\d+)(?:-(dakuten|handakuten))?$/);

  if (!rowScopeMatch) {
    return [];
  }

  const rowIndex = Number(rowScopeMatch[1]);
  const variant = rowScopeMatch[2];
  const row = rows[rowIndex];

  if (!row) {
    return [];
  }

  if (!variant) {
    return flattenSection([row], 'seion');
  }

  if (variant === 'dakuten' || variant === 'handakuten') {
    return flattenSection([row], variant);
  }

  return [];
}

function getYoonRowScopeItems(rows: AlphabetChartRow[], scope: ExerciseScope): AlphabetCell[] {
  const rowScopeMatch = scope.match(/^yoon-row-(\d+)(?:-(dakuten|handakuten))?$/);

  if (!rowScopeMatch) {
    return [];
  }

  const rowIndex = Number(rowScopeMatch[1]);
  const variant = rowScopeMatch[2];
  const row = rows[rowIndex];

  if (!row) {
    return [];
  }

  if (!variant) {
    return flattenSection([row], 'seion');
  }

  if (variant === 'dakuten' || variant === 'handakuten') {
    return flattenSection([row], variant);
  }

  return [];
}

export function getAlphabetItems(
  script: 'hiragana' | 'katakana',
  scope: ExerciseScope = 'all'
): AlphabetCell[] {
  const rows = getChartRows(script);
  const yoonRows = getYoonChartRows(script);

  if (scope === 'all') {
    return flattenAllChartRows(script);
  }

  if (scope === 'seion' || scope === 'dakuten' || scope === 'handakuten') {
    return flattenSection(rows, scope);
  }

  if (scope === 'yoon') {
    return flattenChartRows(yoonRows);
  }

  if (scope.startsWith('yoon-row-range-')) {
    return getRowRangeItems(yoonRows, scope, 'yoon-row-range');
  }

  if (scope.startsWith('yoon-row-')) {
    return getYoonRowScopeItems(yoonRows, scope);
  }

  if (scope.startsWith('row-range-')) {
    return getRowRangeItems(rows, scope, 'row-range');
  }

  return getRowScopeItems(rows, scope);
}
