import js from '@eslint/js';
import globals from 'globals';
import eslintReact from 'eslint-plugin-react';
import eslintReactHooks from 'eslint-plugin-react-hooks';
import eslintReactRefresh from 'eslint-plugin-react-refresh';
import prettierPlugin from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
	{
		ignores: ['dist', 'node_modules', 'coverage', 'eslint.config.js'],
	},
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
				...globals.es2021,
			},
			parserOptions: eslintReact.configs.recommended.parserOptions,
		},
	},
	js.configs.recommended,
	{
		plugins: {
			react: eslintReact,
			'react-hooks': eslintReactHooks,
			'react-refresh': eslintReactRefresh,
			prettier: prettierPlugin,
		},
		rules: {
			...eslintConfigPrettier.rules,
			'no-console': 'warn',
			'no-extra-semi': 'error',
			'no-empty': ['error', { allowEmptyCatch: true }],
			'no-unreachable': 'error',
			'prefer-const': 'error',
			'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
			'react/jsx-curly-brace-presence': ['warn', { props: 'never', children: 'never' }],
			'react/function-component-definition': ['warn', { namedComponents: 'arrow-function' }],
			'react/self-closing-comp': ['error', { component: true, html: true }],
			'max-lines': ['warn', { max: 124 }],
			'prettier/prettier': 'error',
		},
	},
	{
		files: ['**/*.{js,jsx,ts,tsx}'],
	},
];
