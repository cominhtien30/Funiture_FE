const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: "development",
    entry: { bundle: './src/index.js', },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: "/"
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist/'),
        contentBasePublicPath: "/",
        open: true,
        port: 9000,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                use: 'babel-loader',
                test: /\.js*/,
                exclude: "/node_modules/"

            }, {
                use: ["style-loader", 'css-loader'],
                test: /\.css$/

            },
            {
                loader: 'file-loader',
                test: /\.(png|jpe?g|gif|woff2|eot|wav|mp3|ico|wav|ttf|svg)$/i,
                options: {
                    outputPath: 'images',
                    url: true,

                },
            }
        ]
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: 'src/assets/images/logo', to: 'logo' },
            ],
        }),
    ],
};