const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
console.log(process.env.aa)
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.[hash:8].js',
        path: path.resolve(__dirname, 'build'),
    },
    devServer: {
        port: 3000,
        progress: true, // 进度条
        contentBase: './build', // 指定目录
        open: true, // 自动打开浏览器
        compress: true, // gzp压缩
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            minify: {
                removeAttributeQuotes: true, // 删除双引号
                collapseWhitespace: true, // 折叠空行
            },
            hash: true
        })
    ],
    module: {
        rules: [
            // css-loader
            {
                test: /\.css$/,
                // css-loader 负责解析@import语法
                // style-loader 把css插入head的标签中
                // loader的顺序 默认从右向左执行 从下到上执行
                // loader还可以写成对象
                // use: [{loader: 'style-loader', options: {...}}, 'css-loader']
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            insert: 'body' // 插入的位置,相对于自己在页面中定义的style
                        }
                    },
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            insert: 'body' // 插入的位置,相对于自己在页面中定义的style
                        }
                    },
                    'css-loader',// @import 语法，解析路径
                    'less-loader' // less => css
                ]
            }
        ]
    }
}