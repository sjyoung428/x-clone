/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/login",
        destination: "/i/flow/login",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
