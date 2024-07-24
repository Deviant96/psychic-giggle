/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'swapi.dev',
          },
          {
            protocol: 'https',
            hostname: 'picsum.photos',
          },
        ],
    },
};

export default nextConfig;
