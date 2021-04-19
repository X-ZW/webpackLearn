const path = require('path');
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
    },
    devServer: {
        port: 3000,
        progress: true, // 进度条
        contentBase: './build', // 指定目录
        open: true, // 自动打开浏览器
        compress: true, // gzp压缩
    }
}