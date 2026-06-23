import { Link as RouterLink } from 'react-router-dom'
import { Link, List, ListItem, Paper, Typography } from '@mui/material'
import { PageContainer } from '@/components/page-container.tsx'
import { routes } from '@/constants/routes.ts'
import { useTranslation } from '@/i18n/use-translation.ts'
import { elevatedSurfaceSx } from '@/theme/surfaces.ts'

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
    <PageContainer>
      <Typography variant="h4" component="h1" gutterBottom>
        {t('alphabet.title')}
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        {t('alphabet.subtitle')}
      </Typography>

      <Paper elevation={0} sx={elevatedSurfaceSx}>
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
    </PageContainer>
  )
}

export default AlphabetPage
