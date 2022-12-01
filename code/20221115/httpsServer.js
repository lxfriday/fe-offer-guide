const https = require('https')
const url = require('url')
const fs = require('fs')
const path = require('path')

const opts = {
  key: fs.readFileSync('./ssl/private.pem'),
  cert: fs.readFileSync('./ssl/server.pem'),
}

const app = https.createServer(opts, (req, res) => {
  const urlInfo = url.parse(req.url)
  console.log(urlInfo, req.headers)
  res.end(
    JSON.stringify({
      work: 'https header',
    }),
  )
})

const port = 4568
app.listen(port)
console.log('listening https at ' + port)
