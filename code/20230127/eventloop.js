Promise.resolve().then(() => {
  console.log('1')
  Promise.resolve().then(() => {
    console.log('7')
  }).then(() => {
    console.log('8')
  })
}).then(() => {
  console.log('2')
})
Promise.resolve().then(() => {
  console.log('5')
}).then(() => {
  console.log('6')
})