import { Link as RouterLink } from 'react-router-dom'
import { Box, Stack, Typography } from '@mui/material'
import { alpha } from '@mui/material/styles'
import { routes } from '@/constants/routes.ts'
import { SITE_NAME } from '@/constants/site.ts'
import { useTranslation } from '@/i18n/use-translation.ts'

type BrandProps = {
  showTagline?: boolean
  showLogo?: boolean
}

export function Brand({ showTagline = false, showLogo = true }: BrandProps) {
  const { t } = useTranslation()

  return (
    <Stack
      component={RouterLink}
      to={routes.home}
      direction="row"
      spacing={1.25}
      sx={{
        alignItems: 'center',
        minWidth: 0,
        textDecoration: 'none',
        color: 'inherit',
      }}
    >
      {showLogo ? (
        <Box
          aria-hidden
          sx={{
            width: 38,
            height: 38,
            borderRadius: 2,
            flexShrink: 0,
            display: 'grid',
            placeItems: 'center',
            color: 'primary.main',
            backgroundColor: (theme) =>
              alpha(theme.palette.primary.main, theme.palette.mode === 'light' ? 0.12 : 0.24),
          }}
        >
          <Typography
            component="span"
            lang="ja"
            sx={{ fontSize: 22, fontWeight: 700, lineHeight: 1 }}
          >
            あ
          </Typography>
        </Box>
      ) : null}

      <Box sx={{ minWidth: 0 }}>
        <Typography
          component="span"
          sx={{
            display: 'block',
            fontWeight: 700,
            fontSize: '1.2rem',
            lineHeight: 1.1,
            letterSpacing: '-0.01em',
          }}
        >
          {SITE_NAME}
        </Typography>
        {showTagline ? (
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ display: 'block', lineHeight: 1.2 }}
            noWrap
          >
            {t('app.tagline')}
          </Typography>
        ) : null}
      </Box>
    </Stack>
  )
}
