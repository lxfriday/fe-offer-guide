const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  console.log('cookies', req.headers['cookie'])
  res.writeHead(200, {})
  res.end('<html><a href="http://www.baidu.com">去另一个页面</a></html>')
})

server.listen(80)
console.log('listenging 80')
