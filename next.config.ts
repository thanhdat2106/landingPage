import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    GOONGMAP_SECRET: process.env.GOONGMAP_SECRET,
  },
  images: {
    domains: ["storage.googleapis.com"], // Thêm hostname vào đây
  },
};

export default nextConfig;
