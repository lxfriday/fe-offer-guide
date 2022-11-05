const http = require('http')
const Mock = require('mockjs')

const app = http.createServer((req, res) => {
  res.writeHead(200, {
    'access-control-allow-origin': 'https://x.com',
    'access-control-allow-methods': 'GET,POST',
    'access-control-allow-credentials': true,
    'access-control-allow-headers': 'content-type,a,requestId,abc',
    'Content-Type': 'text/plain; charset=utf-8',
  })
  res.end(
    JSON.stringify({
      success: true,
      data: {
        id: Mock.mock('@guid'),
        name: Mock.mock('@cname'),
        age: Mock.mock({
          'number|1-100': 100,
        }).number,
      },
      errMsg: '',
    }),
  )
})

const port = 4567
app.listen(port)
console.log('listening at ' + port)
