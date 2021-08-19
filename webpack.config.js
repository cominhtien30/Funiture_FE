const path = require('path');
const CopyPlugin = require("copy-webpack-plugin"); //plugin nay hỗ trợ chuyển file tĩnh vào dist
const Dotenv = require('dotenv-webpack'); // sữ dụng .env bằng webpack

module.exports = {
    mode: "development",
    entry: { bundle: './src/index.js', },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: "/" // tài nguyên mặc định
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist/'),
        contentBasePublicPath: "/", // theo dõi mặc định
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
        new Dotenv()
    ],
};