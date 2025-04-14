import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['dummyimage.com', 'i.pravatar.cc'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dummyimage.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
        pathname: '/**',
      },
    ],
  },
};
export default nextConfig;
