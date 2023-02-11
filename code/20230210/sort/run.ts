import quickSort from './quickSort'
import mergeSort from './mergeSort'
import heapSort from './heapSort'
import bubbleSort from './bubbleSort'
import selectionSort from './selectionSort'
import insectionSort from './insectionSort'
import countingSort from './countingSort'
import bucketSort from './bucketSort'
const data = new Array(100000)
  .fill(0)
  .map(_ => Math.floor(Math.random() * 100000))
console.time('original sort')
const originalSortRes = JSON.stringify([...data].sort((a, b) => a - b))
console.timeEnd('original sort')

console.time('quickSort')
console.log(
  'quickSort',
  JSON.stringify(quickSort([...data])) === originalSortRes,
)
console.timeEnd('quickSort')
console.time('mergeSort')
console.log(
  'mergeSort',
  JSON.stringify(mergeSort([...data])) === originalSortRes,
)
console.timeEnd('mergeSort')
console.time('heapSort')
console.log('heapSort', JSON.stringify(heapSort([...data])) === originalSortRes)
console.timeEnd('heapSort')
console.time('bubbleSort')
console.log(
  'bubbleSort',
  JSON.stringify(bubbleSort([...data])) === originalSortRes,
)
console.timeEnd('bubbleSort')
console.time('selectionSort')
console.log(
  'selectionSort',
  JSON.stringify(selectionSort([...data])) === originalSortRes,
)
console.timeEnd('selectionSort')
console.time('insectionSort')
console.log(
  'insectionSort',
  JSON.stringify(insectionSort([...data])) === originalSortRes,
)
console.timeEnd('insectionSort')
console.time('countingSort')
console.log(
  'countingSort',
  JSON.stringify(countingSort([...data])) === originalSortRes,
)
console.timeEnd('countingSort')
console.time('bucketSort')
console.log(
  'bucketSort',
  JSON.stringify(bucketSort([...data])) === originalSortRes,
)
console.timeEnd('bucketSort')
