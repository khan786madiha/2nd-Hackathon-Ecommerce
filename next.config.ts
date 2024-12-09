// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

// const withImages = require('next-images');

// module.exports = withImages({
//   webpack(config, options) {
//     config.module.rules.push({
//       test: /\.(png|jpe?g|gif|svg)$/i,
//       use: [
//         {
//           loader: 'file-loader',
//           options: {
//             name: '[path][name].[ext]',
//             emitFile: false, // This will ignore the images during the build process
//           },
//         },
//       ],
//     });

//     return config;
//   },
// });

// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   webpack: (config, { isServer }) => {
//     // Fixes npm packages that depend on `fs` module
//     if (!isServer) {
//       config.resolve.fallback.fs = false;
//     }

//     config.module.rules.push({
//       test: /\.(png|jpe?g|gif|svg)$/i,
//       use: [
//         {
//           loader: 'file-loader',
//           options: {
//             name: '[path][name].[ext]',
//             publicPath: '/_next/static/images/',
//             outputPath: 'static/images/',
//             esModule: false,
//             emitFile: false, // This will ignore the images during the build process
//           },
//         },
//       ],
//     });

//     return config;
//   },
//   images: {
//     domains: ['localhost'], // Add your domain here
//   },
// };

// export default nextConfig;
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    // Fix fs module error
    if (!isServer) {
      config.resolve.fallback = { fs: false };
    }

    return config;
  },
  images: {
    domains: ["localhost"], // Add additional domains if needed
    formats: ["image/avif", "image/webp"], // Use optimized formats
  },
};

export default nextConfig;
