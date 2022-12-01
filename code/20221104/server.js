const http = require('http')
const Mock = require('mockjs')
const url = require('url')

const app = http.createServer((req, res) => {
  const urlInfo = url.parse(req.url)
  const query = {}
  urlInfo.query &&
    urlInfo.query.split('&').forEach(str => {
      const [k, v] = str.split('=')
      query[k] = v
    })

  console.log('query', query)

  const data = {
    uid: query.uid,
    a: 1,
    b: 2,
    c: 3,
  }
  res.writeHead(200, {
    'content-type': 'text/javascript',
    'access-control-allow-origin': 'https://a.com',
    'access-control-allow-headers': 'content-type',
    'access-control-allow-credentials': true,
  })
  res.end(`${query.cb}(${JSON.stringify(data)})`)
})

const port = 4567
app.listen(port)
console.log('listening at ' + port)
