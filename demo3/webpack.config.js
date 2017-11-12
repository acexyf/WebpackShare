const path = require('path');
//将css单独抽离的工具
const ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = {
    entry: './src/entry.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].bundle.js'
    },
    module: {
        rules: [{
                //样式加载器，同时抽离css样式
                test: /\.(css|less)$/,
                use: ExtractTextPlugin.extract({
                    use: [{
                        loader: "css-loader" //解析 CSS 文件后，使用 import 加载，并且返回 CSS 代码
                    }, {
                        loader: "less-loader" //加载和转译 LESS 文件
                    }],
                })
            }, {
                //加载 ES2015+ 代码，然后使用 Babel 转译为 ES5
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /(node_modules|bower_components)/,
                include: path.resolve(__dirname, './src'),
                query: {
                    presets: ['es2015'],
                    plugins: ['transform-runtime']
                }
            }, {
                //图片加载器
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader',
                options: {
                    name: 'img/[name].[hash:7].[ext]',
                    limit: 10000
                }
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'css/[name].bundle.css',
            disable: false,
			allChunks: true
        }),
    ]
}