const withPWA = require('next-pwa');

const nextConfig = withPWA({
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: [ 'cdn3.destm.com', 'eu-images.contentstack.com', 'images.contentstack.io', 'https:/s3-us-east-2.amazonaws.com', 's3-us-east-2.amazonaws.com' ],
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: [ '@svgr/webpack' ],
        });

        return config;
    },
    env: {
        API_BASE_URL: process.env.API_BASE_URL,
        GQL_BASE_URL: process.env.GQL_BASE_URL,
        UPLOAD_IMAGE_BASE_URL: process.env.UPLOAD_IMAGE_BASE_URL,
        IMAGE_BASE_URL: process.env.IMAGE_BASE_URL,
        GOOGLE_OPTIMIZE_ID: process.env.GOOGLE_OPTIMIZE_ID,
        GOOGLE_GTAG_ID: process.env.GOOGLE_GTAG_ID,
        GOOGLE_EXPERIMENT_ID: process.env.GOOGLE_EXPERIMENT_ID,
    },
    pwa: {
        dest: 'public',
        disable: process.env.NODE_ENV === 'development',
    },
});

module.exports = nextConfig;
