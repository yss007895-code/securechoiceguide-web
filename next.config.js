/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'docs',
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: '',
  assetPrefix: '',
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
};
module.exports = nextConfig;
