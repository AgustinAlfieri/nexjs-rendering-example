import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
};
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'randomuser.me',
        pathname: '/api/**'
      }
    ]
  }
};
export default nextConfig;
