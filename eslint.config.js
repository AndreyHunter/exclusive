import js from '@eslint/js';
import globals from 'globals';
import eslintReact from 'eslint-plugin-react';
import eslintReactHooks from 'eslint-plugin-react-hooks';
import eslintReactRefresh from 'eslint-plugin-react-refresh';
import prettierPlugin from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginImport from 'eslint-plugin-import';
import eslintPluginImportHelpers from 'eslint-plugin-import-helpers';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
    js.configs.recommended,
    {
        ignores: ['dist', 'node_modules', 'coverage', 'eslint.config.js'],
        files: ['**/*.{js,jsx,ts,tsx}'],
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globals.es2021,
            },
            parserOptions: eslintReact.configs.recommended.parserOptions,
        },
        settings: {
            react: {
                version: 'detect',
            },
            'import/resolver': {
                node: {
                    extensions: ['.js', '.jsx', '.ts', '.tsx'],
                },
            },
        },
        plugins: {
            react: eslintReact,
            'react-hooks': eslintReactHooks,
            'react-refresh': eslintReactRefresh,
            prettier: prettierPlugin,
            import: eslintPluginImport,
            'import-helpers': eslintPluginImportHelpers,
        },
        rules: {
            ...eslintConfigPrettier.rules,
            'no-console': 'warn',
            'no-debugger': 'error',
            'no-undef': 'error',
            'no-extra-semi': 'error',
            'no-empty': ['error', { allowEmptyCatch: true }],
            'no-unreachable': 'error',
            'prefer-const': 'error',
            'no-unused-vars': 'off',

            // Code style
            semi: ['error', 'always'],
            indent: ['error', 4],
            quotes: ['error', 'single'],
            'comma-dangle': ['error', 'always-multiline'],
        },
    },
    {
        rules: {
            // imports
            'import/no-empty-named-blocks': 'error',
            'import/named': 'error',
            'import/no-cycle': 'error',
            'import/no-self-import': 'error',
            'import/first': 'error',
            'import/no-duplicates': 'error',
            'import/exports-last': 'error',
            'import-helpers/order-imports': [
                'warn',
                {
                    newlinesBetween: 'always',
                    groups: [
                        '/^react/',
                        'module',
                        '/^@hooks/',
                        '/^@utils/',
                        '/^@constants/',
                        '/^@components/',
                        '/^@assets/',
                        ['parent', 'sibling', 'index'],
                        [
                            '/^.*\\.css$/',
                            '/^.*\\.scss$/',
                            '/^.*\\.module\\.css$/',
                            '/^.*\\.module\\.scss$/',
                        ],
                    ],
                    alphabetize: { order: 'asc', ignoreCase: true },
                },
            ],
        },
    },
    {
        rules: {
            // React
            'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
            'react/jsx-curly-brace-presence': ['warn', { props: 'never', children: 'never' }],
            'react/function-component-definition': ['warn', { namedComponents: 'arrow-function' }],
            'react/self-closing-comp': ['error', { component: false, html: false }],
            'max-lines': ['warn', { max: 300 }],
        },
    },
];
