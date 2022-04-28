/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    WEATHER_APPID: process.env.WEATHER_APPID,
    HOSTNAME: process.env.HOSTNAME,
    GOOGLE_MAPS_APIKEY: process.env.GOOGLE_MAPS_APIKEY,
  },
};

module.exports = nextConfig
