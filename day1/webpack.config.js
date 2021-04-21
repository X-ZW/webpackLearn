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
            {
                test: /\.less$/,
                use: [
                    {
                        loader: "style-loader",
                        options: {
                            insert: 'body'
                          }
                    },
                    'css-loader',
                    'less-loader'
                ]
            }
        ]
    }
}