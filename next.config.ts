import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  experimental: {
    turbopack: {
      root: path.join(__dirname), // make sure it uses the current project root
    },
  },
};

export default nextConfig;
