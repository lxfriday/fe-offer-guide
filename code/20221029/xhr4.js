const xhr = new XMLHttpRequest()
xhr.open('POST', 'https://api.x.com/setUInfo')
xhr.withCredentials = true
xhr.responseType = 'json'
xhr.setRequestHeader('content-type', 'application/json')

xhr.onreadystatechange = function (e) {
  if (xhr.readyState === 4) {
    console.log('status', xhr.status)
    console.log('statusText', xhr.statusText)
    console.log('content-type', xhr.getResponseHeader('content-type'))

    const data = xhr.response
    // 写一些业务
  }
}

xhr.upload.onprogress = function (e) {
  console.log('onprogress', e)
  console.log('上传进度', `${Math.floor((e.loaded / e.total) * 100)} %`)
}

xhr.onprogress = function (e) {
  console.log('onprogress', e)
  console.log('下载进度', `${Math.floor((e.loaded / e.total) * 100)} %`)
}

xhr.timeout = 2000
xhr.ontimeout = function () {
  console.log('请求超时啦')
}

xhr.onabort = function () {
  console.log(`%cu abort me`, 'color: red')
}
xhr.send(
  JSON.stringify({
    name: 'yunyuv',
    age: 10086000,
  }),
)
