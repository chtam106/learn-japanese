import type { ReactNode } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { Box, Button, Container, Typography } from '@mui/material'
import { routes } from '@/constants/routes.ts'
import { useTranslation } from '@/i18n/use-translation.ts'

type ExercisePageLayoutProps = {
  title: string
  subtitle: string
  controls: ReactNode
  children: ReactNode
  controlColumns?: number
}

export function ExercisePageLayout({
  title,
  subtitle,
  controls,
  children,
  controlColumns = 3,
}: ExercisePageLayoutProps) {
  const { t } = useTranslation()

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Button
        component={RouterLink}
        to={routes.alphabet.exercise.index}
        startIcon={<ArrowBackIcon />}
        sx={{ mb: 2, ml: -1 }}
      >
        {t('exercise.back')}
      </Button>

      <Typography variant="h4" component="h1" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        {subtitle}
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: '1fr 1fr',
            lg: `repeat(${controlColumns}, 1fr)`,
          },
          gap: 2,
          mb: 4,
        }}
      >
        {controls}
      </Box>

      {children}
    </Container>
  )
}
