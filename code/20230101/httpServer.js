const http = require('http')
const url = require('url')
const fs = require('fs')
const path = require('path')
const crypto = require('crypto')
let cnt = 0

const dir = path.join(__dirname)

function fileParh(fileName) {
  return path.join(dir, fileName)
}

const app = http.createServer((req, res) => {
  // const urlInfo = url.parse(req.url)
  // console.log(urlInfo, req.method)
  // const pathname = urlInfo.pathname
  // res.writeHead(200, {
  //   'content-security-policy': `default-src 'self' 'unsafe-inline'; frame-ancestors b.com`,
  // })
  // fs.createReadStream(fileParh('index.html')).pipe(res)
  res.end('hello')
})

const port = 4567
app.listen(port)
console.log('listening at ' + port)
