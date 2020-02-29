// const http = require('http')
// const fs = require('fs')

// const server = http.createServer((req, res) => {
//   console.log('cookies', req.headers['cookie'])
//   res.writeHead(200, {})
//   res.end('<html><a href="http://www.baidu.com">去另一个页面</a></html>')
// })

// server.listen(80)
// console.log('listenging 80')
const add10KStr = new Array(1024).fill('0000000000').join('') // 10240 Byte => 10K
const add1KStr = new Array(1024).fill('1').join('') // 1024 Byte => 1K
const storageKey = 'QuotaTest'

function sessionStorageQuota() {
  sessionStorage.clear()
  function setText(str) {
    console.log(str)
  }
  let total = ''
  let interval = null
  interval = setInterval(() => {
    try {
      setText(`数据插入中 => ${total.length / 1024}K`)
      sessionStorage.removeItem(storageKey)
      sessionStorage.setItem(storageKey, total + add1KStr)
      total += add10KStr
    } catch (e) {
      clearInterval(interval)
      if (e && e.code === 22) {
        setText('超过容量(10K增加)')
        setText(`当前存储了${total.length / 1024}K`)
        interval = setInterval(() => {
          try {
            setText(`数据插入中 => ${total.length / 1024}K`)
            sessionStorage.removeItem(storageKey)
            sessionStorage.setItem(storageKey, total + add1KStr)
            total += add1KStr
          } catch (ee) {
            clearInterval(interval)
            if (ee && ee.code === 22) {
              console.log({ e })
              setText('超过容量(1K增加)')
              setText(`当前存储了${total.length / 1024}K`)
            }
          }
        }, 0)
      }
    }
  }, 0)
}
sessionStorageQuota()
