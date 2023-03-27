// https://nextjs.org/docs/basic-features/eslint
module.exports = {
  extends: [
    './common.js',
    'next/core-web-vitals', // Strict: Includes Next.js' base ESLint configuration along with a stricter Core Web Vitals rule-set
  ],
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
  },
};
