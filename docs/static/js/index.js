document.addEventListener('DOMContentLoaded', () => {
  console.log('here')

  const add10KStr = new Array(1024).fill('0000000000').join('') // 10240 Byte => 10K
  const add1KStr = new Array(1024).fill('1').join('') // 1024 Byte => 1K
  const storageKey = 'QuotaTest'

  function LXFRIDAY_GLOBAL_localStorageQuota() {
    localStorage.clear()
    const localStorageQuota_display = document.querySelector('#localStorageQuota_display')
    function setText(str) {
      console.log(str)
      localStorageQuota_display.textContent = str
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
                setText('超过容量(1K增加)')
                setText(`当前存储了${total.length / 1024}K`)
              }
            }
          }, 0)
        }
      }
    }, 0)
  }

  window.LXFRIDAY_GLOBAL_localStorageQuota = LXFRIDAY_GLOBAL_localStorageQuota
})
