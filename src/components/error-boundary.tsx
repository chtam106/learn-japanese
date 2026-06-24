import { Component, type ErrorInfo, type ReactNode } from 'react';
import { Box, Button, Container, Paper, Stack, Typography } from '@mui/material';
import { useTranslation } from '@/i18n/use-translation.ts';
import { elevatedSurfaceSx } from '@/theme/surfaces.ts';

type ErrorBoundaryProps = {
  children: ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

function ErrorFallback({ onReload }: { onReload: () => void }) {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        py: 4,
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={0}
          sx={[
            elevatedSurfaceSx,
            {
              px: { xs: 3, sm: 4 },
              py: { xs: 4, sm: 5 },
              textAlign: 'center',
            },
          ]}
        >
          <Stack spacing={2}>
            <Typography variant="h4" component="h1" sx={{ fontWeight: 600 }}>
              {t('errorBoundary.title')}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {t('errorBoundary.body')}
            </Typography>
            <Box>
              <Button size="large" variant="contained" onClick={onReload}>
                {t('errorBoundary.reload')}
              </Button>
            </Box>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Unhandled app error:', error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return <ErrorFallback onReload={this.handleReload} />;
    }

    return this.props.children;
  }
}
