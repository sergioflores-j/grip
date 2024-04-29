export default {
  root: true,
  // This tells ESLint to load the config from the package `@grip/eslint-config-shared`
  extends: ['@grip/shared/next'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: __dirname,
      },
    },
  ],
};
