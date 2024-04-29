// @ts-check: https://nextjs.org/docs/basic-features/typescript#type-checking-nextconfigjs

/**
 * @type {import('next').NextConfig}
 **/
export default {
  reactStrictMode: true,
  transpilePackages: ['@grip/ui'],
  compiler: {
    // This is required so Emotion handles the JSX compilation. (For css prop)
    // See example: https://github.com/vercel/next.js/blob/canary/examples/with-emotion-swc/next.config.js
    emotion: true,
  },
  webpack: (config) => {
    // Load SVGs using SVGR
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg'),
    );

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: /url/ }, // exclude if *.svg?url
        use: ['@svgr/webpack'],
      },
    );

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
};
