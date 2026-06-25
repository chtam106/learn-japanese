import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import storybook from 'eslint-plugin-storybook';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores(['dist', 'node_modules', 'storybook-static']),
  js.configs.recommended,
  ...tseslint.configs.recommended,
  reactHooks.configs.flat.recommended,
  reactRefresh.configs.vite,
  // Runs Prettier as an ESLint rule (`prettier/prettier`) and turns off rules
  // that conflict with Prettier - so formatting issues surface as lint errors.
  eslintPluginPrettierRecommended,
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      '@stylistic': stylistic
    },
    languageOptions: {
      ecmaVersion: 'latest',
      globals: globals.browser
    },
    rules: {
      semi: ['error', 'always'],
      'react-hooks/set-state-in-effect': 'error',
      // No parent-relative imports: use the @/ alias for cross-folder imports;
      // only same-folder './' (and downward) relative imports are allowed.
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['../*', '../**'],
              message:
                'Avoid parent-relative imports (..). Use the @/ alias instead; only same-folder ./ imports are allowed.'
            }
          ]
        }
      ],
      '@stylistic/member-delimiter-style': [
        'error',
        {
          multiline: { delimiter: 'semi', requireLast: true },
          singleline: { delimiter: 'semi', requireLast: false }
        }
      ]
    }
  },
  {
    files: ['scripts/**/*.mjs'],
    languageOptions: {
      globals: globals.node
    },
    rules: {
      semi: ['error', 'always']
    }
  },
  ...storybook.configs['flat/recommended']
]);
