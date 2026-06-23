import { useEffect, useState } from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import RecordVoiceOverOutlinedIcon from '@mui/icons-material/RecordVoiceOverOutlined'
import {
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Popover,
  Select,
  Stack,
  Typography,
} from '@mui/material'
import { useTranslation } from '@/i18n/use-translation.ts'
import {
  cancelSpeech,
  getJapaneseVoices,
  getPreferredVoiceURI,
  getSpeechRate,
  isSpeechSupported,
  setPreferredVoiceURI,
  setSpeechRate,
  speakJapanese,
  subscribeVoices,
} from '@/utils/speech.ts'

const SPEED_OPTIONS = [0.6, 0.75, 0.9, 1, 1.15]
const SAMPLE_TEXT = 'こんにちは。はじめまして。'

export function AudioSettings() {
  const { t } = useTranslation()
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>(() => getJapaneseVoices())
  const [voiceURI, setVoiceURI] = useState<string>(() => getPreferredVoiceURI() ?? '')
  const [rate, setRate] = useState<number>(() => getSpeechRate())

  useEffect(() => {
    const unsubscribe = subscribeVoices(() => setVoices(getJapaneseVoices()))
    const timeout = window.setTimeout(() => setVoices(getJapaneseVoices()), 500)

    return () => {
      window.clearTimeout(timeout)
      unsubscribe()
    }
  }, [])

  if (!isSpeechSupported()) {
    return null
  }

  const handleVoiceChange = (uri: string) => {
    setVoiceURI(uri)
    setPreferredVoiceURI(uri || null)
    speakJapanese(SAMPLE_TEXT)
  }

  const handleRateChange = (value: number) => {
    setRate(value)
    setSpeechRate(value)
    speakJapanese(SAMPLE_TEXT, value)
  }

  const selectedVoice = voices.some((voice) => voice.voiceURI === voiceURI) ? voiceURI : ''

  return (
    <>
      <IconButton
        onClick={(event) => setAnchorEl(event.currentTarget)}
        aria-label={t('audio.settings')}
        color="inherit"
      >
        <RecordVoiceOverOutlinedIcon />
      </IconButton>

      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={() => {
          setAnchorEl(null)
          cancelSpeech()
        }}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Stack spacing={2} sx={{ p: 2, width: 260 }}>
          <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
            {t('audio.settings')}
          </Typography>

          <FormControl size="small" fullWidth disabled={voices.length === 0}>
            <InputLabel id="audio-voice-label">{t('audio.voice')}</InputLabel>
            <Select
              labelId="audio-voice-label"
              label={t('audio.voice')}
              value={selectedVoice}
              onChange={(event) => handleVoiceChange(String(event.target.value))}
            >
              <MenuItem value="">{t('audio.auto')}</MenuItem>
              {voices.map((voice) => (
                <MenuItem key={voice.voiceURI} value={voice.voiceURI}>
                  {voice.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl size="small" fullWidth>
            <InputLabel id="audio-speed-label">{t('audio.speed')}</InputLabel>
            <Select
              labelId="audio-speed-label"
              label={t('audio.speed')}
              value={rate}
              onChange={(event) => handleRateChange(Number(event.target.value))}
            >
              {SPEED_OPTIONS.map((speed) => (
                <MenuItem key={speed} value={speed}>
                  {speed}x
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {voices.length === 0 ? (
            <Typography variant="caption" color="text.secondary">
              {t('audio.noVoices')}
            </Typography>
          ) : (
            <Button
              startIcon={<PlayArrowIcon />}
              variant="outlined"
              size="small"
              onClick={() => speakJapanese(SAMPLE_TEXT)}
            >
              {t('audio.test')}
            </Button>
          )}
        </Stack>
      </Popover>
    </>
  )
}
