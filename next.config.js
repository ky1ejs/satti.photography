// This file sets a custom webpack configuration to use your Next.js app
// with Sentry.
// https://nextjs.org/docs/api-reference/next.config.js/introduction
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import { withSentryConfig } from "@sentry/nextjs";

/** @type {import('next').NextConfig} */
const moduleExports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/book",
        permanent: true,
      },
    ];
  },
  sentry: {
    tunnelRoute: "/monitoring",
  },
};

const SentryWebpackPluginOptions = {
  silent: false,
  dryRun: false,
};

// Make sure adding Sentry options is the last code to run before exporting, to
// ensure that your source maps include changes from all other Webpack plugins
module.exports = withSentryConfig(moduleExports, SentryWebpackPluginOptions);
