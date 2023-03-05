/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['i.annihil.us', 'legadodamarvel.com.br'],
  },
}

module.exports = nextConfig
