// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
      // Add a rule to handle .mp4 files
      config.module.rules.push({
        test: /\.mp4$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'videos/' // adjust the output path as needed
          }
        }
      });
  
      // Important: return the modified config
      return config;
    },
    images: {
      domains: ['ipfs.io','mrio.medium.com'],
    },
  };
  
  export default nextConfig;
  