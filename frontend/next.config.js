/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ["ts", "tsx"],
  images: {
    domains: ["redkite-public.s3.amazonaws.com"]
  }
}

module.exports = nextConfig
