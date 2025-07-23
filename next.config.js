/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "export",
  images: {
    unoptimized: true,
  },
  assetPrefix: "",
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|ico)$/i,
      use: [
        {
          loader: "url-loader",
          options: {
            limit: 8192,
            publicPath: "/_next/static/images/",
            outputPath: "static/images/",
            name: "[name].[hash:8].[ext]",
          },
        },
      ],
    });
    return config;
  },
  transpilePackages: ["framer-motion"],
};

module.exports = nextConfig;
