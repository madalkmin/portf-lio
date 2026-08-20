import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  turbopack: { root: process.cwd() },
  output: "export",
  trailingSlash: true,
  basePath: isProduction ? "/portf-lio" : "",
  assetPrefix: isProduction ? "/portf-lio/" : undefined,
};
export default nextConfig;
