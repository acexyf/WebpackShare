var path = require('path')
module.exports = {
    entry: {
        home: './home/home.js',
        list: './list/list.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    }
}