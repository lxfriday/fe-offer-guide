function genRunner(genFunc) {
  return new Promise((resolve, reject) => {
    const r = genFunc()
    runTask()
    function runTask(init) {
      const { value: p, done } = r.next(init)
      Promise.resolve(p)
        .then(data => {
          if (!done) runTask(data)
          else resolve(data)
        })
        .catch(e => {
          reject(e)
        })
    }
  })
}

const ps = new Array(5).fill(0).map(
  (_, i) => () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve((i + 1) * 100)
      }, (i + 1) * 100)
    }),
)


function* calc(tasks) {
  let sum = yield 1
  for(const task of tasks) {
    const d = yield task()
    console.log(d)
    sum += d
  }
  return sum
}

genRunner(calc.bind(null, ps.reverse()))
  .then(d => {
    console.log('resultData', d)
  })
  .catch(e => {
    console.log('err', e)
  })
