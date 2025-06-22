/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    unoptimized: true
  },
  trailingSlash: true,
  basePath: '',
  assetPrefix: ''
};

export default nextConfig; 