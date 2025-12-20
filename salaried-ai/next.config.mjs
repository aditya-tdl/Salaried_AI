const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isProd ? "/SalariedAI" : undefined,
  assetPrefix: isProd ? "/SalariedAI/" : undefined,
};

export default nextConfig;
