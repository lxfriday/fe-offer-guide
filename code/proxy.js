// const p = new Proxy(
//   {},
//   {
//     // get(obj, prop, receiver) {
//     //   return prop in obj ? obj[prop] : 33
//     // },
//     set(target, key, value) {
//       if (key === 'age') {
//         if (!Number.isInteger(value)) throw new Error('不是整数')
//         if (value > 200) throw new Error('范围不对')
//       }

//       target[key] = value
//       return false
//     },
//   }
// )

// console.log((p.age = 100))

// const proxy = new Proxy([], {
//   set(target, key, value, receiver) {
//     console.log('target', target)
//     console.log('key', key)
//     console.log('value', value)
//     console.log('receiver', receiver)
//     return true
//   },
// })

// proxy.push('a')
// proxy.push('b')

// const t = []
// const p = new Proxy(t, {
//   set(target, key, value, receiver) {
//     console.log('key', key)
//     console.log('value', value)
//     return Reflect.set(target, key, value, receiver)
//   },
// })

// p.push(2)
// p.push(3)
// console.log(p)
// console.log('-----------------------')

// const t2 = [2, 3, 4]

// let c = 0

// new Array(5).fill(1).forEach((v, i) =>
//   Object.defineProperty(t2, `${i}`, {
//     set(value) {
//       console.log('set', value)
//       console.log('i', i)
//       Reflect.set(t2, i, value)
//       c++
//     },
//   })
// )

// t2[0] = 1
// console.log('c', c)

const arr = ['a']

Object.defineProperties(arr, {
  '0': {
    get(value) {
      console.log('0')
      return arr[0]
    },
  },
  '1': {
    get(value) {
      console.log('1')
      return arr[0]
    },
  },
})
