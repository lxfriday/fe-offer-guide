class MyPromise {
  static PENGDING = 'PENGDING'
  static FULFILLED = 'FULFILLED'
  static REJECTED = 'REJECTED'
  static resolve(data) {
    return new MyPromise((res, rej) => res(data))
  }
  static reject(data) {
    return new MyPromise((res, rej) => rej(data))
  }
  constructor(func) {
    const that = this
    this.resolveData = null
    this.onFulfilledCallbacks = []
    this.rejectData = null
    this.onRejectedCallbacks = []
    this.status = MyPromise.PENGDING
    function resolve(data) {
      if (that.status === MyPromise.PENGDING) {
        if (data instanceof MyPromise) {
          data.then(
            d => {
              resolve(d)
            },
            e => {
              reject(e)
            },
          )
        } else {
          that.status = MyPromise.FULFILLED
          that.resolveData = data
          for (const cb of that.onFulfilledCallbacks) {
            cb && cb(data)
          }
        }
      }
    }
    function reject(data) {
      if (that.status === MyPromise.PENGDING) {
        if (data instanceof MyPromise) {
          data.then(
            d => {
              reject(d)
            },
            e => {
              reject(e)
            },
          )
        } else {
          that.status = MyPromise.REJECTED
          that.rejectData = data
          for (const cb of that.onRejectedCallbacks) {
            cb && cb(data)
          }
        }
      }
    }
    try {
      func && func(resolve, reject)
    } catch (e) {
      reject(e)
    }
  }

  then(onFulfilledCallback, onRejectedCallback) {
    return new MyPromise((res, rej) => {
      if (this.status === MyPromise.FULFILLED) {
        try {
          if (onFulfilledCallback) res(onFulfilledCallback(this.resolveData))
          else res(this.resolveData)
        } catch (e) {
          rej(e)
        }
      } else if (this.status === MyPromise.REJECTED) {
        try {
          if (onRejectedCallback) res(onRejectedCallback(this.rejectData))
          else rej(e)
        } catch (e) {
          rej(e)
        }
      } else {
        this.onFulfilledCallbacks.push(data => {
          try {
            if (onFulfilledCallback) res(onFulfilledCallback(data))
            else res(data)
          } catch (e) {
            rej(e)
          }
        })
        this.onRejectedCallbacks.push(data => {
          try {
            if (onRejectedCallback) res(onRejectedCallback(data))
            else rej(data)
          } catch (e) {
            rej(e)
          }
        })
      }
    })
  }

  catch(onRejectedCallback) {
    return new MyPromise((res, rej) => {
      if (this.status === MyPromise.FULFILLED) {
        res()
      } else if (this.status === MyPromise.REJECTED) {
        try {
          if (onRejectedCallback) res(onRejectedCallback(this.rejectData))
          else rej(this.rejectData)
        } catch (e) {
          rej(e)
        }
      } else {
        this.onFulfilledCallbacks.push(() => {
          res()
        })
        this.onRejectedCallbacks.push(data => {
          try {
            if (onRejectedCallback) res(onRejectedCallback(data))
            else rej(data)
          } catch (e) {
            rej(e)
          }
        })
      }
    })
  }

  finally(finallyCallback) {
    if (this.status === MyPromise.FULFILLED) {
      finallyCallback()
    } else if (this.status === MyPromise.REJECTED) {
      finallyCallback()
    } else {
      this.onFulfilledCallbacks.push(data => {
        finallyCallback()
      })
      this.onRejectedCallbacks.push(data => {
        finallyCallback()
      })
    }
  }

  /**
   *
   * @param {Array<MyPromise>} promises
   * @returns
   */
  static all(promises) {
    return new MyPromise((res, rej) => {
      let cnt = 0
      const ret = []
      for (let i = 0; i < promises.length; i++) {
        if (promises[i] instanceof MyPromise) {
          promises[i].then(
            data => {
              ret[i] = data
              cnt++
              if (cnt === promises.length) res(ret)
            },
            e => {
              rej(e)
            },
          )
        } else {
          ret[i] = promises[i]
        }
      }
    })
  }
  /**
   *
   * @param {Array<MyPromise>} promises
   * @returns
   */
  static race(promises) {
    return new MyPromise((res, rej) => {
      for (let i = 0; i < promises.length; i++) {
        if (promises[i] instanceof MyPromise) {
          promises[i]
            .then(data => {
              res(data)
            })
            .catch(e => {
              rej(e)
            })
        }
      }
    })
  }
}

