import { Component, useState, type ErrorInfo, type ReactNode } from 'react';
import SentimentVeryDissatisfiedOutlinedIcon from '@mui/icons-material/SentimentVeryDissatisfiedOutlined';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  Typography
} from '@mui/material';
import { alpha } from '@mui/material/styles';
import { useTranslation } from '@/i18n/use-translation.ts';
import { subtleSurfaceSx } from '@/theme/surfaces.ts';

type ErrorBoundaryProps = {
  children: ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
};

type ErrorFallbackProps = {
  error: Error | null;
  errorInfo: ErrorInfo | null;
  onReload: () => void;
};

function ErrorFallback({ error, errorInfo, onReload }: ErrorFallbackProps) {
  const { t } = useTranslation();
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const details = [error?.stack ?? error?.message, errorInfo?.componentStack]
    .filter(Boolean)
    .join('\n\n');

  const closeDetails = () => {
    setDetailsOpen(false);
    setCopied(false);
  };

  const handleCopy = () => {
    void navigator.clipboard?.writeText(details).then(() => {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    });
  };

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
      <Stack
        spacing={2.5}
        sx={{ alignItems: 'center', textAlign: 'center', width: '100%', maxWidth: 520, mx: 'auto' }}
      >
        <Box
          sx={{
            width: 72,
            height: 72,
            borderRadius: '50%',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'error.main',
            bgcolor: (theme) => alpha(theme.palette.error.main, 0.12)
          }}
        >
          <SentimentVeryDissatisfiedOutlinedIcon sx={{ fontSize: 38 }} />
        </Box>

        <Box>
          <Typography variant="h4" component="h1" sx={{ fontWeight: 600, mb: 1 }}>
            {t('errorBoundary.title')}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {t('errorBoundary.body')}
          </Typography>
        </Box>

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
            <Button size="large" variant="outlined" onClick={() => setDetailsOpen(true)}>
              {t('errorBoundary.showDetails')}
            </Button>
          )}
        </Stack>
      </Stack>

      {details.length > 0 && (
        <Dialog open={detailsOpen} onClose={closeDetails} maxWidth="md" fullWidth>
          <DialogTitle>{t('errorBoundary.detailsTitle')}</DialogTitle>
          <DialogContent dividers>
            <Box
              component="pre"
              sx={[
                subtleSurfaceSx,
                {
                  m: 0,
                  p: 2,
                  borderRadius: 2,
                  textAlign: 'left',
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
          </DialogContent>
          <DialogActions sx={{ px: 3, pb: 2 }}>
            <Button
              onClick={handleCopy}
              startIcon={copied ? <CheckOutlinedIcon /> : <ContentCopyOutlinedIcon />}
            >
              {copied ? t('errorBoundary.copied') : t('errorBoundary.copy')}
            </Button>
            <Button onClick={closeDetails} variant="contained">
              {t('errorBoundary.close')}
            </Button>
          </DialogActions>
        </Dialog>
      )}
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
