const withFonts = require('nextjs-fonts');
const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const withPlugins = require('next-compose-plugins');
const withSvgr = require("next-svgr");
const optimizedImages = require('next-optimized-images');

require('dotenv').config({ path: '../.env' });

module.exports = withPlugins([
    withFonts,
    withSass,
    withCSS,
    [optimizedImages, {
        optimizeImagesInDev: true,
        handleImages: ['jpeg', 'png', 'webp', 'gif'],
        mozjpeg: {
            quality: 85,
        },
    }],
    withSvgr,
]);
