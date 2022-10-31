const xhr = new XMLHttpRequest()
xhr.open('POST', 'https://api.x.com/setUInfo')
xhr.withCredentials = true
xhr.responseType = 'json'
xhr.setRequestHeader('content-type', 'application/json')

xhr.onreadystatechange = function(e) {
  if(xhr.readyState === 4) {
    console.log('status', xhr.status)
    console.log('statusText', xhr.statusText)
    console.log('content-type', xhr.getResponseHeader('content-type'))

    const data = xhr.response
    // 写一些业务
  }
}

xhr.upload.onprogress = function (e) {
  console.log('onprogress', e)
  console.log('上传进度', `${Math.floor(e.loaded / e.total * 100)} %`)
}

xhr.onprogress = function (e) {
  console.log('onprogress', e)
  console.log('下载进度', `${Math.floor(e.loaded / e.total * 100)} %`)
}



xhr.timeout = 2000
xhr.ontimeout = function () {
  console.log('请求超时啦')
}
xhr.onabort = function () {
  console.log(`%cu abort me`,'color: red')
}
xhr.send(JSON.stringify({
  name: 'yunyuv', 
  age: 10086000, 
}))



// xhr.responseType = 'text'
// xhr.responseType = 'document'
// xhr.responseType = 'blob'
// xhr.responseType = 'arraybuffer'

// xhr.onreadystatechange = function(e) {
//   if(xhr.readyState === 4) {
//     console.log('response', xhr.response)
//     console.log('responseType', xhr.responseType)
//     console.log('responseURL', xhr.responseURL)
//     // 写一些业务
//   }
// }


// xhr.onreadystatechange = function(e) {
//   if(xhr.readyState === 4) {
//     console.log('response', xhr.response)
//     console.log('etag', xhr.getResponseHeader('etag'))
//     console.log('content-type', xhr.getResponseHeader('content-type'))
//     console.log('Content-Type', xhr.getResponseHeader('Content-Type'))
//     console.log('ContentType', xhr.getResponseHeader('ContentType'))
//     // 写一些业务
//   }
// }


// xhr.setRequestHeader('b', 2)
// xhr.setRequestHeader('c', 3)

const str = '123456'
const json = JSON.stringify({
  a: 1, 
  b: 2, 
  c: 3, 
})
const urlsp = new URLSearchParams()
urlsp.append('a', 1)
urlsp.append('b', 2)
urlsp.append('c', 3)
const fd = new FormData()
fd.append('a', 1)
fd.append('b', 2)
fd.append('c', 3)

// xhr.send(str) // '123456'
// xhr.send(json) // '{"a":1,"b":2,"c":3}'
// xhr.send(urlsp) // 'a=1&b=2&c=3'
xhr.send(fd)
// xhr.onabort = function () {
//   console.log(`%cu abort me`,'color: red')
// }
