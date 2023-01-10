const rl = require('readline').createInterface({ input: process.stdin })
const iter = rl[Symbol.asyncIterator]()
const readline = async () => (await iter.next()).value

;(async () => {
  const n = parseInt(await readline())
  const arr = (await readline()).split(' ').map((_, i) => [+_, i + 1])
  arr.sort((a, b) => a[0] - b[0])
  let sum = 0
  for (let i = 0; i < n; i++) {
    sum += arr[i][0] * (n - i - 1)
  }
  console.log(arr.map(_ => _[1]).join(' '))
  const divide = sum / n
  const split = divide.toString().split('.')
  if(split.length === 1) console.log(divide + '.00')
  else {
    if(split[1].length === 1) console.log(`${split[0]}.${split[1]}0`)
    else {
      console.log(`${split[0]}.${split[1].slice(0, 2)}`)
    }
  }
})()
