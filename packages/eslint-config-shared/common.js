/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  env: {
    browser: true,
    es2020: true,
    jest: true,
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
  ignorePatterns: [
    'dist/**',
    'build/**',
    'coverage/**',
    'node_modules/**',
    '.nx/**',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    // '@typescript-eslint/explicit-module-boundary-types': 'off',
    // '@typescript-eslint/no-non-null-assertion': 'off',
    // '@typescript-eslint/no-floating-promises': 'error',
    // '@typescript-eslint/no-misused-promises': 'error',

    // CODE STYLE
    camelcase: 'off',
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'all',
        singleQuote: true,
      },
    ],
    'max-len': [
      'error',
      { code: 120, ignoreStrings: true, ignoreTemplateLiterals: true },
    ],
    'import/order': ['error', { 'newlines-between': 'always' }],

    // @TYPESCRIPT
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': 'allow-with-description',
        'ts-nocheck': true,
        'ts-check': 'allow-with-description',
        minimumDescriptionLength: 10,
      },
    ],
  },
};
