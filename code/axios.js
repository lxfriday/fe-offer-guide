// axios({
//   method: 'POST',
//   url: 'http://test.com:3457/receiveFormData',
//   headers: {
//     'x-request-id': '100123456465',
//     'Content-Type': 'multipart/form-data',
//   },
//   data: formData,
// }).then(response => {
//   console.log({ response })
// })

const abortController = new AbortController()
const signal = abortController.signal

axios({
  signal,
  method: 'GET',
  url: 'https://qiniu1.lxfriday.xyz/feoffer/vuejs-book.pdf',
  headers: {},
  onDownloadProgress: function (progressEvent) {
    // Do whatever you want with the native progress event
    console.log('progressEvent', progressEvent)
  },
}).then(
  response => {
    console.log({ response })
  },
  error => {
    console.log('err', error)
  }
)

setTimeout(() => {
  abortController.abort()
}, 6000)
