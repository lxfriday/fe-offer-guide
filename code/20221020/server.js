const http = require('http')

const app = http.createServer((req, res) => {
  console.log('req.headers', req.headers)
  res.writeHead(200, {
    'access-control-allow-origin': 'https://x.com',
    'access-control-allow-methods': 'GET,POST',
    'access-control-allow-credentials': true,
    'access-control-allow-headers': 'content-type',
  })
  res.end('<h1>x.com</h1>')
})

const port = 4567
app.listen(port)
console.log('listening at ' + port)