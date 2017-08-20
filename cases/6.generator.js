function* gen() {
  yield 1
  yield 2
  yield 3
}

let g = gen()

console.log(g.next())
console.log(g.next())
console.log(g.next())


/**
 * 梦想的代码
 */
// function xxx() {
//   doSomething()
//   await(1000)
//   doOther()
// }