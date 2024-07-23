/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: {
            allowedOrigins: ['swapi.dev'],
        },
    },
};

export default nextConfig;
