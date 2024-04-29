const banReactFCMessage =
  'Read https://medium.com/raccoons-group/why-you-probably-shouldnt-use-react-fc-to-type-your-react-components-37ca1243dd13 for more details';


// https://nextjs.org/docs/basic-features/eslint
/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: [
    './common.js',
    'next/core-web-vitals', // Strict: Includes Next.js' base ESLint configuration along with a stricter Core Web Vitals rule-set
  ],

  settings: {
    react: {
      version: 'detect',
    },

    'testing-library/custom-renders': 'off',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
    project: true,
  },
  plugins: ['react', 'react-hooks', 'testing-library', '@emotion'],
  overrides: [
    // Only uses Testing Library lint rules in test files
    {
      files: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],
      extends: ['plugin:testing-library/react'],
    },
  ],
  rules: {
    // NEXT
    '@next/next/no-html-link-for-pages': 'off',

    // REACT
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-key': 'off',

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
  }
};
