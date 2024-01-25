/**
 * @type {import('next').NextConfig}
 */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
    basePath: '',
    compress: true,
    // experimental: {
	// //enableStaticImages: true
    //     // serverActions: true,
    //     // enableUndici: true,
    //     // images: {
    //     //     allowFutureImage: true
    //     // }
    //   },
  //webp: {
  //  preset: "default",
  //  quality: 100,
  //},
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: '**.unsplash.com',
            },
            {
              protocol: 'https',
              hostname: '**.istockphoto.com',
            },
            {
              protocol: 'https',
              hostname: '**.unsplash.com',
            },
            {
              protocol: 'https',
              hostname: '**.shopify.com',
            },
            {
              protocol: 'https',
              hostname: 'fakestoreapi.com',
            },
            {
              protocol: 'https',
              hostname: '**.pixabay.com',
            },
            {
              protocol: 'https',
              hostname: 'istockphoto.com',
            },
            {
              protocol: 'https',
              hostname: 's3-alpha-sig.figma.com',
            },
            {
              protocol: 'https',
              hostname: 'themewagon.github.io',
            },
            {
              protocol: 'https',
              hostname: 'res.cloudinary.com'
            }
        ],

        // domains: ["images.unsplash.com", "media.istockphoto.com", "source.unsplash.com", "cdn.shopify.com", "fakestoreapi.com", "cdn.pixabay.com", "istockphoto.com","s3-alpha-sig.figma.com","themewagon.github.io"],
        unoptimized: false,
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
	//formats: ['image/avif', 'image/webp', 'image/jpeg', 'image/png', 'image/gif', 'image/svg+xml'],
    	minimumCacheTTL: 60,
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