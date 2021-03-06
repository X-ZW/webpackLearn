let path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'production',
    // source-map 源码映射，会单独生成一个sourcemap文件 出错了会标识当前报错的列和行 大而全
    // devtool: 'source-map', // 增加映射文件， 帮助调试源代码

    // 不会生成单独的文件 但是可以显示行和列
    // devtool: 'eval-source-map',

    // 不会产生列 但是是一个单独的映射文件
    // devtool: 'cheap-module-source-map',

    // 不会产生文件，集成在打包后的文件中， 不会产生列
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
            filename: 'index.html',
        }),
    ]
}