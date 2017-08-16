const gzip = zlib.createGzip()
const fs = require('fs')
const inp = fs.createReadStream('message.txt')
const out = fs.createWriteStream('message.txt.gz')

/**
 * 跟前一个例子很像，只是加了一个 Transform Steam
 */
inp.pipe(gzip).pipe(out)