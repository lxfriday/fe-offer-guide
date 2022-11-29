const race = Promise.race

/**
 *
 * @param {array<Promise>} promises
 */
Promise.race = function (promises) {
  console.log('this is my promise.race')
  return new Promise(function (resolve, reject) {
    for(const promise of promises) {
      Promise.resolve(promise).then(res => {
        resolve(res)
      }).catch(e => {
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

Promise.race([p1, p2, p3])
  .then(res => {
    console.log(res)
  })
  .catch(e => {
    console.log('promise.race error', e)
  })
