module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `@grip/eslint-config-shared`
  extends: ['@grip/shared/next'],
  settings: {
    next: {
      rootDir: ['apps/*/'],
    },
  },
};
