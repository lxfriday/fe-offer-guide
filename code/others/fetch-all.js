// fetch('http://localhost:3457?name=lxfriday', {}).then(response => {
//   console.log('success', response)
// })

// fetch('http://localhost:3457/addUser', {
//   method: 'POST',
//   headers: {
//     'x-request-id': 1008611123456,
//   },
// }).then(response => {
//   console.log('success', response)
// })
const abortController = new AbortController()
const signal = abortController.signal

const fd = new FormData()
fd.append('name', '懒羊羊')
fd.append('sex', 'male')
fd.append('age', 1008711)

function download() {
  fd.append('img', document.querySelector('input[name=file]').files[0])

  fetch('http://test.com:3457/receiveFormData', {
    signal: signal,
    method: 'POST',
    headers: {
      'x-request-id': 1008611123456,
    },
    body: fd,
    credentials: 'omit',
  })
    .then(
      response => {
        console.log('response', response);
        return response.body
      },
      err => {
        console.log('error', err)
      }
    )
    .then(
      body => {
        console.log('body', body)
        const reader = body.getReader()
        let bytesReceived = 0
        reader.read().then(function processResult(result) {
          console.log('result', result)
          if (result.done) {
            console.log('下载完成')
            return
          }
          bytesReceived += result.value.length
          console.log(`received ${(bytesReceived / 1024 / 1024).toFixed(2)} M`)

          setTimeout(() => {
            reader.read().then(processResult)
          })
        })
      },
      err => {
        console.log('error', err)
      }
    )
}

document.querySelector('#abort').addEventListener('click', function () {
  abortController.abort()
})
document.querySelector('#download').addEventListener('click', download)

signal.onabort = function (info) {
  console.log('abort', info)
}
