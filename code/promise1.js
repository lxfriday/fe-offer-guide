class Promise {
  constructor(executor) {
    this.stateCons = {
      PENDING: 'PENDING',
      FULFILLED: 'FULFILLED',
      REJECTED: 'FULFILLED',
    }
    this.state = this.stateCons.PENDING
    this.value = undefined
    this.reason = undefined
    this.onFulfilledCallbacks = []
    this.onRejectedCallbacks = []

    let resolve = value => {
      if (this.state === this.stateCons.PENDING) {
        this.state = this.stateCons.FULFILLED
        this.value = value

        this.onFulfilledCallbacks.forEach(f => f())
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
      executor(resolve, reject)
    } catch (e) {
      reject(e)
    }
  }

  then(onFulFilled, onRejected) {
    let p = new Promise((resolve, reject) => {
      onFulFilled = typeof onFulFilled === 'function' ? onFulFilled : v => v
      onRejected =
        typeof onRejected === 'function'
          ? onRejected
          : err => {
              throw err
            }

      if (this.state === this.stateCons.FULFILLED) {
        try {
          let x = onFulFilled(this.value)
          resolvePromise(x, p, resolve, reject)
        } catch (e) {
          reject(e)
        }
      } else if (this.state === this.stateCons.REJECTED) {
        try {
          let x = onRejected(this.reason)
          resolvePromise(x, p, resolve, reject)
        } catch (e) {
          reject(e)
        }
      } else if (this.state === this.stateCons.PENDING) {
        this.onFulfilledCallbacks.push(() => {
          let x = onFulFilled(this.value)
          resolvePromise(x, p, resolve, reject)
        })
        this.onFulfilledCallbacks.push(() => {
          let x = onRejected(this.reason)
          resolvePromise(x, p, resolve, reject)
        })
      }
    })

    return p
  }
}

function resolvePromise(x, p, resolve, reject) {
  if (x === p) {
    return reject('无限循环')
  }

  let called

  if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
    let then = x.then
    if (typeof x.then === 'function') {
      try {
        then.call(
          x,
          value => {
            if (called) return
            called = true
            resolve(value)
          },
          err => {
            if (called) return
            called = true
            reject(err)
          }
        )
      } catch (e) {
        reject(e)
      }
    } else {
      if (called) return
      called = true
      resolve(x)
    }
  } else {
    resolve(x)
  }
}
