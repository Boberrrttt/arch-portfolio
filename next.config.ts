// next.config.js
const nextConfig = {
  webpack: (config: any, { isServer }: any) => {
    if (!isServer) {
      // Ignore 'canvas' module in browser
      config.resolve.fallback = {
        ...config.resolve.fallback,
        canvas: false,
      };
    }

    return config;
  },
};

module.exports = nextConfig;
