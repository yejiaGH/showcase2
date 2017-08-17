/**
 * 做个等待函数
 */
function wait(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}

/**
 * 做一个简单的运行器
 */
function runer(g) {
  const item = g.next()
  // 如果是 Promise 
  if (item.value instanceof Promise) {
    item.value.then((res) => {
      if (!item.done) {
        runer(g)
      }
    })
  }
}

/**
 * 实际代码
 */
function* gen() {
  console.log(1)
  yield wait(1000)
  console.log(2)
  yield wait(1000)
  console.log(3)
}

runer(gen())