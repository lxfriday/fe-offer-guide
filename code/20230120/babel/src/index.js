const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2000)
  }, 2000)
})

async function add() {
  const d = await p
  console.log('d', d)
}

;(async () => {
  await add()
})()
