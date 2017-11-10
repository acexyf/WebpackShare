var path = require('path')

module.exports = {
    entry: './entryFile.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'entry.bundle.js'
    }
}