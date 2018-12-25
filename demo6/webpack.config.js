const path = require('path');
const webpack = require('webpack');

 // production development 
module.exports = function(env,argv){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({
                mode: 'development',
                entry: {
                    home: './src/home/index.js',
                    list: './src/list/index.js'
                },
                module: {
                    rules: [
                        { 
                            test: /\.js$/,
                            use: 'babel-loader',
                            exclude: /node_modules/
                        }
                    ]
                },
                resolve: {
                    modules: [path.resolve(__dirname, "src"), "node_modules"],
                },
                output: {
                    path: path.resolve(__dirname, 'dist'),
                    filename: '[name]/bundle.js',
                    publicPath: ''
                }
            })
        }, 0)
    })
};