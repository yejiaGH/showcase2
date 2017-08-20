const http = require('http')

const server = http.createServer((req, res) => {
  let body = ''

  req.setEncoding('utf8')
  /**
   * 当有数据的时候
   */
  req.on('data', chunk => {
    body += chunk
  })

  req.on('end', () => {
    /**
     * 试试是不是 JSON 格式
     */
    try {
      const data = JSON.parse(body)
      res.write(`${typeof data}\n`)
      res.end()
    } catch(e) {
      res.statusCode = 404
      res.end(`error: ${e.message}\n`)
    }
  })
})

server.listen(8080, () => {
  console.log('listen 8080')
})

/**
 * curl localhost:8080 -d "{}"
 * curl localhost:8080 -d "\"foo\""
 * curl localhost:8080 -d "not json"
 */