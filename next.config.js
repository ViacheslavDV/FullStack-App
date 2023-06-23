/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  env: {
    SERVER_URL: process.env.SERVER_URL,
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/music/all",
        permanent: true,
      },
      {
        source: "/uploads/:name*",
        destination: `http://localhost:4200/uploads/:name*`,
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
