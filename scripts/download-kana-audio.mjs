import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import ffmpegInstaller from '@ffmpeg-installer/ffmpeg';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, '../public/audio/kana');
const NHK_HLS_BASE = 'https://vod-stream.nhk.jp/nhkworld/lesson/assets/data/hls';
const TAIL_PAD_SEC = 0.35;
const force = process.argv.includes('--force');

const kanaRomajiToAudioIndex = JSON.parse(
  readFileSync(join(__dirname, '../src/constants/kana-audio-map.json'), 'utf8')
);

mkdirSync(outDir, { recursive: true });

for (const [romaji, index] of Object.entries(kanaRomajiToAudioIndex)) {
  const outputPath = join(outDir, `${romaji}.m4a`);

  if (!force && existsSync(outputPath)) {
    console.log(`skip ${romaji}`);
    continue;
  }

  const url = `${NHK_HLS_BASE}/${index}/index.m3u8`;

  console.log(`download ${romaji}...`);

  execFileSync(
    ffmpegInstaller.path,
    [
      '-y',
      '-loglevel',
      'error',
      '-i',
      url,
      '-af',
      `apad=pad_dur=${TAIL_PAD_SEC}`,
      '-c:a',
      'aac',
      '-b:a',
      '96k',
      '-movflags',
      '+faststart',
      outputPath
    ],
    { stdio: 'inherit' }
  );
}

console.log('done');
