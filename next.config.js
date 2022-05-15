/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  eslint: {
    dirs: ['components', 'helpers', 'pages', 'hocs'],
  },
};

module.exports = nextConfig;
