const data = []
for(let i=0;i<80000000;i++) {
  data.push(Math.random())
}

console.time('for')
for (let i = 0; i < data.length; i++) {}
console.timeEnd('for')

console.time('while')
let j = 0
while (j < data.length) {
  j++
}
console.timeEnd('while')


console.time('forin')
for (const key in data) {}
console.timeEnd('forin')

console.time('forof')
for (const value of data) {}
console.timeEnd('forof')

console.time('arr.map')
data.map(() => {})
console.timeEnd('arr.map')

console.time('arr.forEach')
data.forEach(() => {})
console.timeEnd('arr.forEach')