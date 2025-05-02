import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "**",
      },      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "images.example.io",
        pathname: "/uploads/**",
      }, {
        protocol: "https",
        hostname: "images.example.io",
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
