import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
   /* config options here */
   output: 'export',
   images: {
      unoptimized: true,
   },
   // base
   basePath: '/qrcode',
   assetPrefix: '/qrcode/',
};

export default nextConfig;
