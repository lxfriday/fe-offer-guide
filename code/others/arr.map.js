function map(arr, iteratee) {
  let index = -1

  while (++index < arr.length) {
    iteratee(arr[index], index, arr)
  }
}

map(['a', 'b', 'c', 'd'], (v, i) => {
  console.log(v + ' => ' + i)
})
