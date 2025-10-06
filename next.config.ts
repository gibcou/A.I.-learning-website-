import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/A.I.-learning-website-',
  assetPrefix: '/A.I.-learning-website-/',
  images: {
    unoptimized: true,
  },
  distDir: 'out',
};

export default nextConfig;
