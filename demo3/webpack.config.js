const path = require('path');
module.exports = {
    entry: './src/entry.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    module:{
        rules:[{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /(node_modules|bower_components)/,
            include: path.resolve(__dirname, './src'),
            query: {
                presets: ['es2015'],
                plugins: ['transform-runtime']
            }
        },{
            test: /\.(png|jpg|gif)$/,
            loader: 'url-loader',
            options: {
                limit: 10000
            }
        }]
    },
    plugins:[

    ]
}