let path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'production',
    devtool: 'cheap-module-eval-source-map',
    watch: true,
    watchOptions: {
        poll: 1000, // 监控频率，当前是每秒1000次
        aggregateTimeout: 500, // 防抖，字面意思
        ignored: /node_modules/, // 不需要进行监控哪个文件
    },
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