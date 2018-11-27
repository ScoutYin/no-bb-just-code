/**
 * 首先来看看为啥 a == 1 && a == 2 && a == 3 可以为true
 */

var a = { value: 0 }

a.valueOf = function () {
  this.value + 1
}

console.log(a == 1 && a == 2 && a == 3) // true

/**
 * 在JS中，宽松相等==会先将左右两两边的值转化成相同的原始类型，然后再去比较他们是否相等。在转化之后(==一边或两边都需要转化)，
 * 最后的相等匹配会像===符号一样去执行判断。宽松相等是可逆的，对于任何值A与B，通常A == B与B == A具有相同的表现(除了转换的顺
 * 不同)
 */

/**
 * 再来卡看看为啥 a === 1 && a === 2 && a === 3 也可以为true
 */

var value = 0

Object.defineProperty(window, 'a', {
  get () {
    return this.value += 1
  }
})

console.log(a === 1 && a === 2 && a === 3) // true
