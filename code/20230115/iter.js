const obj = {
  data: [1, 2, 3],
  *[Symbol.iterator]() {
    for(const d of this.data) {
      yield d
    }
  }
}

function* gene() {
  yield 1
}

const d = gene()