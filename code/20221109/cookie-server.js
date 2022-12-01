const http = require('http')
const Mock = require('mockjs')
const url = require('url')

const app = http.createServer((req, res) => {
  const urlInfo = url.parse(req.url)
  console.log(urlInfo)
  res.writeHead(200, {
    // 'access-control-allow-origin': 'https://b.a.com',
    // 'access-control-allow-credentials': true,
  })
  res.end(JSON.stringify({ a: 1, b: 2 }))
})

const port = 4567
app.listen(port)
console.log('listening at ' + port)
