/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["learnbeta.fra1.digitaloceanspaces.com"],
  },
  env: {
    HOST: process.env.HOST,
    ENCRYPTION_KEY: process.env.ENCRYPTION_KEY,
    PAYSTACK_PUBLIC_KEY: process.env.PAYSTACK_PUBLIC_KEY,
  },
};

module.exports = nextConfig;
