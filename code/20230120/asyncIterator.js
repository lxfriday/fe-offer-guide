const obj = {
  data: ['a', 'b', 'c', 'd', 'e'],
  async *[Symbol.asyncIterator]() {
    for (let i = 0; i < this.data.length; i++) {
      yield this.data[i]
    }
  },
}



;(async () => {
  for await (const d of obj) {
    console.log(d)
  }
})()
