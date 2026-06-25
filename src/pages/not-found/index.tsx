import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import TravelExploreOutlinedIcon from '@mui/icons-material/TravelExploreOutlined';
import { Box, Button, Stack, Typography } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import { Heading } from '@/components/heading';
import { PageContainer } from '@/components/page-container';
import { routes } from '@/constants/routes.ts';
import { useTranslation } from '@/i18n/use-translation.ts';

function NotFoundPage() {
  const { t } = useTranslation();

  return (
    <PageContainer>
      <Stack
        spacing={2.5}
        sx={{
          alignItems: 'center',
          textAlign: 'center',
          maxWidth: 480,
          mx: 'auto',
          py: { xs: 6, md: 10 }
        }}
      >
        <Box
          sx={{
            width: 72,
            height: 72,
            borderRadius: '50%',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'primary.main',
            bgcolor: (theme) => alpha(theme.palette.primary.main, 0.12)
          }}
        >
          <TravelExploreOutlinedIcon sx={{ fontSize: 38 }} />
        </Box>

        <Box>
          <Typography
            component="p"
            sx={{
              color: 'primary.main',
              fontWeight: 800,
              lineHeight: 1,
              letterSpacing: '0.12em',
              fontSize: { xs: '2.5rem', md: '3rem' },
              mb: 1
            }}
          >
            404
          </Typography>
          <Heading component="h1" gutterBottom>
            {t('notFound.title')}
          </Heading>
          <Typography variant="body1" color="text.secondary">
            {t('notFound.body')}
          </Typography>
        </Box>

        <Button
          component={RouterLink}
          to={routes.home}
          variant="contained"
          size="large"
          disableElevation
          startIcon={<HomeOutlinedIcon />}
          sx={{ borderRadius: 2, textTransform: 'none', px: 3 }}
        >
          {t('notFound.backHome')}
        </Button>
      </Stack>
    </PageContainer>
  );
}

export default NotFoundPage;
