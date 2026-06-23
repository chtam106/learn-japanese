import { Box, Container, Typography } from '@mui/material'
import { useTranslation } from '@/i18n/use-translation.ts'

export function SiteFooter() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <Box
      component="footer"
      sx={{
        mt: 'auto',
        py: 3,
        px: 2,
        textAlign: 'center',
        boxShadow: '0 -1px 2px rgba(0, 0, 0, 0.06), 0 -2px 8px rgba(0, 0, 0, 0.04)',
      }}
    >
      <Container maxWidth="md" disableGutters>
        <Typography variant="body2" color="text.secondary">
          {t('footer.vibe')}
        </Typography>
        <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 0.5 }}>
          {t('footer.note', { year })}
        </Typography>
      </Container>
    </Box>
  )
}
