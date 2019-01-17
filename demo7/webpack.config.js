const path = require('path')
const htmlPlugin= require('html-webpack-plugin');
const cleanWebpack = require('clean-webpack-plugin')
const extractTextPlugin = require("extract-text-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

console.log(path.resolve(__dirname, './src/list/index.html'))

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
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                      publicPath: 'http://10.101.62.43:11322/output/img/webpack/img/'
                    }
                  },
                  "css-loader",
                  {
                      loader: "postcss-loader",
                      options: {
                        // plugins: [
                        //     require('autoprefixer')
                        // ]
                      }
                  }
                ]
            },{
                test: /\.(png|jpg|jpeg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 3000,
                        name: '[hash:8].[ext]',
                        outputPath: 'img/',
                        publicPath: 'http://10.101.62.43:11322/output/img/webpack/img/'
                    }
                }]
            }
        ],
    },
    plugins: [
        new cleanWebpack(['dist']),
        new htmlPlugin({
            // template: './src/home/index.html',
            template: 'html-withimg-loader!'+path.resolve(__dirname, './src/home/index.html'),
            filename: 'home.html',
            hash:false,
            chunks: ['home']
        }),
        new htmlPlugin({
            // template: './src/list/index.html',
            template: 'html-withimg-loader!'+path.resolve(__dirname, './src/list/index.html'),
            filename: 'list.html',
            hash:false,
            chunks: ['list']
        }),
        new MiniCssExtractPlugin({
            filename: "[name]/bundle.css",
            chunkFilename: "[id].css"
        }),
    ]



}