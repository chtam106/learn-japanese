const VOICE_STORAGE_KEY = 'langwish-voice'
const RATE_STORAGE_KEY = 'langwish-rate'
const DEFAULT_RATE = 0.9

export function isSpeechSupported(): boolean {
  return typeof window !== 'undefined' && 'speechSynthesis' in window
}

export function getJapaneseVoices(): SpeechSynthesisVoice[] {
  if (!isSpeechSupported()) {
    return []
  }

  return window.speechSynthesis
    .getVoices()
    .filter((voice) => voice.lang.toLowerCase().startsWith('ja'))
    .sort((a, b) => a.name.localeCompare(b.name))
}

export function getPreferredVoiceURI(): string | null {
  if (typeof window === 'undefined') {
    return null
  }

  return window.localStorage.getItem(VOICE_STORAGE_KEY)
}

export function setPreferredVoiceURI(voiceURI: string | null): void {
  if (typeof window === 'undefined') {
    return
  }

  if (voiceURI) {
    window.localStorage.setItem(VOICE_STORAGE_KEY, voiceURI)
  } else {
    window.localStorage.removeItem(VOICE_STORAGE_KEY)
  }
}

export function getSpeechRate(): number {
  if (typeof window === 'undefined') {
    return DEFAULT_RATE
  }

  const stored = Number(window.localStorage.getItem(RATE_STORAGE_KEY))

  return Number.isFinite(stored) && stored > 0 ? stored : DEFAULT_RATE
}

export function setSpeechRate(rate: number): void {
  if (typeof window === 'undefined') {
    return
  }

  window.localStorage.setItem(RATE_STORAGE_KEY, String(rate))
}

function resolveVoice(): SpeechSynthesisVoice | undefined {
  const voices = getJapaneseVoices()
  const preferred = getPreferredVoiceURI()

  return (preferred ? voices.find((voice) => voice.voiceURI === preferred) : undefined) ?? voices[0]
}

export function speakJapanese(text: string, rate = getSpeechRate()): void {
  if (!isSpeechSupported()) {
    return
  }

  window.speechSynthesis.cancel()

  const utterance = new SpeechSynthesisUtterance(text)
  utterance.lang = 'ja-JP'
  utterance.rate = rate

  const voice = resolveVoice()

  if (voice) {
    utterance.voice = voice
  }

  window.speechSynthesis.speak(utterance)
}

export function subscribeVoices(callback: () => void): () => void {
  if (!isSpeechSupported()) {
    return () => {}
  }

  window.speechSynthesis.addEventListener('voiceschanged', callback)

  return () => {
    window.speechSynthesis.removeEventListener('voiceschanged', callback)
  }
}

export function cancelSpeech(): void {
  if (isSpeechSupported()) {
    window.speechSynthesis.cancel()
  }
}
