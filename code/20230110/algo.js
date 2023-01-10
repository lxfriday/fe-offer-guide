const rl = require('readline').createInterface({ input: process.stdin })
const iter = rl[Symbol.asyncIterator]()
const readline = async () => (await iter.next()).value

;(async () => {
  let [N, m] = (await readline()).split(' ').map(_ => +_)
  N /= 10
  const zhujian = []
  const fujian = {}
  for (let i = 1; i <= m; i++) {
    const line = await readline()
    const [v, p, q] = line.split(' ')
    if (+q > 0) {
      if (!fujian[+q]) fujian[+q] = []
      fujian[+q].push([+v / 10, +p])
    } else {
      zhujian.push([+v / 10, +p, i])
    }
  }

  const data = []
  for (let i = 0; i < zhujian.length; i++) {
    const [v0, p0, idx] = zhujian[i]
    const satis0 = v0 * p0
    const arr = [[v0, satis0]]
    if (fujian[idx]) {
      const [v1, p1] = fujian[idx][0]
      const satis1 = v1 * p1
      arr.push([v0 + v1, satis0 + satis1])
      if (fujian[idx][1]) {
        const [v2, p2] = fujian[idx][1]
        const satis2 = v2 * p2
        arr.push([v0 + v2, satis0 + satis2])
        arr.push([v0 + v1 + v2, satis0 + satis1 + satis2])
      }
    }
    data.push(arr)
  }
  console.log('data', data)
  const dp = new Array(data.length).fill(0).map(_ => new Array(N + 1).fill(0))
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j <= N; j++) {
      dp[i][j] = i - 1 >= 0 ? dp[i - 1][j] : 0
      for (let k = 0; k < data[i].length; k++) {
        if (j >= data[i][k][0]) {
          dp[i][j] = Math.max(
            dp[i][j],
            (i - 1 >= 0 ? dp[i - 1][j - data[i][k][0]] : 0) + data[i][k][1],
          )
        }
      }
    }
  }
  console.log(dp[data.length - 1][N] * 10)
})()
