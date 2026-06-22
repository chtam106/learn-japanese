import { Link as RouterLink } from 'react-router-dom'
import { Container, Link, List, ListItem, Paper, Typography } from '@mui/material'
import { routes } from '@/constants/routes.ts'
import { useTranslation } from '@/i18n/use-translation.ts'

function AlphabetPage() {
  const { t } = useTranslation()

  const alphabetLinks = [
    {
      to: routes.alphabet.hiragana,
      title: t('nav.hiragana'),
      description: t('alphabet.hiraganaDescription'),
    },
    {
      to: routes.alphabet.katakana,
      title: t('nav.katakana'),
      description: t('alphabet.katakanaDescription'),
    },
    {
      to: routes.alphabet.exercise.index,
      title: t('nav.exercise'),
      description: t('alphabet.exerciseDescription'),
    },
  ]

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        {t('alphabet.title')}
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        {t('alphabet.subtitle')}
      </Typography>

      <Paper elevation={2}>
        <List disablePadding>
          {alphabetLinks.map((item, index) => (
            <ListItem key={item.to} divider={index < alphabetLinks.length - 1} sx={{ p: 0 }}>
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

export default AlphabetPage
