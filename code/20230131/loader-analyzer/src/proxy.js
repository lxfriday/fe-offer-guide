const p = new Proxy(window, {
  get(target, key, receiver) {
    console.log('proxy', target, key)
    return target[key]
  },
})
