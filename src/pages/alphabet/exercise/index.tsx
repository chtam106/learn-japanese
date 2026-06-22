import { Link as RouterLink } from 'react-router-dom'
import { Container, Link, List, ListItem, Paper, Typography } from '@mui/material'
import { routes } from '@/constants/routes.ts'
import { useTranslation } from '@/i18n/use-translation.ts'

function ExerciseHubPage() {
  const { t } = useTranslation()

  const exerciseLinks = [
    {
      to: routes.alphabet.exercise.romaji,
      title: t('exercise.guessRomaji'),
      description: t('exercise.romajiDescription'),
    },
    {
      to: routes.alphabet.exercise.character,
      title: t('exercise.chooseCharacter'),
      description: t('exercise.characterDescription'),
    },
    {
      to: routes.alphabet.exercise.listen,
      title: t('exercise.listenPickShort'),
      description: t('exercise.listenDescription'),
    },
    {
      to: routes.alphabet.exercise.scriptPair,
      title: t('exercise.scriptPair'),
      description: t('exercise.scriptPairDescription'),
    },
  ]

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        {t('exercise.title')}
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        {t('exercise.hubSubtitle')}
      </Typography>

      <Paper elevation={2}>
        <List disablePadding>
          {exerciseLinks.map((item, index) => (
            <ListItem key={item.to} divider={index < exerciseLinks.length - 1} sx={{ p: 0 }}>
              <Link
                component={RouterLink}
                to={item.to}
                underline="none"
                color="inherit"
                sx={{
                  display: 'block',
                  width: '100%',
                  px: 2,
                  py: 2,
                  '&:hover': { bgcolor: 'action.hover' },
                }}
              >
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </Link>
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  )
}

export default ExerciseHubPage
