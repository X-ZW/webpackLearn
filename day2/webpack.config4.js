let path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require('webpack')
// 1) cleanWebpackPlugin // 比如说第一次打包出来的文件名问 index.html  第二次打包的时候修改名字了为 home, dist目录下则存在多个文件
// 2) copyWebpackPlugin
// 3) bannerWebpackPlugin // 版权申明文件

module.exports = {
    mode: 'production',
    devtool: 'cheap-module-eval-source-map',
    // 多路口
    entry: {
        home: './src/index.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index2.html',
        }),
        new CleanWebpackPlugin(),
        new CopyPlugin([ // 4.6版本
            { from: path.resolve(__dirname, 'doc'), to: "./" },
        ]),
        new webpack.BannerPlugin('make by xzw')
    ]
}