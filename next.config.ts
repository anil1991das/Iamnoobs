import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  compress: true,
  poweredByHeader: false,
  // Static export for maximum CDN caching & performance
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
