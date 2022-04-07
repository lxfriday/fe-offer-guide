const express = require('express')
const bodyParser = require('body-parser')
const formidable = require('formidable')
const http = require('http')
const url = require('url')
const fs = require('fs')
const path = require('path')

const app = express()
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.all('*', function (req, res, next) {
  console.log('req.url', `${req.headers.referer}`);
  res.setHeader('Access-Control-Allow-Origin', req.headers.referer.substring(0, req.headers.referer.length - 1))
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, PUT, POST, DELETE, PATCH, OPTIONS'
  )
  res.setHeader('Access-Control-Allow-Headers', 'x-request-id,content-type')
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader('Access-Control-Max-Age', 6000)

  console.log('cookie', req.headers.cookie);

  next()
})

app.options('*', function (req, res) {
  res.writeHead(200)
  res.end()
})

app.get('/', function (req, res) {
  console.log('req.query', req.query)
  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.write(fs.readFileSync(path.resolve(__dirname, 'waterfall4-upgrade.html')))
  res.end()
})

app.post('/addUser', function (req, res) {
  res.writeHead(200, { 'Content-Type': 'application/json' })
  console.log('req.body', req.body)
  res.write(
    JSON.stringify({
      success: 1,
      data: {
        _id: '1008611dasdsa',
        username: 'lxfriday',
        age: 20,
        sex: 'male',
        requestId: req.headers['x-request-id'],
      },
    })
  )
  res.end()
})

app.post('/receiveFormData', function (req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json',
    requestId: req.headers['x-request-id'],
  })
  const form = formidable({
    multiples: true,
    uploadDir: path.resolve(__dirname, 'uploadDir'),
    keepExtensions: true,
  })
  form.parse(req, (err, fields, files) => {
    console.log({ fields, files })
    console.log(files[Object.keys(files)[0]])
    res.write(
      JSON.stringify({
        success: 1,
        data: {
          _id: '1008611dasdsa',
        },
      })
    )
    res.end()
  })
})

app.get('/willReceive500', function (req, res) {
  res.writeHead(500, {})
  res.write(
    JSON.stringify({
      success: 0,
      errMsg: '服务器错误',
      data: {},
    })
  )
  res.end()
})

app.get('/downloadBigFile', function (req, res) {
  res.writeHead(200, {})
  res.write()
  res.end()
})

app.all('*', function (req, res) {
  res.writeHead(404, { 'Content-Type': 'text/html' })
  res.write(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
    </style>
  </head>
  <body>
    404
  </body>
  </html>`)
  res.end()
})

// const app = http.createServer((req, res) => {
//   console.log('req.method', req.method, req.url)
//   const { pathname } = url.parse(req.url)

//   res.setHeader('Access-Control-Allow-Origin', '*')
//   res.setHeader(
//     'Access-Control-Allow-Methods',
//     'GET, PUT, POST, DELETE, PATCH, OPTIONS'
//   )
//   res.setHeader('Access-Control-Allow-Headers', 'x-request-id,content-type')

//   router({
//     method: req.method,
//     pathname,
//     req,
//     res,
//   })
// })

// function router({ method, pathname, req, res }) {
//   if (method === 'GET' && pathname === '/') home(req, res)
//   else if (method === 'POST' && pathname === '/addUser') addUser(req, res)
//   else if (method === 'OPTIONS') forPreflight(req, res)
//   else fallback(req, res)
// }

// function home(req, res) {
//   res.writeHead(200, { 'Content-Type': 'text/html' })
//   res.write(fs.readFileSync(path.resolve(__dirname, 'waterfall4-upgrade.html')))
//   res.end()
// }

// function addUser(req, res) {
//   res.writeHead(200, { 'Content-Type': 'application/json' })
//   console.log(req.headers)
//   res.write(
//     JSON.stringify({
//       success: 1,
//       data: {
//         _id: '1008611dasdsa',
//         username: 'lxfriday',
//         age: 20,
//         sex: 'male',
//         requestId: req.headers['x-request-id'],
//       },
//     })
//   )
//   res.end()
// }

// function forPreflight(req, res) {
//   res.writeHead(200)
//   res.end()
// }

// function fallback(req, res) {
//   res.writeHead(404, { 'Content-Type': 'text/html' })
//   res.write(`
//   <!DOCTYPE html>
//   <html lang="en">
//   <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <style>
//     </style>
//   </head>
//   <body>
//     404
//   </body>
//   </html>`)
//   res.end()
// }

const port = 3457
app.listen(port)
console.log(`listening at http://localhost:${port}`)
