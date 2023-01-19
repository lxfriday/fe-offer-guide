// const tasks = new Array(10).fill(0).map(
//   (_, i) =>
//     new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve((i + 1) * 100)
//       }, (i + 1) * 100)
//     }),
// )

// function paraRequest(reqs, limit) {
//   return new Promise((resolve, reject) => {
//     const ret = []
//     let i = 0,
//       cnt = 0
//     for (let k = 0; k < Math.min(limit, reqs.length); k++) {
//       run()
//     }
//     function run() {
//       if (i >= reqs.length) {
//         return
//       }
//       let idx = i
//       i++
//       reqs[idx].then(data => {
//         ret[idx] = data
//         console.log(idx)
//         cnt++
//         run()
//         if (cnt >= reqs.length) {
//           resolve(ret)
//         }
//       })
//     }
//   })
// }

// paraRequest(tasks.reverse(), 4).then(res => {
//   console.log('res data', res)
// })

// // Promise.all(tasks).then(d => {
// //   console.log('d', d)
// // })
