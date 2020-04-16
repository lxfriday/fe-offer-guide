const abortController = new AbortController()
const abortSignal = abortController.signal

const stopButton = document.getElementById('stop')

abortSignal.onabort = function onabort() {
  console.log('onabort')
}

stopButton.addEventListener('click', () => abortController.abort())

fetch('https://qiniu1.lxfriday.xyz/feoffer/vuejs-book.pdf', {
  method: 'GET',
  credentials: 'omit',
  signal: abortSignal,
})
  .then(res => {
    console.log('res', res)
    return res.json()
  })
  .then(data => {
    console.log('fetch data', data)
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
