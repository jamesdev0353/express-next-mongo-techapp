/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    WEATHER_APPID: process.env.WEATHER_APPID,
    HOSTNAME: process.env.HOSTNAME,
  },
};

module.exports = nextConfig
