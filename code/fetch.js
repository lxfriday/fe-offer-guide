fetch('https://qiniu1.lxfriday.xyz/feoffer/vuejs-book.pdf', {
  method: 'GET',
})
  .then(res => {
    return res.body
  })
  .then(body => {
    const reader = body.getReader()
    let bytesReceived = 0
    // read() returns a promise that resolves when a value has been received
    reader.read().then(function processResult(result) {
      // Result objects contain two properties:
      // done  - true if the stream has already given you all its data.
      // value - some data. Always undefined when done is true.
      if (result.done) {
        console.log('Fetch complete')
        return
      }
      // result.value for fetch streams is a Uint8Array
      bytesReceived += result.value.length
      console.log('接收到 ' + (bytesReceived / 1024 / 1024).toFixed(2) + 'M')

      setTimeout(() => {
        // Read some more, and call this function again
        reader.read().then(processResult)
      })
    })
  })

// const abortController = new AbortController()
// const abortSignal = abortController.signal

// const stopButton = document.getElementById('stop')

// abortSignal.onabort = function onabort() {
//   console.log('onabort')
// }

// stopButton.addEventListener('click', () => abortController.abort())

// MyFetch('https://qiniu1.lxfriday.xyz/feoffer/vuejs-book.pdf', {
//   method: 'GET',
//   credentials: 'omit',
//   signal: abortSignal,
//   timeout: 5, // 5 秒之后超时
//   ontimeout() {
//     console.log('ontimeout')
//   },
// })
//   .then(res => {
//     console.log('res', res)
//     return res.json()
//   })
//   .then(data => {
//     console.log('fetch data', data)
//   })

// function MyFetch(...args) {
//   const that = this
//   return new Promise((resolve, reject) => {
//     const { timeout, ontimeout } = args[1]

//     this.timer = setTimeout(() => {
//       resolve(
//         fetch(args[0], {
//           ...args[1],
//         })
//       )
//     }, timeout)
//   })
// }

// MyFetch.prototype.abort
