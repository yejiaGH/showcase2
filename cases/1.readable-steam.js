/**
 * Proimse 只能回调一次，但是如果处理数据很大，需要分很多片怎么办呢？
 */
const Readable = require('stream').Readable
const rs = new Readable

/**
 * 创建一个方法可以中断线程
 */
function wait(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}

/**
 * 假设我们的数据源数据很大，读取的时候只能够一块一块读取，否则会卡住很久
 */
const source = 'aiopshdviaowefipoajsdpoghapeisfhlasdfasdf'.split('')

rs._read = function () {
  !!source.length &&
    wait(100)
      .then(() => {
        if (source.length > 1) {
          rs.push(source.shift())
        } else {
          rs.push(source.shift())
          rs.push('\n')
          rs.push(null)
        }
      })
}

/**
 * rs | process.stdout
 */
rs.pipe(process.stdout)

/**
 * a.pipe(b).pipe(c).pipe(d) =
 * a.pipe(b); b.pipe(c); c.pipe(d) ≈
 * a | b | c
 */