const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    res.setHeader(
      'Content-Security-Policy',
      `default-src 'self'; img-src qiniu1.lxfriday.xyz localhost:3333 localhost:3344; script-src qiniu1.lxfriday.xyz; report-uri /report`
    )
    res.setHeader('Set-Cookie', `name=lxfridayxxxxx;expires=${new Date(Date.now() + 5000)};HttpOnly;SameSite=Strict`)
    const cspHTML = fs.readFileSync('./csp.html')
    console.log('cookies', req.headers['cookie'])
    res.end(cspHTML)
  } else {
    console.log('req.url', req.url)
    console.log('req.method', req.method)
    console.log('content-type', req.headers['content-type'])
    const cks = []
    req.on('data', function(chunk) {
      cks.push(chunk)
    })
    req.on('end', function(chunk) {
      console.log('data', Buffer.concat(cks).toString())
      res.end('cookie?')
    })
  }
})

server.listen(3333)
console.log('listenging')
