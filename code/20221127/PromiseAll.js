const all = Promise.all

/**
 *
 * @param {array<Promise>} promises
 */
Promise.all = function (promises) {
  console.log('this is my promise.all')
  const n = promises.length,
    ret = []
  return new Promise(function (resolve, reject) {
    for (let i = 0; i < n; i++) {
      const promise = promises[i]
      promise
        .then(res => {
          ret[i] = res
          if (ret.length === n) {
            resolve(ret)
          }
        })
        .catch(e => {
          reject(e)
        })
    }
  })
}

const p1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve(1000)
  }, 1000)
})
const p2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve(2000)
  }, 2000)
})
const p3 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve(3000)
  }, 3000)
})
const p4 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    reject('error')
  }, 500)
})

Promise.all([p1, p2, p3, p4])
  .then(res => {
    console.log(res)
  })
  .catch(e => {
    console.log('promise.all error', e)
  })
