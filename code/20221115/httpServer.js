const http = require('http')
const url = require('url')
const fs = require('fs')
const path = require('path')
const crypto = require('crypto')
let cnt = 0

const app = http.createServer((req, res) => {
  const urlInfo = url.parse(req.url)
  console.log(urlInfo, req.headers)
  const pathname = urlInfo.pathname
  res.writeHead(200, { connection: 'close' })
  res.end(
    JSON.stringify({
      a: 1,
      b: 2,
      work: 'http header',
    }),
  )
})

const port = 4567
app.listen(port)
console.log('listening at ' + port)
