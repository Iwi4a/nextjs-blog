const path = require('path');
const customWebpack = require('./webpack.config');

module.exports = {
    webpackFinal: async (config) => {
        const rules = config.module.rules.map(rule => {
            if(String(rule.test) === String(/\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/)) {
                return {
                    ...rule,
                    test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/,
                }
            }
            return rule;
        });
        const newConfig = {...config, module: { ...config.module, rules: [...rules, ...customWebpack.module.rules] }};
        return newConfig
    },
    stories: ['../src/**/**/**/**/stories.js'],
    addons: [
        '@storybook/addon-backgrounds/register',
        '@storybook/addon-viewport/register',
        '@storybook/addon-actions/register',
    ]
};