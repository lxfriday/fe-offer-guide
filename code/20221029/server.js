const http = require('http')

const app = http.createServer((req, res) => {
  // res.writeHead(200, {
  //   'access-control-allow-origin': 'https://x.com',
  //   'access-control-allow-methods': 'GET,POST',
  //   'access-control-allow-credentials': true,
  //   'access-control-allow-headers': 'content-type,a,requestId',
  //   'header1': 'v111'
  // })
  res.end(JSON.stringify({
    success: false,
    errMsg: '用户名不合法'
  }))
})

const port = 4567
app.listen(port)
console.log('listening at ' + port)