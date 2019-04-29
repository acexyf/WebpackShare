const htmlPlugin= require('html-webpack-plugin');
const path = require('path')
const fs = require('fs')

let isProd = process.env.NODE_ENV === 'production'


const fileDir = fs.readdirSync('./src/view/')

let entry = {},
    plugins = [];

fileDir.map((elem)=>{
    entry[elem] = `./src/view/${elem}/index.js`
    plugins.push(
        new htmlPlugin({
            title: 'Custom Title',
            template: 'html-withimg-loader!'+path.resolve(__dirname, `./src/view/${elem}/index.html`),
            filename: `${elem}.html`,
            hash:false,
            chunks: [elem],
            minify: {
                collapseWhitespace: false,
            }
        })
    )
})

module.exports = {
    version: '0.0.1',
    entry,
    plugins,
    publicPath: 'http://static.lingdehealth.com/inner-h5/',
}