import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/student",
        destination: "/",
        permanent: true,
      },
      {
        source: "/vestine",
        destination: "/",
        permanent: true,
      },
      {
        source: "/linkovi",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
