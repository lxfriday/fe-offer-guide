const ee = new EventEmitter()

function listener1() {
  console.log('listener1')
}

function listener2() {
  // Always remove after use
  console.log('listener2')
}

ee.addListeners('foo', [listener1, listener2])
ee.trigger('foo')
ee.on('requestDataFromServer', function (msg) {
  console.log('msg', msg)

  setTimeout(() => {
    ee.trigger('requestDataFromClient', [
      {
        uniqueId: msg.uniqueId,
        data: [
          { id: 10086, name: 'wang' },
          { id: 10087, name: 'liu' },
        ],
      },
    ])
  }, 1000)
})

const randomKey = () => `${Date.now()}_${Math.floor(Math.random() * 10000000)}`

function wrapper({ pageCommand, serverCommand, data }) {
  return new Promise((res, rej) => {
    const uniqueId = randomKey()
    function listener(msg) {
      // bala
      if (msg.uniqueId === uniqueId) {
        ee.removeListener(pageCommand, listener)
        res(msg.data)
      }
    }

    ee.on(pageCommand, listener)
    ee.trigger(serverCommand, [{ uniqueId, data }])
    setTimeout(() => {
      rej('超时了')
    }, 2000)
  })
}

const listId = 10086

wrapper({
  // page 监听，server 触发，server发数据，page 收数据
  pageCommand: 'requestDataFromClient', 
  // server 监听，page 触发，page发数据，server 收数据
  serverCommand: 'requestDataFromServer', 
  data: listId,
}).then(data => {
  console.log('list data ', data)
  console.log(ee);
})
