const path = require('path')
const htmlPlugin= require('html-webpack-plugin');
const cleanWebpack = require('clean-webpack-plugin')
const extractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: {
        home: './src/home/home.js',
        list: './src/list/list.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]/bundle.js',
        publicPath: ''
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ],
    },
    plugins: [
        new cleanWebpack(['dist']),
        new htmlPlugin({
            template: './src/home/index.html',
            filename: 'home.html',
            hash:false,
            chunks: ['home']
        }),
        new htmlPlugin({
            template: './src/list/index.html',
            filename: 'list.html',
            hash:false,
            chunks: ['list']
        })
    ]



}