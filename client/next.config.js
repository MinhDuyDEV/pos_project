/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["source.unsplash.com", "s.gravatar.com", "res.cloudinary.com"],
  },
  env: {
    NEXT_PUBLIC_BASE_URL:
      "https://pos-project-server-mlciwym89-minhduydev.vercel.app",
  },
};

module.exports = nextConfig;
