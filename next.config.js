/** @type {import('next').NextConfig} */
const nextConfig = {
  //  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname:"**",
        pathname: "**",
      }
    ],
  },
  env: {
    BASE_URL: "http://localhost:3445/api/",
  },
};
module.exports = nextConfig;