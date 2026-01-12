import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'images.unsplash.com',
      'randomuser.me',
      'i.pinimg.com'
    ],
  },
};

export default nextConfig;
