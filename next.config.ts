import type { NextConfig } from "next";

const repo = "Klodjan_Tahiri_Website";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
};

export default nextConfig;
