
// -----------------------------------------效率test代码 start

// var arr = [],
//   max = 1000 // 多组max取值(10000，100000，...)进行测试
// for (var i = 1; arr.push(i++) < max;)

// var mapArr = [],forEachArr = [],forArr = []

// console.time('map')
// arr.map(function (val) {
//   mapArr.push(val)
// })
// console.timeEnd('map')

// console.time('forEach')
// arr.forEach(function (val) {
//   forEachArr.push(val);
// })
// console.timeEnd('forEach')

// console.time('for')
// for (var i = 0; i < arr.length; i++) {
//   forArr.push(arr[i])
// }
// console.timeEnd('for')

// -----------------------------------------效率test代码 end

// -----------------------------------------for与forEach对比 之 for循环代码 start

// var arr = new Array(100)

// arr[0] = 1
// arr[99] = 3
// // for循环
// for (var i = 0, l = arr.length; i < l; i++) {
//     console.log(`arr[${i}]`, arr[i])
// }
// console.log('i :' , i)

// // 打印结果：
// // arr[0] 1
// // arr[1] undefined
// // arr[2] undefined
// // ...
// // arr[99] 3
// // i : 100

// -----------------------------------------for与forEach对比 之 for循环代码 end

// -----------------------------------------for与forEach对比 之 forEach代码 start

var arr = new Array(100)
arr[0] = 1
arr[99] = 3

var count = 0
arr.forEach(function(value, index) {
    count++
    console.log(`arr[${index}]`, value)
})
console.log('count', count)

// 打印结果：
// arr[0] 1
// arr[99] 3
// count 2

// -----------------------------------------for与forEach对比 之 forEach代码 end
