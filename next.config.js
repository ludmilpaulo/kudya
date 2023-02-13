/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const withVideos = require("next-videos");

const withImages = require("next-images");
module.exports = withImages();

module.exports = withVideos();

module.exports = nextConfig;
