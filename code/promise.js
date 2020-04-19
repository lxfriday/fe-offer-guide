class MPromise {
  constructor(executor) {
    this.stateCons = {
      PENDING: 'PENDING',
      FULFILLELD: 'FULFILLELD',
      REJECTED: 'REJECTED',
    }
    this.state = this.stateCons.PENDING
    this.value = undefined
    this.reason = undefined
    this.onResolvedCallbacks = []
    this.onRejectedCallbacks = []

    let resolve = value => {
      if (this.state === this.stateCons.PENDING) {
        this.state = this.stateCons.FULFILLELD
        this.value = value

        this.onResolvedCallbacks.forEach(f => f())
      }
    }
    let reject = reason => {
      if (this.state === this.stateCons.PENDING) {
        this.state = this.stateCons.REJECTED
        this.reason = reason

        this.onRejectedCallbacks.forEach(f => f())
      }
    }

    try {
      // Promise 构造函数传入的参数
      executor(resolve, reject)
    } catch (err) {
      reject(err)
    }
  }

  then(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value
    onRejected =
      typeof onRejected === 'function'
        ? onRejected
        : err => {
            throw err
          }

    let p = new MPromise((resolve, reject) => {
      if (this.state === this.stateCons.FULFILLELD) {
        setTimeout(() => {
          try {
            let x = onFulfilled(this.value)
            resolvePromise(p, x, resolve, reject)
          } catch (e) {
            reject(e)
          }
        })
      } else if (this.state === this.stateCons.REJECTED) {
        setTimeout(() => {
          try {
            let x = onRejected(this.reason)
            resolvePromise(p, x, resolve, reject)
          } catch (e) {
            reject(e)
          }
        })
      } else if (this.state === this.stateCons.PENDING) {
        this.onResolvedCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onFulfilled(this.value)
              resolvePromise(p, x, resolve, reject)
            } catch (e) {
              reject(e)
            }
          })
        })
        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onRejected(this.reason)
              resolvePromise(p, x, resolve, reject)
            } catch (e) {
              reject(e)
            }
          })
        })
      }
    })

    return p
  }

  static resolve(arg) {
    return new MPromise(res => res(arg))
  }

  static reject(arg) {
    return new MPromise((res, rej) => rej(arg))
  }

  static race(promises) {
    return new MPromise((resolve, reject) => {
      promises.forEach(p => {
        p.then(resolve, reject)
      })
    })
  }

  static all(promises) {
    const ret = []
    let length = 0
    function processData(v, i, resolve) {
      ret[i] = v
      length++
      if (promises.length === length) {
        resolve(ret)
      }
    }
    return new MPromise((resolve, reject) => {
      promises.forEach((p, i) => {
        p.then(v => {
          processData(v, i, resolve)
        }, reject)
      })
    })
  }
}

function resolvePromise(p, x, resolve, reject) {
  // 禁止无限循环
  if (x === p) {
    return reject(new TypeError('检测到无限循环'))
  }
  // 防止多次调用
  let called

  if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
    try {
      let then = x.then

      if (typeof then === 'function') {
        then.call(
          x,
          y => {
            if (called) return
            called = true
            resolvePromise(p, y, resolve, reject)
          },
          err => {
            if (called) return
            called = true
            reject(err)
          }
        )
      } else {
        resolve(x)
      }
    } catch (e) {
      if (called) return
      called = true
      reject(e)
    }
  } else {
    resolve(x)
  }
}

// test-start
console.log('------------------ test start -------------------')

new MPromise(res => {
  res(1)
}).then(d => console.log('1 => ', d))

MPromise.resolve(2).then(d => {
  console.log('2 => ', d)
})

MPromise.reject(3)
  .then(null)
  .then(null, err => console.log('3 => ', err))

const p1 = new MPromise(res =>
  setTimeout(() => {
    res(100)
  }, 100)
)

const p2 = new MPromise(res =>
  setTimeout(() => {
    res(200)
  }, 200)
)

const p3 = new MPromise(res =>
  setTimeout(() => {
    res(300)
  }, 300)
)

MPromise.race([p1, p2, p3]).then(d => console.log('100 => ', d))

MPromise.all([p1, p2, p3]).then(
  d => console.log('[100, 200, 300] => ', d),
  err => console.log('err', err)
)
