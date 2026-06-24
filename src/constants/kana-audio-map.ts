import kanaRomajiToAudioIndexJson from '@/constants/kana-audio-map.json';

export const kanaRomajiToAudioIndex: Record<string, number> = kanaRomajiToAudioIndexJson;

export function getKanaAudioLocalPath(romaji: string) {
  return `/audio/kana/${romaji}.m4a`;
}
