const banReactFCMessage =
  'Read https://medium.com/raccoons-group/why-you-probably-shouldnt-use-react-fc-to-type-your-react-components-37ca1243dd13 for more details';

module.exports = {
  env: {
    browser: true,
    es2020: true,
    jest: true,
    node: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
    // necessary to make import rules to find files
    'import/resolver': {
      typescript: true,
    },

    'testing-library/custom-renders': 'off',
  },
  extends: [
    'turbo',
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
    '.turbo/**',
  ],
  overrides: [
    // Only uses Testing Library lint rules in test files
    {
      files: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],
      extends: ['plugin:testing-library/react'],
    },
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'testing-library', '@emotion'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
    project: true,
  },
  rules: {
    // '@typescript-eslint/explicit-module-boundary-types': 'off',
    // '@typescript-eslint/no-non-null-assertion': 'off',
    // '@typescript-eslint/no-floating-promises': 'error',
    // '@typescript-eslint/no-misused-promises': 'error',

    // REACT
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-key': 'off',

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
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          'React.FC': banReactFCMessage,
          'React.FunctionComponent': banReactFCMessage,
          FC: banReactFCMessage,
          FunctionComponent: banReactFCMessage,
        },
        extendDefaults: true,
      },
    ],

    // @EMOTION
    '@emotion/jsx-import': 'off',
    '@emotion/no-vanilla': 'error',
    '@emotion/import-from-emotion': 'error',
    '@emotion/styled-import': 'error',
    '@emotion/syntax-preference': [2, 'object'],
  },
};
