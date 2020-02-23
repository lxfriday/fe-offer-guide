const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    res.setHeader(
      'Content-Security-Policy',
      `default-src 'self'; img-src qiniu1.lxfriday.xyz localhost:3333; script-src qiniu1.lxfriday.xyz; report-uri /report`
    )
    const cspHTML = fs.readFileSync('./csp.html')
    console.log('cspHTML', cspHTML)
    res.end(cspHTML)
  } else {
    console.log('req.url', req.url)
    console.log('req.method', req.method)
    console.log('content-type', req.headers['content-type'])
    res.end('ok')
  }
})

server.listen(3333)
console.log('listenging')
