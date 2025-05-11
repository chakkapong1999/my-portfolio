import type { NextConfig } from "next";

module.exports = {
  output: "standalone",
};

const nextConfig: NextConfig = {
  /* config options here */
  i18n: {
    locales: ['en', 'th'],
    defaultLocale: 'en'
  },
};


export default nextConfig;
