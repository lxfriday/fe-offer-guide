document.addEventListener('DOMContentLoaded', () => {
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

  // 测试 fetch get 请求
  function LXFRIDAY_TEST_FETCH_GET() {
    const fetchDataArea = document.querySelector('#lxfriday-test-fetch-get-data-area')
    fetch('https://qiniu1.lxfriday.xyz/feoffer/fetch-data.json', {
      method: 'GET',
      headers: {
        // 'content-type': 'application/json',
      },
      credentials: 'omit',
      mode: 'cors',
      // body: JSON.stringify({
      //   id: 100
      // }),
    })
      .then(res => {
        console.log('res', res)
        return res.json()
      })
      .then(data => {
        fetchDataArea.textContent = JSON.stringify(data)
        console.log('fetch data', data)
      })
  }

  function LXFRIDAY_TEST_FETCH_ABORT() {
    const abortController = new AbortController()
    const abortSignal = abortController.signal

    // abort 之后触发
    abortSignal.onabort = function onabort() {
      console.log('onabort')
    }

    fetch('https://qiniu1.lxfriday.xyz/feoffer/vuejs-book.pdf', {
      method: 'GET',
      credentials: 'omit',
      signal: abortSignal,
    })
      .then(res => {
        console.log('res', res)
        return res.json()
      })
      .then(data => {
        console.log('fetch data', data)
      })
    setTimeout(() => {
      abortController.abort()
    }, 3000)
  }

  window.LXFRIDAY_GLOBAL_localStorageQuota = LXFRIDAY_GLOBAL_localStorageQuota
  window.LXFRIDAY_TEST_FETCH_GET = LXFRIDAY_TEST_FETCH_GET
  window.LXFRIDAY_TEST_FETCH_ABORT = LXFRIDAY_TEST_FETCH_ABORT

  // -------------------------------------------------------------------------------
  // codepen fullscreen
  // 用法： iframe 的宽高要拉满，点击按钮显示为全屏
  // <button onclick="codepenFullscreen(this)" class="codepen-fullscreen" data-target='<iframe height="100%" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/lxfriday/embed/RwxRKGy?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  //     See the Pen <a href="https://codepen.io/lxfriday/pen/RwxRKGy">
  //     Untitled</a> by 云影sky (<a href="https://codepen.io/lxfriday">@lxfriday</a>)
  //     on <a href="https://codepen.io">CodePen</a>.
  //   </iframe>'>
  //   fullscreen
  // </button>
  // ------------------------------------------------------------------------------- 
  // 模板
  /* 
    <button onclick="codepenFullscreen(this)" class="codepen-fullscreen" data-target=''>
      fullscreen
    </button>
  */
  window.toggleCodepenWrapper = function () {
    const codepenWrapper = document.querySelector('#codepenWrapper')
    const codepenContainer = document.querySelector('.codepenContainer')
    if(!codepenWrapper.classList.contains('hideCodepenWrapper')) {
      codepenWrapper.classList.add('hideCodepenWrapper')
      codepenContainer.innerHTML = ''
    } else {
      codepenWrapper.classList.remove('hideCodepenWrapper')
    }
  }

  window.codepenFullscreen = function (btn) {
    toggleCodepenWrapper()
    const codepenContainer = document.querySelector('.codepenContainer')
    const codepenIframe = btn.dataset.target
    codepenContainer.innerHTML = codepenIframe
  }
  // codepen fullscreen
  // -------------------------------------------------------------------------------
})
