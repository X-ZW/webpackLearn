// console.log('index')

// class A {
//     constructor() {
//         console.log('xzw222')
//     }
// }

// const a = new A()
// console.log('xzw')
// // webpack处理跨域
// let xhr = new XMLHttpRequest();

// xhr.open('GET', '/api/user', true);
// xhr.onload = function () {
//     console.log('response', xhr.response)
// }

// xhr.send()


// 配置环境
let name = '';
if (DEV === 'dev') {
    name = 'xyj'
} else {
    name = 'xzw'
}

console.log(name)