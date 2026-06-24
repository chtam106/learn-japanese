import { getKanaAudioLocalPath, kanaRomajiToAudioIndex } from '@/constants/kana-audio-map.ts';

const WRONG_ANSWER_AUDIO_PATH = '/audio/wrong.m4a';

let audioElement: HTMLAudioElement | null = null;
let wrongAnswerAudio: HTMLAudioElement | null = null;

function getAudioElement() {
  if (!audioElement) {
    audioElement = new Audio();
  }

  return audioElement;
}

function getWrongAnswerAudio() {
  if (!wrongAnswerAudio) {
    wrongAnswerAudio = new Audio(WRONG_ANSWER_AUDIO_PATH);
  }

  return wrongAnswerAudio;
}

function stopWrongAnswerPlayback() {
  const audio = getWrongAnswerAudio();
  audio.pause();
  audio.currentTime = 0;
}

function stopPlayback() {
  const audio = getAudioElement();
  audio.pause();
  audio.removeAttribute('src');
  audio.load();
  stopWrongAnswerPlayback();
}

function speakJapaneseFallback(text: string) {
  if (!('speechSynthesis' in window)) {
    return;
  }

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'ja-JP';
  window.speechSynthesis.speak(utterance);
}

let audioContext: AudioContext | null = null;

function getAudioContext() {
  if (!audioContext) {
    audioContext = new AudioContext();
  }

  return audioContext;
}

function playWrongAnswerSoundFallback() {
  try {
    const context = getAudioContext();

    if (context.state === 'suspended') {
      void context.resume();
    }

    const start = context.currentTime;

    const playPluck = (time: number, frequency: number, duration: number, volume: number) => {
      const oscillator = context.createOscillator();
      const gain = context.createGain();

      oscillator.type = 'triangle';
      oscillator.frequency.setValueAtTime(frequency, time);
      gain.gain.setValueAtTime(volume, time);
      gain.gain.exponentialRampToValueAtTime(0.001, time + duration);
      oscillator.connect(gain);
      gain.connect(context.destination);
      oscillator.start(time);
      oscillator.stop(time + duration + 0.02);
    };

    playPluck(start, 370, 0.13, 0.28);
    playPluck(start + 0.15, 260, 0.22, 0.26);
  } catch {
    // Web Audio unavailable - skip feedback sound
  }
}

export function playWrongAnswerSound() {
  stopPlayback();

  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }

  const audio = getWrongAnswerAudio();
  audio.currentTime = 0;
  void audio.play().catch(() => {
    playWrongAnswerSoundFallback();
  });
}

export function playKanaAudio(romaji: string, char: string) {
  if (!(romaji in kanaRomajiToAudioIndex)) {
    speakJapaneseFallback(char);
    return;
  }

  stopWrongAnswerPlayback();

  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }

  const audio = getAudioElement();

  audio.pause();
  audio.src = getKanaAudioLocalPath(romaji);
  audio.load();

  const play = () => {
    void audio.play().catch(() => {
      speakJapaneseFallback(char);
    });
  };

  if (audio.readyState >= HTMLMediaElement.HAVE_ENOUGH_DATA) {
    play();
    return;
  }

  audio.addEventListener('canplaythrough', play, { once: true });
}
