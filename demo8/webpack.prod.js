const path = require('path')
const htmlPlugin= require('html-webpack-plugin');
const cleanWebpack = require('clean-webpack-plugin')
const extractTextPlugin = require("extract-text-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { entry, plugins, version, publicPath } = require("./config")
const webpack = require('webpack')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');



module.exports = {
    mode: "production",
    entry,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: `${version}/js/[name].js`,
        publicPath,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                  },
                  {
                      loader: "css-loader",
                  },
                  {
                      loader: "postcss-loader",
                  }
                ]
            },{
                test: /\.less$/,
                use:[
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: "css-loader",
                    },
                    "less-loader",
                    {
                        loader: "postcss-loader",
                    }
                ]
            },{
                test: /\.(png|jpg|jpeg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 3000,
                        name: '[contenthash:8].[ext]',
                        outputPath: 'img/',
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
        new cleanWebpack(),
        ...plugins,
        new MiniCssExtractPlugin({
            filename: `${version}/css/[name].css`,
            chunkFilename: "[id].css"
        }),
        new OptimizeCssAssetsPlugin(),
    ]
}











