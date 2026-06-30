import path from 'node:path';
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { sentryVitePlugin } from '@sentry/vite-plugin';

// https://vite.dev/config/ and https://vitest.dev/config/
export default defineConfig({
  base: process.env.VITE_BASE_PATH ?? '/',
  build: {
    sourcemap: true
  },
  plugins: [
    react(),
    sentryVitePlugin({
      org: 'cht',
      project: 'nihongoes',
      // Auth token read from SENTRY_AUTH_TOKEN env var (set in CI / .env.local)
      authToken: process.env.SENTRY_AUTH_TOKEN,
      // Upload source maps only on production builds; delete them from dist after upload
      sourcemaps: {
        filesToDeleteAfterUpload: ['./dist/**/*.map']
      },
      // Only run when building for production (not during `vite dev` or Vitest)
      disable: process.env.NODE_ENV !== 'production'
    })
  ],
  server: {
    // `pnpm dev` opens a browser tab automatically and exposes the server on
    // the local network (so it is reachable from other devices / phones).
    open: true,
    host: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    // MUI ships some directory-style ESM imports (e.g. react-transition-group)
    // that Vitest's native resolver chokes on; inline them so Vite transforms them.
    server: {
      deps: {
        inline: [/@mui\//, 'react-transition-group']
      }
    },
    // Unit/component tests live next to the code as *.test.ts(x); the Playwright
    // browser tests in e2e/ run with their own runner and must be excluded here.
    include: ['src/**/*.test.{ts,tsx}'],
    exclude: ['node_modules', 'dist', 'e2e'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      reportsDirectory: './coverage/unit',
      include: ['src/**/*.{ts,tsx}'],
      exclude: [
        'src/**/*.test.{ts,tsx}',
        'src/test/**',
        'src/**/*.d.ts',
        'src/main.tsx',
        'src/vite-env.d.ts'
      ]
    }
  }
});
