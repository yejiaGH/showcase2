const fs = require('fs')

/**
 * 创建一个 Readable Stream，读取 message.txt
 */
const read = fs.createReadStream('./message.txt')
/**
 * 创建一个 Writable Stream，写入 message.clone.txt
 */
const write = fs.createWriteStream('./message.clone.txt')

/**
 * 接水管
 */
read.pipe(write)