const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const MiniCssExtractPlugin2 = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
let webpack = require('webpack')
console.log(process.env.aa)
// 配置使用 mini-css-extract-plugin, post-css, autoprefixer
// autoprefixer需要配置文件 ==> postcss.config.js
module.exports = {
    optimization: { // 优化项
        minimizer: [
            new UglifyJsPlugin({
                cache: true, // 是否用缓存
                parallel: true, // 是否并发打包
                sourceMap: true, // 源码映射
            }),
            new OptimizeCssAssetsPlugin()
        ]
    },
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
        }),
        new MiniCssExtractPlugin({
            filename: 'main.css', // 抽离出的css的文件名
        }),
        new MiniCssExtractPlugin2({
            filename: 'mainAndLess.css', // 抽离出的css的文件名
        }),
        new webpack.ProvidePlugin({ // 在每个模块中都注入JQ
            jQuery: 'jquery'
        }), // 提供插件
    ],
    // externals: { // 如果html cdn引入jq，js文件中 import导入jq，两个jq都会打包
    //     jquery: 'jQuery'
    // },
    module: {
        rules: [
            // {
            //     test: require.resolve('jquery'),
            //     use: 'expose-loader?jQuery!'
            // },
            {
                test: /\.js$/,
                use: {
                    loader: 'eslint-loader',
                    options: {
                        enforce: 'pre' // 强制在下面的loader之前执行
                    }
                },
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env'
                        ],
                        plugins: [
                            ["@babel/plugin-proposal-decorators", { "legacy": true }],
                            ["@babel/plugin-proposal-class-properties", { "loose": true }],
                            "@babel/plugin-transform-runtime", // Generator
                        ]
                    }
                },
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/
            },
            // css-loader
            {
                test: /\.css$/,
                // css-loader 负责解析@import语法
                // style-loader 把css插入head的标签中
                // loader的顺序 默认从右向左执行 从下到上执行
                // loader还可以写成对象
                // use: [{loader: 'style-loader', options: {...}}, 'css-loader']
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                ]
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin2.loader,
                    'css-loader',// @import 语法，解析路径
                    'postcss-loader', // 添加前缀，webkit等
                    'less-loader' // less => css
                ]
            }
        ]
    }
}