import { Box, Typography } from '@mui/material'

type YoonGlyphProps = {
  base: string
  suffix: string
  compact?: boolean
  large?: boolean
}

export function YoonGlyph({ base, suffix, compact = false, large = false }: YoonGlyphProps) {
  const baseVariant = large ? 'h2' : compact ? 'h6' : 'h4'
  const suffixSize = large ? '1.35rem' : compact ? '0.55rem' : '0.95rem'
  const suffixMb = large ? '0.18em' : compact ? '0.08em' : '0.12em'

  return (
    <Box
      component="span"
      sx={{
        display: 'inline-flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        lineHeight: 1,
      }}
    >
      <Typography component="span" variant={baseVariant} sx={{ lineHeight: 1, fontWeight: 400 }}>
        {base}
      </Typography>
      <Typography
        component="span"
        sx={{
          fontSize: suffixSize,
          lineHeight: 1,
          mb: suffixMb,
          ml: '-0.06em',
        }}
      >
        {suffix}
      </Typography>
    </Box>
  )
}
