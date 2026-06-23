import type { SxProps } from '@mui/material'
import { alpha, type Theme } from '@mui/material/styles'

const SHADOW = '0 1px 2px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.1)'
const SHADOW_HOVER = '0 6px 16px rgba(0, 0, 0, 0.12)'

/** White surface separated by a soft shadow (Material elevated card). */
export const elevatedSurfaceSx = {
  borderRadius: 2,
  boxShadow: SHADOW,
} satisfies SxProps<Theme>

/** Elevated surface that lifts on hover, for clickable cards. */
export const interactiveSurfaceSx = {
  borderRadius: 2,
  boxShadow: SHADOW,
  transition: 'box-shadow 0.2s ease',
  '&:hover': { boxShadow: SHADOW_HOVER },
} satisfies SxProps<Theme>

/** Neutral tonal fill for secondary, low-emphasis boxes. */
export const subtleSurfaceSx = (theme: Theme) => ({
  borderRadius: 2,
  backgroundColor:
    theme.palette.mode === 'light'
      ? theme.palette.grey[100]
      : alpha(theme.palette.common.white, 0.06),
})

/** Primary-tinted tonal fill for emphasised call-to-action surfaces. */
export const tonalSurfaceSx = (theme: Theme) => ({
  borderRadius: 2,
  backgroundColor: alpha(theme.palette.primary.main, theme.palette.mode === 'light' ? 0.06 : 0.16),
})
