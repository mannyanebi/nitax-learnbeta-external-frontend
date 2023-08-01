/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    HOST: process.env.HOST,
    ENCRYPTION_KEY: process.env.ENCRYPTION_KEY
  }
}

module.exports = nextConfig