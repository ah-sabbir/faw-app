/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["images.unsplash.com", "cdn.shopify.com", "fakestoreapi.com", "cdn.pixabay.com", "istockphoto.com"],
    },
    env: {
        API_KEY: process.env.API_KEY,
        API_URL: process.env.API_URL,
        NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
        NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    },
}

module.exports = nextConfig
