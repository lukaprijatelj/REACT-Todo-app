const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = 
{
    mode: process.env.NODE_ENV || "development",
    entry: path.join(__dirname, "src", "index.tsx"),
    output: 
    {
        path: path.join(__dirname, "build"),
        filename: '[name].[contenthash].js'
    },
    optimization: 
    {
        splitChunks: 
        {
            chunks: 'all'
        }
    },    
    resolve: 
    {
        extensions: 
        [
            ".tsx",
            ".ts",
            ".js"
        ]
    },
    devServer: 
    {
        port: 3000,
        static: 
        {
            directory: path.join(__dirname, 'build'),
            publicPath: path.join(__dirname, 'build')
        },
        allowedHosts: ['ideamemory.com'],        
        proxy: 
        {
            '/': 'http://localhost:3001'
        },
        writeToDisk: true
    },
    module: 
    {
        rules: 
        [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: ["ts-loader"]
            },
            {
                test: /\.(css|scss)$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
                use: ["file-loader"]
            }
        ]
    },
    plugins: 
    [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "public", "index.html")
        })
    ]
};