const path = require('path');
const webpack = require('webpack');

 // production development 
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    module: {
        rules: [
            { 
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        publicPath: 'http://cdn.example.com/assets/'
    }
};