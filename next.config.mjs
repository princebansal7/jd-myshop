/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  // Set NEXT_PUBLIC_BASE_PATH in GitHub repo vars if deploying to a sub-path
  // e.g. for username.github.io/shop, set NEXT_PUBLIC_BASE_PATH=/shop
  // Leave empty for a custom domain or user/org page (username.github.io)
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
