/** @type {import('next').NextConfig} */
const nextConfig = {
  // Other Next.js configuration options here (if needed)
  images: {
    // Prioritize AVIF for better compression
    formats: ["image/avif", "image/webp"],
    // Configure additional image optimization options (optional)
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    loader: "default", // Use the default Next.js image loader
  },
};

export default nextConfig;
