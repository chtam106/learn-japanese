import { Component, useState, type ErrorInfo, type ReactNode } from 'react';
import SentimentVeryDissatisfiedOutlinedIcon from '@mui/icons-material/SentimentVeryDissatisfiedOutlined';
import { Box, Button, Collapse, Paper, Stack, Typography } from '@mui/material';
import { useTranslation } from '@/i18n/use-translation.ts';
import { elevatedSurfaceSx, subtleSurfaceSx } from '@/theme/surfaces.ts';

type ErrorBoundaryProps = {
  children: ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
};

function ErrorFallback({
  error,
  errorInfo,
  onReload
}: {
  error: Error | null;
  errorInfo: ErrorInfo | null;
  onReload: () => void;
}) {
  const { t } = useTranslation();
  const [showDetails, setShowDetails] = useState(false);

  const details = [error?.stack ?? error?.message, errorInfo?.componentStack]
    .filter(Boolean)
    .join('\n\n');

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        py: 6,
        px: 2
      }}
    >
      <Box sx={{ width: '100%', maxWidth: 520 }}>
        <Paper
          elevation={0}
          sx={[
            elevatedSurfaceSx,
            { px: { xs: 3, sm: 4 }, py: { xs: 4, sm: 5 }, textAlign: 'center' }
          ]}
        >
          <Stack spacing={2} sx={{ alignItems: 'center' }}>
            <SentimentVeryDissatisfiedOutlinedIcon sx={{ fontSize: 64, color: 'error.main' }} />
            <Typography variant="h4" component="h1" sx={{ fontWeight: 600 }}>
              {t('errorBoundary.title')}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {t('errorBoundary.body')}
            </Typography>
            <Stack
              direction="row"
              spacing={1.5}
              useFlexGap
              sx={{ flexWrap: 'wrap', justifyContent: 'center' }}
            >
              <Button size="large" variant="contained" onClick={onReload}>
                {t('errorBoundary.reload')}
              </Button>
              {details.length > 0 && (
                <Button
                  size="large"
                  variant="outlined"
                  onClick={() => setShowDetails((previous) => !previous)}
                >
                  {showDetails ? t('errorBoundary.hideDetails') : t('errorBoundary.showDetails')}
                </Button>
              )}
            </Stack>
            {details.length > 0 && (
              <Collapse in={showDetails} sx={{ width: '100%' }}>
                <Box
                  component="pre"
                  sx={[
                    subtleSurfaceSx,
                    {
                      mt: 1,
                      p: 2,
                      borderRadius: 2,
                      textAlign: 'left',
                      overflow: 'auto',
                      maxHeight: 280,
                      fontSize: 12,
                      lineHeight: 1.5,
                      whiteSpace: 'pre-wrap',
                      wordBreak: 'break-word',
                      fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace'
                    }
                  ]}
                >
                  {details}
                </Box>
              </Collapse>
            )}
          </Stack>
        </Paper>
      </Box>
    </Box>
  );
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false, error: null, errorInfo: null };

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Unhandled app error:', error, errorInfo);
    this.setState({ errorInfo });
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <ErrorFallback
          error={this.state.error}
          errorInfo={this.state.errorInfo}
          onReload={this.handleReload}
        />
      );
    }

    return this.props.children;
  }
}
