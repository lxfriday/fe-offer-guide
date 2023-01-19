// function Fibonacci(n, prev1 = 1, prev2 = 0) {
//   if (n === 1) return prev1
//   return Fibonacci(n - 1, prev1 + prev2, prev1)
// }

// function Fibonacci(n) {
//   const init = [1, 0]
//   for (let i = 1; i < n; i++) {
//     ;[init[0], init[1]] = [init[0] + init[1], init[0]]
//   }
//   return init[0]
// }

// const Fibonacci = (function () {
//   var mem = [0, 1]
//   var f = function (n) {
//     var res = mem[n]
//     if (typeof res !== 'number') {
//       mem[n] = f(n - 1) + f(n - 2)
//       res = mem[n]
//     }
//     return res
//   }
//   return f
// })()

// // 1 1 2 3 5 8 13 21 34 55 89
// console.log(Fibonacci(9))
// console.log(Fibonacci(10))
// console.log(Fibonacci(100000))

function calc(n) {
  const res = []
  let prev = n
  let i = 2

  while (i <= prev) {
    if (prev % i === 0) {
      res.push(i)
      prev /= i
      i = 2
    } else if (i < prev) {
      i++
    } else if (i === prev) {
      res.push(i)
      break
    }
  }
  console.log(res)

  return res
}

calc(2) // [2]
calc(8) // [2, 2, 2]
calc(24) // [2, 2, 2, 3]
calc(30) // [2, 3, 5]
