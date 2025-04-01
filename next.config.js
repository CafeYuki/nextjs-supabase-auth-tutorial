/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
    },
    images: {
        domains: ['rgdkcvqazchdvhgdipcg.supabase.co'],
    },
}

module.exports = nextConfig
