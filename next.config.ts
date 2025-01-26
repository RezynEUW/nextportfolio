import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true, // Enable SVG optimization
    contentDispositionType: "inline", // Render SVGs in the browser instead of forcing download
    formats: ["image/avif", "image/webp"], // Optional: Add modern image formats
  },
};

export default nextConfig;
