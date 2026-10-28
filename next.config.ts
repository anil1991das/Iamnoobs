import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  compress: true,
  poweredByHeader: false,
  turbopack: {
    root: process.cwd(),
  },
  // Static export for maximum CDN caching & performance
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
