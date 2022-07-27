console.time('prepare')
const count = 20000000
const data = new Array(count)
  .fill(0)
  .map(_ => Math.floor(Math.random() * count))
const dataArr = data.map((_, i) => [_, i])

const s = new Set([...data])
const m = new Map(dataArr)
console.timeEnd('prepare')

console.time('arr')
console.log('arr -> ', data.includes(10000000))
console.timeEnd('arr')

console.time('set')
console.log('set -> ', s.has(10000000))
console.timeEnd('set')

console.time('map')
console.log('map -> ', m.has(10000000))
console.timeEnd('map')
