var express = require('express')
var bodyParser = require('body-parser')
var app = express()

app.use(bodyParser.json())

app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  console.log('server receive in app use', {
    method: req.method,
    url: req.url,
    headers: req.headers,
    body: req.body,
  })
})

app.all('*', function (req, res) {
  console.log('server receive', {
    method: req.method,
    url: req.url,
    headers: req.headers,
    body: req.body,
  })

  res.end(JSON.stringify({
    app: 'express'
  }))
})

app.listen(4567)