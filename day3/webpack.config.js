let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin');
let webpack = require('webpack')
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'build.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        noParse: /jquery/, // 不解析jquery中的依赖关系
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ]
                    }
                }
            }
        ]
    },
    plugins: [
        new webpack.IgnorePlugin(/\.\/locale/, /moment/),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        })
    ]
}