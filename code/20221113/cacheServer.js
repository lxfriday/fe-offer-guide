const http = require('http')
const url = require('url')
const fs = require('fs')
const path = require('path')
const mime = require('mime')
const mockjs = require('mockjs')
const crypto = require('crypto')

const img = path.join(__dirname)

console.log('img path', img)
function getResource(name) {
  return path.join(img, name)
}

function createHash(path) {
  return crypto.createHash('md5').update(path).digest('hex')
}

const app = http.createServer((req, res) => {
  const urlInfo = url.parse(req.url)
  console.log(urlInfo)
  const pathname = urlInfo.pathname
  const resourcePath = getResource(pathname)

  if (req.headers['if-none-match']) {
    res.writeHead(304, {
      'cache-control': 'no-cache',
      'content-type': mime.getType(resourcePath),
    })
    res.end()
  } else {
    res.writeHead(200, {
      expires: new Date('2022 11 14 12:18:10').toUTCString(),
      'content-type': mime.getType(resourcePath),
    })
    fs.readFile(resourcePath, (err, data) => {
      res.end(data)
    })
  }
})

const port = 4567
app.listen(port)
console.log('listening at ' + port)
