/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static export (next export)
  images: {
    unoptimized: true, // Disables Next.js image optimization for static export
  },
};

export default nextConfig;