// new Promise((res, rej) => {
//   res(
//     new MyPromise((ress, rejj) => {
//       rejj(111)
//     }),
//   )
// }).then(
//   d => {
//     console.log('res => ', d)
//   },
//   d => {
//     console.log('rej => ', d)
//   },
// )

// new MyPromise((res, rej) => {
//   fsdfsdfs
// }).then(
//   d => {
//     console.log('res => ', d)
//   },
//   d => {
//     console.log('rej => ', d)
//   },
// )

MyPromise.resolve(
  new MyPromise(res => {
    setTimeout(() => {
      res(1)
    }, 300)
  }),
)
  .then(data => {
    console.log('data here', data)
    fsdfsd
  })
  .catch(e => {
    console.log('this is the error', e)
    return 'catch'
  })
  .then(d => {
    console.log('final then ', d)
    fafasdf
    return 10086
  })
  .finally(() => {
    console.log('finally', data)
  })


// const p0 = new MyPromise((res, rej) => {
//   setTimeout(() => {
//     rej(50)
//   }, 50)
// })
// const p1 = new MyPromise(res => {
//   setTimeout(() => {
//     res(100)
//   }, 100)
// })
// const p2 = new MyPromise(res => {
//   setTimeout(() => {
//     res(200)
//   }, 200)
// })
// const p3 = new MyPromise(res => {
//   setTimeout(() => {
//     res(300)
//   }, 300)
// })
// const p4 = new MyPromise(res => {
//   setTimeout(() => {
//     res(400)
//   }, 400)
// })
// MyPromise.race([p0, p1, p2, p3, p4]).then(
//   data => {
//     console.log('promise.race', data)
//   },
//   err => {
//     console.log('err', err)
//   },
// )

// new MyPromise((res, rej) => {
//   setTimeout(() => {
//     res('res')
//   }, 100)
//   setTimeout(() => {
//     rej('rej')
//   }, 100)
// }).then(
//   d => {
//     console.log('res => ', d)
//   },
//   d => {
//     console.log('rej => ', d)
//   },
// )

// new MyPromise((res, rej) => {
//   dasdaa
//   setTimeout(() => {
//     rej(1)
//   }, 1000)
// })
//   .then(
//     data => {
//       console.log('res1', data)
//       return 2
//     },
//     data => {
//       console.log('rej1', data)
//       return 2
//     },
//   )
//   .then(
//     data => {
//       console.log('res2', data)
//       return 3
//     },
//     data => {
//       console.log('rej2', data)
//       return 3
//     },
//   )
//   .then(
//     data => {
//       console.log('res3', data)
//       return 4
//     },
//     data => {
//       console.log('rej3', data)
//       return 4
//     },
//   )

// new Promise((res, rej) => {
//   rej('error')
// }).then(() => {}, (err) => {
//   console.log('reject 1', err)
//   return err
// }).then((d) => {
//   console.log('resolve 2', d)
// }, (d) => {
//   console.log('reject 2', d)
// })

// MyPromise.resolve(
//   new MyPromise(res => {
//     setTimeout(() => {
//       res(100)
//     }, 1000)
//   }),
// )
//   .then(data => {
//     console.log('resolve data', data)
//   })
//   .catch(e => {
//     console.log('err data', e)
//   })
