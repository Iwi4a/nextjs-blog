const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

require('dotenv').config({ path: '../.env' });

module.exports = withPlugins([
    withSass,
    withCSS,
    [optimizedImages, {
        optimizeImagesInDev: true,
        mozjpeg: {
            quality: 85,
        },
    }],
]);
