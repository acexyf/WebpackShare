module.exports = {
    plugins: [
        require('autoprefixer')({ browsers : ['last 100 versions'] }),
        require('postcss-plugin-px2rem')({ rootValue: 75, unitPrecision: 5 })
    ]
}