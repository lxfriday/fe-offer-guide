// const obj = {
//   data: ['a', 'b', 'c', 'd', 'e'],
//   *[Symbol.iterator]() {
//     for (let i = 0; i < this.data.length; i++) {
//       yield this.data[i]
//     }
//   },
// }
const obj = {
  data: ['a', 'b', 'c', 'd', 'e'],
  [Symbol.iterator]() {
    const data = this.data
    let i = 0
    return {
      next() {
        return {
          done: i >= data.length,
          value: data[i++],
        }
      },
    }
  },
}

for (const d of obj) {
  console.log(d)
}
// a
// b
// c
// d
// e
