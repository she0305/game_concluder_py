/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverComponentsExternalPackages: ['@prisma/client', 'bcrypt']
    },
    compiler: {
        // ssr and displayName are configured by default
        styledComponents: true,
    },
}

module.exports = nextConfig
