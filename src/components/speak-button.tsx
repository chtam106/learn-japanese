import type { MouseEvent } from 'react'
import VolumeUpIcon from '@mui/icons-material/VolumeUpOutlined'
import { IconButton } from '@mui/material'
import { useTranslation } from '@/i18n/use-translation.ts'
import { isSpeechSupported, speakJapanese } from '@/utils/speech.ts'

type SpeakButtonProps = {
  text: string
  size?: 'small' | 'medium'
}

export function SpeakButton({ text, size = 'small' }: SpeakButtonProps) {
  const { t } = useTranslation()

  if (!isSpeechSupported()) {
    return null
  }

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    event.stopPropagation()
    speakJapanese(text)
  }

  return (
    <IconButton
      onClick={handleClick}
      size={size}
      color="primary"
      aria-label={t('common.playAudio')}
    >
      <VolumeUpIcon fontSize="inherit" />
    </IconButton>
  )
}
