function add0(a: number, b: number, c: number) {
  return a + b + c
}
function add1(a: number) {
  return (b: number) => {
    return (c: number) => {
      return a + b + c
    }
  }
}

const ad = add1(1)(2)
console.log(ad(3))
console.log(ad(4))
console.log(ad(5))
