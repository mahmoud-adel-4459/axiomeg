import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  outputFileTracingRoot: path.join(__dirname),
  eslint: {
    dirs: ["app", "components", "layouts", "sections", "lib", "hooks", "utils", "types"],
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      { source: "/blog", destination: "/articles", permanent: false },
      { source: "/news", destination: "/articles", permanent: false },
    ];
  },
};

export default nextConfig;
