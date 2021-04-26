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
console.log(jQuery, '111') // 在每个模块注入 JQuery