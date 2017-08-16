const fs = require('fs')
const ws = fs.createWriteStream('./message.txt')

/**
 * 向 Writable Steam 传入一段数据
 */
ws.write('beep ')

setTimeout(() => {
  /**
   * 告诉 Writeable Stream 结束了
   */
  ws.end('boop\n')
}, 1000)