// const http = require('http')
// const fs = require('fs')

// const server = http.createServer((req, res) => {
//   console.log('cookies', req.headers['cookie'])
//   res.setHeader('Set-Cookie', `name=lxfridayMMMMM;expires=${new Date(Date.now() + 5000)};HttpOnly;SameSite=None;Domain=.mmmm.com`)
//   res.end('cookie?')
// })

// server.listen(3344)
// console.log('listenging 3344')

// function setCookie(cname, cvalue, exdays) {
//   const d = new Date()
//   d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000)
//   const expires = 'expires=' + d.toUTCString()
//   return (document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/')
// }

// function deleteCookie(cname) {
//   const d = new Date()
//   const expires = 'expires=' + d.toUTCString()
//   return (document.cookie = cname + '=' + ';' + expires + ';path=/')
// }

function getCookie(cname) {
  const cookieObj = document.cookie.split(';').reduce((prev, curr) => {
    const entry = curr.split('=')
    prev[entry[0].trim()] = entry[1]
    return prev
  }, {})
  if (cname) return cookieObj[cname]
  return cookieObj
}
