const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
    entry: "./src/index.tsx",
    output: {
        path: path.join(__dirname, "build"),
        filename: '[name].[contenthash].js'
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    mode: process.env.NODE_ENV || "development",
    resolve: {
        extensions: [
            ".tsx",
            ".ts",
            ".js"
        ]
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'build'),
            publicPath: path.join(__dirname, 'build')
        },
        allowedHosts: [
            'lukahost.com',
            'host2.com'
        ],
        port: 3000,
        proxy: {
            '/': 'http://localhost:3001'
        },
        writeToDisk: true
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: ["ts-loader"]
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
                use: ["file-loader"]
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin(
            {
                template: path.join(__dirname, "public", "index.html")
            }
        )]
};