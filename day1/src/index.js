// console.log("hello webpack")

// console.log(__dirname);
// require("./index.css")
// require("./index.less")


// // config3 es6 => es5
// const fun = () => 2
// fun()

// @log
// class A {
//     a = 2
// }

// function log(target) {
//     console.log(target);
// }

// // "@babel/plugin-transform-runtime
// function* gen() {

// }

// console.log(gen().next())

// include

// require('@babel/polyfill');
// 'aaa'.includes('a');




// 全局变量  expose-loader 暴露全局的loader  内联的loader
// pre 之前执行的loader normal 普通的loader  内联loader 后置 post-loader
// import $ from "jquery";
// 如果是需要注入jq的话,不需要配置expose-loader,需要在webpack plugins里面配置
// console.log(jQuery, '111') // 在每个模块注入 JQuery



// webpack 打包图片
// 1) 在js中创建图片引入
// 2) 在css 中引入
// 3) img

// import b from './bbb.png'
// import a from './aaa.png' // 把图片引入，返回的结果是一个新的图片地址
// // 需要file-loader 默认会在内部生成一张图片放到build目录下
// let image = new Image();
// let image2 = new Image();
// // image.src = './a.png' // 就是一个普通的字符串
// image.src = b
// image2.src = a
// document.body.appendChild(image)
// document.body.appendChild(image2)