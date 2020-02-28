const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  console.log('cookies', req.headers['cookie'])
  res.writeHead(200, {
    // 'Set-Cookie': ['name=sub-x-com-cn; path=/;domain=x.com.cn'],
  })
  res.end('cookie comming')
})

server.listen(80)
console.log('listenging 80')

const server1 = http.createServer((req, res) => {
  console.log('server1', req.headers['cookie'])
  res.writeHead(200, {})
  res.end('cookie?')
})

server1.listen(3355)
console.log('listenging 3355')

// function setCookie(cname, cvalue, exdays) {
//   const d = new Date()
//   d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000)
//   const expires = 'expires=' + d.toUTCString()
//   return (document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/')
// }

// // function deleteCookie(cname) {
// //   const d = new Date()
// //   const expires = 'expires=' + d.toUTCString()
// //   return (document.cookie = cname + '=' + ';' + expires + ';path=/')
// // }

// function getCookie(cname) {
//   const cookieObj = document.cookie.split(';').reduce((prev, curr) => {
//     const entry = curr.split('=')
//     prev[entry[0].trim()] = entry[1]
//     return prev
//   }, {})
//   if (cname) return cookieObj[cname]
//   return cookieObj
// }
