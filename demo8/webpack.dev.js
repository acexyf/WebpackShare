const path = require('path')
const htmlPlugin= require('html-webpack-plugin');
const cleanWebpack = require('clean-webpack-plugin')
const extractTextPlugin = require("extract-text-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { entry, plugins } = require("./config")
const webpack = require('webpack')

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        compress: true,
        host: '0.0.0.0',
        port: 8085,
        contentBase: './serve',
        open: false,
        openPage: '/home',
        proxy: {
            "/api": {
                target: "http://localhost:3000",
                pathRewrite: {"^/api" : ""}
            }
        }
    },
    entry,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: ''
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                  {
                    loader: "style-loader"
                  },
                  {
                    loader: "css-loader",
                    options:{
                        importLoaders: 2
                    }
                  },
                  {
                      loader: "postcss-loader",
                  }
                ]
            },{
                test: /\.less$/,
                use:[
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options:{
                            importLoaders: 2
                        }
                    },
                    {
                        loader: "postcss-loader",
                    },
                    "less-loader",
                ]
            },{
                test: /\.(png|jpg|jpeg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 500,
                        name: '[contenthash:8].[ext]',
                        outputPath: 'img/',
                        // publicPath: 'http://10.101.62.43:11322/output/img/webpack/img/'
                    }
                }]
            },{
                test: /\.(jsx|js)$/,
                use: {
                    loader: 'babel-loader',
                },
                exclude:/node_modules/
            }
        ],
    },
    plugins: [
        ...plugins,
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
    ]
}



