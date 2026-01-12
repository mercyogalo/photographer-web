/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.unsplash.com", 
      "via.placeholder.com",
      "s3.amazonaws.com",  // Add this for your S3 images
      "source.unsplash.com",  // Optional: for unsplash source images
      "picsum.photos",  // Optional: for placeholder images
    ],
    formats: ["image/webp", "image/avif"],
  },
};

module.exports = nextConfig;