const rl = require('readline').createInterface({ input: process.stdin })
var iter = rl[Symbol.asyncIterator]()
const readline = async () => (await iter.next()).value

void (async function () {
  // Write your code here
  const m = {}
  ;[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'].forEach(
    (_, i) => (m[_] = i),
  )
  console.log(m)
  while ((line = await readline())) {
    let tokens = line.split(' ')
    let a = tokens[0].slice(2)
    let ret = 0
    for (let i = 0; i < a.length; i++) {
      ret += m[a[i]] * 16 ** (a.length - i - 1)
    }
    console.log(ret)
  }
})()
