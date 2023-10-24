/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'],
  },
  compiler: {
    styledComponents: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [{ loader: '@svgr/webpack', options: { icon: true } }],
    });
    return config;
  },
  devIndicators: {
    buildActivity: false,
  },
};

// const withImages = require('next-images');

// module.exports = withImages({
//   webpack(config, options) {
//     return config;
//   },
// });

module.exports = nextConfig;
