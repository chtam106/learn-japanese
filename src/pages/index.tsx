import { Link as RouterLink } from 'react-router-dom'
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined'
import QuizOutlinedIcon from '@mui/icons-material/QuizOutlined'
import VolumeUpOutlinedIcon from '@mui/icons-material/VolumeUpOutlined'
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Container,
  Stack,
  Typography,
} from '@mui/material'
import { DAKUTEN_MARK, HANDAKUTEN_MARK } from '@/constants/kana-terminology.ts'
import { routes } from '@/constants/routes.ts'
import { useTranslation } from '@/i18n/use-translation.ts'

function HomePage() {
  const { t } = useTranslation()

  const studyCards = [
    {
      to: routes.alphabet.hiragana,
      title: t('nav.hiragana'),
      symbol: 'あ',
      description: t('home.hiraganaDescription'),
    },
    {
      to: routes.alphabet.katakana,
      title: t('nav.katakana'),
      symbol: 'ア',
      description: t('home.katakanaDescription'),
    },
    {
      to: routes.alphabet.exercise.index,
      title: t('nav.exercise'),
      icon: QuizOutlinedIcon,
      description: t('home.exerciseDescription'),
    },
  ]

  return (
    <Container maxWidth="md" sx={{ py: { xs: 3, md: 5 } }}>
      <Stack spacing={4}>
        <Box>
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 600 }}>
            {t('app.title')}
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 400, mb: 2 }}>
            {t('home.subtitle')}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 560 }}>
            {t('home.intro')}
          </Typography>
        </Box>

        <Stack direction="row" spacing={1.5} useFlexGap sx={{ flexWrap: 'wrap' }}>
          <Button
            component={RouterLink}
            to={routes.alphabet.hiragana}
            variant="contained"
            size="large"
          >
            {t('home.startHiragana')}
          </Button>
          <Button
            component={RouterLink}
            to={routes.alphabet.exercise.index}
            variant="outlined"
            size="large"
          >
            {t('home.jumpExercise')}
          </Button>
        </Stack>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
            gap: 2,
          }}
        >
          {studyCards.map((card) => {
            const Icon = card.icon

            return (
              <Card key={card.to} variant="outlined" sx={{ height: '100%' }}>
                <CardActionArea
                  component={RouterLink}
                  to={card.to}
                  sx={{ height: '100%', alignItems: 'stretch' }}
                >
                  <CardContent>
                    <Typography
                      variant="h4"
                      component="span"
                      sx={{ display: 'block', mb: 1, lineHeight: 1 }}
                    >
                      {card.symbol ?? (Icon ? <Icon fontSize="inherit" /> : null)}
                    </Typography>
                    <Typography variant="h6" component="h2" gutterBottom>
                      {card.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {card.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            )
          })}
        </Box>

        <Stack spacing={1.5}>
          <Typography variant="subtitle1" component="h2" sx={{ fontWeight: 600 }}>
            {t('home.featuresTitle')}
          </Typography>
          <Stack spacing={1}>
            <Stack direction="row" spacing={1.5} sx={{ alignItems: 'flex-start' }}>
              <MenuBookOutlinedIcon fontSize="small" sx={{ mt: 0.3, color: 'text.secondary' }} />
              <Typography variant="body2" color="text.secondary">
                {t('home.featureCharts', { dakuten: DAKUTEN_MARK, handakuten: HANDAKUTEN_MARK })}
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1.5} sx={{ alignItems: 'flex-start' }}>
              <VolumeUpOutlinedIcon fontSize="small" sx={{ mt: 0.3, color: 'text.secondary' }} />
              <Typography variant="body2" color="text.secondary">
                {t('home.featureAudio')}
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1.5} sx={{ alignItems: 'flex-start' }}>
              <QuizOutlinedIcon fontSize="small" sx={{ mt: 0.3, color: 'text.secondary' }} />
              <Typography variant="body2" color="text.secondary">
                {t('home.featureQuiz')}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  )
}

export default HomePage
