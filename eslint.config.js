import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import importPlugin from 'eslint-plugin-import';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default tseslint.config(
  { ignores: ['dist', 'eslint.config.js'] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      importPlugin.flatConfigs.recommended,
    ],
    files: ['**/*.{js,jsx,ts,tsx,}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2025,
      },
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.eslint.json',
        tsconfigRootDir: __dirname,
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    settings: {
      'import/resolver': {
        typescript: {
          project: './tsconfig.json',
          alwaysTryTypes: true,
        },
        node: true,
      },
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      // prettier
      'prettier/prettier': 'warn',
      // ts rules
      '@typescript-eslint/await-thenable': 'error',
      '@typescript-eslint/consistent-type-imports': 'error',
      // general
      'no-console': 'warn',
      'no-debugger': 'error',
      'no-else-return': 'warn',
      'no-implicit-coercion': 'error',
      // React
      // imports
      'import/order': [
        'warn',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          'newlines-between': 'always',
        },
      ],
      'import/exports-last': 'warn',
      'import/imports-first': 'warn',
      'import/no-cycle': 'error',
      'import/no-self-import': 'error',
      'import/newline-after-import': 'warn',
      'import/imports-first': 'off', // deprecated
      'import/first': 'warn', // instead of import/imports-first
    },
  },
  eslintPluginPrettierRecommended,
);
