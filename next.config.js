/** @type {import('next').NextConfig} */
/*const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}*/

module.exports = {
  async rewrites() {
      return [
        {
          source: '/api',
          destination: 'https://doar-computador-api.herokuapp.com/',
        },
      ]
    },
};


