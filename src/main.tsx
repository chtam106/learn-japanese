import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import './index.css';
import App from './app.tsx';
import { LanguageProvider } from '@/i18n/context.tsx';
import { getLocaleFromPathname } from '@/i18n/locale-routing.ts';
import type { TranslationTree } from '@/i18n/translations.ts';
import { appTheme } from '@/theme/app-theme.ts';
import * as Sentry from '@sentry/react';
import { ErrorFallback } from './components/error-fallback/index.tsx';

const routerBasename = import.meta.env.BASE_URL.replace(/\/$/, '');

async function bootstrap() {
  // Derive the locale from the URL so the right strings are ready on first paint.
  const logicalPathname = routerBasename
    ? window.location.pathname.replace(new RegExp(`^${routerBasename}`), '')
    : window.location.pathname;
  const initialLocale = getLocaleFromPathname(logicalPathname || '/');

  let initialViTranslations: TranslationTree | undefined;

  if (initialLocale === 'vi') {
    const { viTranslations } = await import('@/i18n/translations-vi.ts');
    initialViTranslations = viTranslations;
  }

  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <ThemeProvider theme={appTheme}>
        <CssBaseline />
        <Sentry.ErrorBoundary fallback={<ErrorFallback />}>
          <BrowserRouter basename={routerBasename || undefined}>
            <LanguageProvider
              initialTranslations={
                initialViTranslations ? { vi: initialViTranslations } : undefined
              }
            >
              <App />
            </LanguageProvider>
          </BrowserRouter>
        </Sentry.ErrorBoundary>
      </ThemeProvider>
    </StrictMode>
  );
}

void bootstrap();
