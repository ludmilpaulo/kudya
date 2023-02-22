/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
};

const withVideos = require("next-videos");

const withImages = require("next-images");
module.exports = withImages();

module.exports = withVideos();

module.exports = nextConfig;
