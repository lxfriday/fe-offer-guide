import axios from 'axios'

export function getUserInfo1() {
  return axios('./api/getUserInfo1')
}

// axios.defaults.baseURL = 'https://www.xxx.com/'

// export function setUserInfo() {
//   const fd = new FormData()
//   fd.append('uid', 'ttgg123456789')
//   fd.append('uname', 'yunyuv')
//   fd.append('ucname', '云影同学')
//   return axios({
//     method: 'POST',
//     url: '/api/v1/setUserInfo',
//     headers: {
//       a: 1,
//       a: 2,
//       requestId: 'xxxdddwerr-568974',
//     },
//     data: {
//       uid: 'ttgg123456789',
//       uname: 'yunyuv',
//       ucname: '云影同学',
//     },
//   })
// }
export function setUserInfo() {
  const urlSearchParams = new URLSearchParams()
  urlSearchParams.append('uid', 'ttgg123456789')
  urlSearchParams.append('uname', 'yunyuv')
  urlSearchParams.append('ucname', '云影同学')
  return axios({
    method: 'POST',
    url: '/api/v1/setUserInfo',
    headers: {
      a: 2,
      requestId: 'xxxdddwerr-568974',
    },
    // data: {
    //   uid: 'ttgg123456789',
    //   uname: 'yunyuv',
    //   ucname: '云影同学',
    // },
    // data: '传递字符串',
    // data: formData,
    data: urlSearchParams,
    // data: blob ArrayBuffer Stream Buffer
  })
}

export function getUserInfo2() {
  return axios({
    method: 'GET',
    url: '/api/v1/getUserInfo2',
    headers: {
      requestId: 'xxxdddwerr-568974',
    },
    responseEncoding: 'utf8',
  })
}

export function getUserInfo3() {
  return axios('./api/getUserInfo3', {
    method: 'GET',
    headers: {
      reqId: 'usjhfgtr58746',
    },
    params: {
      uid: 10087,
    },
  })
}

export async function setUserInfo2() {
  const res = await axios('https://api.x.com/setUserInfo', {
    method: 'POST',
    withCredentials: true,
    headers: {
      'content-type': 'application/json',
      reqId: 'usjhfgtr58788',
    },
    data: {
      uid: 10087,
      ucname: '云影同学',
      uname: 'yunyuv',
      age: 10087,
    },
  })
  console.log(res)
}

export function getUserInfo5() {
  return axios({
    method: 'GET',
    url: '/api/v1/getUserInfo5?school=HZAU',
    params: {
      name: 'lxfriday',
      uid: 'ghjk45789',
      school: 'HUST',
      ids: [1, 2, 3],
    },
  })
}

export function emitTimeOut1() {
  axios({
    method: 'GET',
    url: '/api/v1/willtimeout',
    timeout: 2000,
  })
    .then(res => {})
    .catch(e => {
      console.log('err', e)
    })
}

export function emitTimeOut2() {
  axios({
    method: 'GET',
    url: '/api/v1/willtimeout',
    withCredentials: false,
  })
    .then(res => {})
    .catch(e => {
      console.log('err', e)
    })
}

export function getUserInfo6() {
  axios({
    method: 'GET',
    url: 'https://xxx.com/api/v1/getUserInfo6',
    withCredentials: true,
  })
    .then(res => {})
    .catch(e => {
      console.log('err', e)
    })
}

export function seeProgressInfo() {
  axios({
    method: 'GET',
    url: 'https://qiniu1.lxfriday.xyz/today-video/0d60d214-c78d-42e8-beef-3fff79f536601493673164511.3gp',
    onUploadProgress(e) {
      console.log('onUploadProgress', e)
    },
    onDownloadProgress(e) {
      console.log('onDownloadProgress', e)
    },
  })
    .then(res => {})
    .catch(e => {
      console.log('err', e)
    })
}

export function validateStatusDemo() {
  axios({
    method: 'GET',
    url: '/api/v1/getUserInfo6',
    validateStatus(status) {
      // return status >= 200 && status < 400
      return true
    },
  })
    .then(res => {
      console.log('res', res)
    })
    .catch(e => {
      console.log('err', e)
    })
}

export function transformRequestDemo() {
  axios({
    method: 'POST',
    url: '/api/v1/setUserInfo6',
    data: {
      name: 'lxfriday',
      uid: 'ghjk45789',
    },
  })
    .then(res => {
      console.log('res', res)
    })
    .catch(e => {
      console.log('err', e)
    })
}

export function getUserInfo7() {
  axios({
    method: 'GET',
    url: '/api/v1/getUserInfo7',
  })
    .then(res => {
      console.log('res', res)
    })
    .catch(e => {
      console.log('err', e)
    })
}

const instanceForXCom = axios.create({
  baseURL: 'https://x.com',
  headers: {
    'Content-Type': 'application/json',
    requestId: 'gthyjuk456123',
  },
  timeout: 1000,
})

export function instanceDemo1() {
  instanceForXCom({
    url: '/api/getUserInfo',
  })
    .then(res => {})
    .catch(e => {})
}

const instanceForCatCom = axios.create({
  baseURL: 'https://cat.com',
  headers: {
    'Content-Type': 'application/json',
    a: 1,
  },
  params: {
    common1: 'a',
    common2: 'b',
  },
  timeout: 5000,
})

export function instanceDemo2() {
  instanceForCatCom({
    url: '/api/getCatInfo',
    params: {
      catId: '987654ddd',
    },
  })
    .then(res => {})
    .catch(e => {})
}

// const instanceMultiHeaders = axios.create({
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     requestId: getRequestId(),
//     serverKey: getServerKey(),
//     a: 1,
//     b: 1,
//   },
//   timeout: 5000,
// })
// instanceMultiHeaders({
//   url: '/api/someOpes',
//   data,
// })
//   .then(res => {})
//   .catch(e => {})

// axios.defaults.baseURL = 'https://www.xxx.com/'

// axios.defaults.baseURL = 'https://www.xxx.com/'
// axios.defaults.withCredentials = true
// axios.defaults.headers.common = {
//   abc: 123,
// }

export function axiosDefaultsDemo1() {
  axios({
    url: '/api/getUserInfo',
  })
    .then(res => {})
    .catch(e => {})
}

const catIns = axios.create()

export function axiosDefaultsAndIns() {
  catIns({
    url: '/api/getCatInfo',
  })
    .then(res => {})
    .catch(e => {})
}

export function axiosCfgPriority() {
  // axios.defaults.baseURL = 'https://www.aaa.com'
  const ins = axios.create({
    baseURL: 'https://www.bbb.com',
  })
  // ins.defaults.baseURL = 'https://www.ccc.com'
  ins({
    baseURL: 'https://www.ddd.com',
    url: '/api/getUserInfo',
  })
    .then(res => {})
    .catch(e => {})
}

export function interceptorsDemo1() {
  const axiosInstance = axios.create()
  axiosInstance.interceptors.request.use(function (cfg) {
    console.log('request interceptors', cfg)
    return cfg
  })
  axiosInstance.interceptors.response.use(function (res) {
    console.log('response interceptors', res)
  })
  axiosInstance({
    baseURL: 'https://www.xxx.com',
    method: 'POST',
    url: '/api/setUserInfo',
    data: {
      uid: 10086123,
      ucname: '云影同学',
      age: 101,
    },
  })
    .then(res => {
      console.log('res', res)
    })
    .catch(e => {})
}

export function corsDemo1() {
  axios({
    baseURL: 'https://www.xxx.com',
    url: '/api/getUserInfo',
  })
    .then(res => {
      console.log('res', res)
    })
    .catch(e => {})
}
