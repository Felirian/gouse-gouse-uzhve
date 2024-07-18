/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },
  images: {
    unoptimized: true,
    domains: [
      "localhost",
    ],
  },
};

export default nextConfig;
