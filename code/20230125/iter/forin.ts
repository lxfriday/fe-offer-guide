const prototype = { pos: 'in prototype', c: 3 }

Object.defineProperty(prototype, 'd', {
  value: 4,
  enumerable: false,
})

const obj = Object.create(prototype, {
  a: {
    value: 1,
    enumerable: true,
  },
  b: {
    value: 2,
    enumerable: false,
  },
})
for(const key in obj) {
  console.log(`${key} => ${obj[key]}`)
}