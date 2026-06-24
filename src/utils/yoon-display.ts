const YOON_SUFFIX_CHARS = {
  ya: { hiragana: 'ゃ', katakana: 'ャ' },
  yu: { hiragana: 'ゅ', katakana: 'ュ' },
  yo: { hiragana: 'ょ', katakana: 'ョ' }
} as const;

type YoonSuffix = keyof typeof YOON_SUFFIX_CHARS;

// Romaji ending varies: kya vs sha vs ja — map each yoon syllable explicitly.
const YOON_ROMAJI_PARTS: Record<string, { baseRomaji: string; suffix: YoonSuffix }> = {
  kya: { baseRomaji: 'ki', suffix: 'ya' },
  kyu: { baseRomaji: 'ki', suffix: 'yu' },
  kyo: { baseRomaji: 'ki', suffix: 'yo' },
  sha: { baseRomaji: 'shi', suffix: 'ya' },
  shu: { baseRomaji: 'shi', suffix: 'yu' },
  sho: { baseRomaji: 'shi', suffix: 'yo' },
  cha: { baseRomaji: 'chi', suffix: 'ya' },
  chu: { baseRomaji: 'chi', suffix: 'yu' },
  cho: { baseRomaji: 'chi', suffix: 'yo' },
  nya: { baseRomaji: 'ni', suffix: 'ya' },
  nyu: { baseRomaji: 'ni', suffix: 'yu' },
  nyo: { baseRomaji: 'ni', suffix: 'yo' },
  hya: { baseRomaji: 'hi', suffix: 'ya' },
  hyu: { baseRomaji: 'hi', suffix: 'yu' },
  hyo: { baseRomaji: 'hi', suffix: 'yo' },
  mya: { baseRomaji: 'mi', suffix: 'ya' },
  myu: { baseRomaji: 'mi', suffix: 'yu' },
  myo: { baseRomaji: 'mi', suffix: 'yo' },
  rya: { baseRomaji: 'ri', suffix: 'ya' },
  ryu: { baseRomaji: 'ri', suffix: 'yu' },
  ryo: { baseRomaji: 'ri', suffix: 'yo' },
  gya: { baseRomaji: 'gi', suffix: 'ya' },
  gyu: { baseRomaji: 'gi', suffix: 'yu' },
  gyo: { baseRomaji: 'gi', suffix: 'yo' },
  ja: { baseRomaji: 'ji', suffix: 'ya' },
  ju: { baseRomaji: 'ji', suffix: 'yu' },
  jo: { baseRomaji: 'ji', suffix: 'yo' },
  bya: { baseRomaji: 'bi', suffix: 'ya' },
  byu: { baseRomaji: 'bi', suffix: 'yu' },
  byo: { baseRomaji: 'bi', suffix: 'yo' },
  pya: { baseRomaji: 'pi', suffix: 'ya' },
  pyu: { baseRomaji: 'pi', suffix: 'yu' },
  pyo: { baseRomaji: 'pi', suffix: 'yo' }
};

export function getYoonDisplayParts(
  romaji: string,
  script: 'hiragana' | 'katakana',
  romajiToChar: Record<string, string>
) {
  const parts = YOON_ROMAJI_PARTS[romaji];

  if (!parts) {
    return null;
  }

  const base = romajiToChar[parts.baseRomaji];
  const suffix = YOON_SUFFIX_CHARS[parts.suffix][script === 'hiragana' ? 'hiragana' : 'katakana'];

  if (!base) {
    return null;
  }

  return { base, suffix };
}
