function paraRequests(reqs: Promise<number>[], limit: number) {
  return new Promise<number[]>((resolve, reject) => {
    const ret: number[] = [],
      len = reqs.length
    let i = 0,
      cnt = 0
    for (let k = 0; k < limit; k++) {
      run()
    }
    function run() {
      if (i >= len) return
      let idx = i++
      reqs[idx].then(d => {
        ret[idx] = d
        cnt++
        console.log('d', d)
        if (cnt === len) resolve(ret)
        run()
      })
    }
  })
}

const tasks: Promise<number>[] = []
for (let w = 0; w < 20; w++) {
  tasks.push(
    new Promise<number>((resolve, reject) => {
      const num = Math.floor(Math.random() * 100) * 10
      setTimeout(() => {
        resolve((w + 1) * 100)
      }, (w + 1) * 100)
    }),
  )
}

console.time('log')
paraRequests(tasks.reverse(), 10).then(data => {
  console.log('data', data)
  console.timeEnd('log')
})
