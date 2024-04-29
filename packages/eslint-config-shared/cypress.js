/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  env: {
    es2020: true,
    node: true,
  },
  settings: {
    // necessary to make import rules to find files
    'import/resolver': {
      typescript: true,
    },
  },
  extends: [
    'prettier',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    // 'plugin:@typescript-eslint/recommended-requiring-type-checking', // TODO: this is disabled due to perf issues
  ],
  ignorePatterns: ['downloads/**', 'report/**', 'screenshots/**', 'videos/**'],
  overrides: [],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
    project: true,
  },
  rules: {
    camelcase: 'off',
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'all',
        singleQuote: true,
      },
    ],

    // additional rules
    'max-len': [
      'error',
      { code: 120, ignoreStrings: true, ignoreTemplateLiterals: true },
    ],

    'import/order': ['error', { 'newlines-between': 'always' }],
  },
};
