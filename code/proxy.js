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

const t = {}
const p = new Proxy(t, {
  getOwnPropertyDescriptor(target, key) {
    console.log('key', key) // school
    return { value: 'HZAU', configurable: true, enumerable: false, writable: true }
  },
})
console.log(Object.getOwnPropertyDescriptors(p)) // {value: "HZAU", writable: true, enumerable: false, configurable: true}
