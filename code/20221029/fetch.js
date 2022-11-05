async function getData() {
  const formData = new FormData()
  formData.append('a', 1)
  formData.append('b', 2)
  formData.append('c', 3)

  const urlSearchParams = new URLSearchParams()
  urlSearchParams.append('a', 1)
  urlSearchParams.append('b', 2)
  urlSearchParams.append('c', 3)

  // const res = await fetch('https://api.x.com/setUserInfo', {

  // const res1 = await fetch('./api/getUserInfo', {
  //   method: 'get',
  // })
  // const res2 = await fetch('https://api.x.com/api/getUserInfo', {
  //   method: 'get',
  // body: formData,
  // body: urlSearchParams,
  // body: '我是普通字符串',
  // })
  // console.log('response', response)
  // console.log('content-type', response.headers.get('content-type'))
  // console.log('last-modified', response.headers.get('last-modified'))

  const response = await fetch(
    'https://qiniu1.lxfriday.xyz/1651146206621_d22070f3-6899-4135-9b34-ecc173b1b04e.png',
  )

  // const response = await fetch('./api/getUserInfos')
}

async function getData2() {
  const abortController = new AbortController()
  const abortSignal = abortController.signal
  abortSignal.onabort = function () {
    console.log('取消了请求')
  }

  fetch('./api/getUserInfo', {
    signal: abortSignal,
  }).catch(e => {
    console.log('err', e)
  })
  abortController.abort()
}

// async function getData3() {
//   const myRequest = new Request('./api/getUserInfo', {
//     method: 'GET',
//     credentials: 'omit',
//     headers: {
//       'content-type': 'application/json',
//       a: 1
//     },
//   })
//   const res = await fetch(myRequest)
//   console.log('res3', res)
//   const data = await res.json()
//   console.log('data3', data)
// }
// getData3()

// fetch('./api/getUserInfo', {
//   method: 'GET', // HEAD POST PUT DELETE OPTIONS
//   header: {}
// }).catch(e => {
//   console.log(e)
// })

// method?: string;
// headers?: HeadersInit;
// body?: BodyInit | null;
// mode?: RequestMode;
// credentials?: RequestCredentials;
// signal?: AbortSignal | null;
// cache?: RequestCache;

// integrity?: string;
// keepalive?: boolean;
// redirect?: RequestRedirect;
// referrer?: string;
// referrerPolicy?: ReferrerPolicy;

// async function getData5() {
//   const response = await fetch('https://qiniu1.lxfriday.xyz/1651146206621_d22070f3-6899-4135-9b34-ecc173b1b04e.png')
//   const blob = await response.blob()

//   const objectURL = URL.createObjectURL(blob);
//   console.log('objectURL', objectURL)
//   const img = document.createElement('img')
//   img.src = objectURL
//   document.querySelector('body').appendChild(img)
// }
// getData5()

function download() {
  fetch('https://qiniu1.lxfriday.xyz/today64511.3gp').then(async function (
    res,
  ) {
    const filesize = +res.headers.get('content-length')
    let LoadedLength = 0
    const reader = res.body.getReader()
    while (true) {
      const { done, value } = await reader.read()
      if (done) break
      // 已下载的字节
      LoadedLength += value.length
      // 下载进度
      const progress = Math.floor((LoadedLength / filesize) * 100)
      console.log(`下载进度 ${progress} %`)
    }
  })
}

download()
