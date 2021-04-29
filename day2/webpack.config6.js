let path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    resolve: { // 解析第三方包
        modules: [path.resolve('node_modules')],
        extensions: ['.js', '.css', '.json', 'jsx'], // 拓展名   import ReactCom from './reactcom.jsx'  => from './reactcom
        // mainFields: ['style', 'main'], // 找入口文件
        // mainFiles: [] // 入口文件的名字， 默认index.js
        // alise: {
        //     bootstrap: 'bootstrap/dist/css/bootstrap.css'
        // }
    },
    mode: 'production',
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
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
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