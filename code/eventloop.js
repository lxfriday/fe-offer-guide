process.nextTick(() => {
  console.log('tick1')
})

new Promise(res => res(1)).then(d => console.log('promise2'))

Promise.resolve(1).then(() => {
  console.log('promise')
})

process.nextTick(() => {
  console.log('tick2')
})
