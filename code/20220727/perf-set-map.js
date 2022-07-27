console.time('prepare')
const count = 10000000
const data = new Array(count)
  .fill(0)
  .map(_ => Math.floor(Math.random() * count))
const dataArr = data.map((_, i) => [_, i])

const s = new Set([...data])
const m = new Map(dataArr)
console.timeEnd('prepare')

console.time('arr.includes')
console.log('arr.includes -> ', data.includes(10000000))
console.timeEnd('arr.includes')

console.time('set.has')
console.log('set.has -> ', s.has(100))
console.timeEnd('set.has')

console.time('map.has')
console.log('map.has -> ', m.has(100))
console.timeEnd('map.has')

console.time('map.get')
console.log('map.get -> ', m.get(100))
console.timeEnd('map.get')
