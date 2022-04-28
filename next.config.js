/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    WEATHER_APPID: process.env.WEATHER_APPID,
    // MYSPACEID: process.env.MYSPACEID,
  },
};

module.exports = nextConfig
