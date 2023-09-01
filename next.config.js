const { withPlausibleProxy } = require('next-plausible');

/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects() {
    return [
      {
        source: '/',
        destination: 'https://nilsw.io',
        permanent: true,
      },
    ];
  },
};

module.exports = withPlausibleProxy()(nextConfig);
