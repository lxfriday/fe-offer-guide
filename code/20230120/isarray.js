const arr = ['a', 'b', 'c', 'd']

// for (var i = 0; i < arr.length; i++) {
//   setTimeout(() => {
//     console.log(i)
//   }, 0)
// }

for (var i = 0; i < arr.length; i++) {
  ;((k) => {
    setTimeout(() => {
      console.log(k)
    }, 0)
  })(i)
}
