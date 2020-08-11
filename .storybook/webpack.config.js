const path = require("path");

module.exports = {
    module: {
        rules: [
            {
                test: /\.svg$/,
                use: ["@svgr/webpack"],
            },
            {
                test: /\.scss$/,
                loaders: ["style-loader", "css-loader", "sass-loader"],
                include: path.resolve(__dirname, "../")
            },
        
            {
                test: /\.(mp3|mp4|ogg|eot|ttf|xml)(\?v=[0-9].[0-9].[0-9])?$/,
                loader: 'file-loader',
            },
            {
                test: /\.(jpe?g|png|gif|woff|woff2)(\?[a-z0-9=.]+)?$/,
                loader: 'url-loader',
                options: {
                    limit: 100000,
                }
            },
            
        ]
    }
};
