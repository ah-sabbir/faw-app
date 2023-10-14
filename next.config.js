/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
    basePath: '',
    compress: false,
    experimental: {
        // serverActions: true,
        // enableUndici: true,
      },
    images: {
        domains: ["images.unsplash.com", "cdn.shopify.com", "fakestoreapi.com", "cdn.pixabay.com", "istockphoto.com","s3-alpha-sig.figma.com","themewagon.github.io"],
        unoptimized: false,
        // deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    },
    env: {
        API_KEY: process.env.API_KEY,
        API_URL: process.env.API_URL,
        NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
        NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    },
    // assetPrefix: isProd ? 'https://cdn.fashionanywhere.shop' : undefined,
}

module.exports = nextConfig



// basePath: '/myapp',
// async redirects() {
//   return ([
//     {
//       source: '/',
//       destination: '/myapp',
//       permanent: true,
//       basePath: false,
//     },
//   ]);
// }
