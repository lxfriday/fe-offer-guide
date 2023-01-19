// /**
//  * 测试浏览器 localstorage 容量
//  */

// const add10KStr = new Array(1024).fill('0000000000').join('') // 10240 Byte => 10K
// const add1KStr = new Array(1024).fill('1').join('') // 1024 Byte => 1K
// const storageKey = 'QuotaTest'

// ;(function localStorageQuota() {
//   let total = ''
//   try {
//     while (true) {
//       console.log(`数据插入中 => ${total.length / 1024}K`)
//       localStorage.removeItem(storageKey)
//       localStorage.setItem(storageKey, total + add1KStr)
//       total += add10KStr
//     }
//   } catch (e) {
//     if (e && e.code === 22) {
//       console.log('超过容量(10K增加)')
//       console.log(`当前存储了${total.length / 1024}K`)
//       try {
//         while (true) {
//           console.log(`数据插入中 => ${total.length / 1024}K`)
//           localStorage.removeItem(storageKey)
//           localStorage.setItem(storageKey, total + add1KStr)
//           total += add1KStr
//         }
//       } catch (ee) {
//         if (ee && ee.code === 22) {
//           console.log('超过容量(1K增加)')
//           console.log(`当前存储了${total.length / 1024}K`)
//         }
//       }
//     }
//   }
// })()
const add10KStr = new Array(1024).fill('0000000000').join('') // 10240 Byte => 10K
const add1KStr = new Array(1024).fill('1').join('') // 1024 Byte => 1K
const storageKey = 'QuotaTest'

function localStorageQuota() {
  localStorage.clear()
  function setText(str) {
    console.log(str)
  }
  let total = ''
  let interval = null
  interval = setInterval(() => {
    try {
      setText(`数据插入中 => ${total.length / 1024}K`)
      localStorage.removeItem(storageKey)
      localStorage.setItem(storageKey, total + add1KStr)
      total += add10KStr
    } catch (e) {
      clearInterval(interval)
      if (e && e.code === 22) {
        setText('超过容量(10K增加)')
        setText(`当前存储了${total.length / 1024}K`)
        interval = setInterval(() => {
          try {
            setText(`数据插入中 => ${total.length / 1024}K`)
            localStorage.removeItem(storageKey)
            localStorage.setItem(storageKey, total + add1KStr)
            total += add1KStr
          } catch (ee) {
            clearInterval(interval)
            if (ee && ee.code === 22) {
              console.log({ e })
              setText('超过容量(1K增加)')
              setText(`当前存储了${total.length / 1024}K`)
            }
          }
        }, 0)
      }
    }
  }, 0)
}
localStorageQuota()
