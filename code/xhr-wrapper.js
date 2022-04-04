function XHRWrapper({
  url,
  method = 'GET',
  headers = null,
  data = null,
  params = null,
  formData = null,
  timeout = null,
  responseType = 'json',
  withCredentials = false,
  onTimeout = null,
  onDownloadProgress = null,
  onUploadProgress = null,
  onAbort = null,
}) {
  const ajax = new Promise((res, rej) => {
    const timeStart = Date.now()
    const xhr = new XMLHttpRequest()

    const requestConfig = {
      url,
      method,
      headers,
      data,
      params,
      formData,
      timeout,
      responseType,
      withCredentials,
    }

    // --------------------request interceptors--------------
    if (XHRWrapper.interceptors.request.requestInterceptors.length) {
      XHRWrapper.interceptors.request.requestInterceptors.forEach(
        interceptor => {
          interceptor(requestConfig)
        }
      )
    }
    // --------------------------------------------------

    // --------------------url拼接，处理query--------------
    let finalUrl = requestConfig.url

    if (requestConfig.params) {
      Object.keys(requestConfig.params).forEach(k => {
        if (finalUrl.indexOf('?') === -1) {
          finalUrl += `?${k}=${requestConfig.params[k]}`
        } else {
          finalUrl += `&${k}=${requestConfig.params[k]}`
        }
      })
    }
    // --------------------------------------------------

    xhr.open(requestConfig.method, finalUrl, true)
    xhr.responseType = requestConfig.responseType
    xhr.withCredentials = requestConfig.withCredentials

    if (timeout) {
      xhr.timeout = timeout
      xhr.ontimeout = onTimeout.bind(xhr)
    }

    // ------------------------------header----------------
    if (requestConfig.headers) {
      Object.keys(requestConfig.headers).forEach(k => {
        xhr.setRequestHeader(k, requestConfig.headers[k])
      })
    }
    // ----------------------------------------------------
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        const allResponse = {
          statusCode: xhr.status,
          statusText: xhr.statusText,
          response: xhr.response,
          responseType: xhr.responseType,
          responseURL: xhr.responseURL,
          duration: Date.now() - timeStart, // 请求用时
          rawAllResponseHeaders: xhr.getAllResponseHeaders(),
          allResponseHeaders: stripRawHeaders(xhr.getAllResponseHeaders()),
        }

        // --------------------response interceptors--------------
        if (XHRWrapper.interceptors.response.responseInterceptors.length) {
          XHRWrapper.interceptors.response.responseInterceptors.forEach(
            interceptor => {
              interceptor(allResponse)
            }
          )
        }
        // --------------------------------------------------

        if (xhr.status === 200) {
          const responseInfo = {
            data: xhr.response,
            statusCode: xhr.status,
            statusText: xhr.statusText,
          }
          res(responseInfo)
        }
        if (xhr.status >= 400) {
          const rejInfo = {
            data: null,
            statusCode: xhr.status,
            statusText: xhr.statusText,
          }
          rej(rejInfo)
        }
      }
    }

    xhr.upload.onprogress = onUploadProgress.bind(xhr)
    xhr.onprogress = onDownloadProgress.bind(xhr)
    xhr.onabort = onAbort.bind(xhr)
    xhr.onerror = e => {
      console.log('onerror')
      rej(e)
    }

    if (requestConfig.data) {
      xhr.setRequestHeader('Content-Type', 'application/json')
      xhr.send(JSON.stringify(requestConfig.data))
    } else if (requestConfig.formData) {
      xhr.send(requestConfig.formData)
    } else {
      xhr.send()
    }
  })

  return ajax
}

XHRWrapper.interceptors = {
  request: {
    requestInterceptors: [],
    use(interceptor) {
      this.requestInterceptors.push(interceptor)
    },
  },
  response: {
    responseInterceptors: [],
    use(interceptor) {
      this.responseInterceptors.push(interceptor)
    },
  },
}

XHRWrapper.interceptors.request.use(function (config) {
  console.log('request interceptors111', config)
})
XHRWrapper.interceptors.request.use(function (config) {
  console.log('request interceptors222', config)
})
XHRWrapper.interceptors.response.use(function (response) {
  console.log('response interceptors111', response)
})
XHRWrapper.interceptors.response.use(function (response) {
  console.log('response interceptors222', response)
})

function handleSubmit() {
  const formData = new FormData()
  formData.append('formitem1', 'item1 content111')
  formData.append('formitem2', 'item2 content222')
  formData.append('formitem3', 'item3 content333')

  const fileEle = document.querySelector('input[type=file]')
  formData.append('formimg2', fileEle.files[0])

  XHRWrapper({
    method: 'POST',
    url: 'http://test.com:3457/receiveFormData',
    headers: {
      'x-request-id': '100123456465',
    },
    // qs param
    // params: {
    //   province: 'Wuhan',
    //   region: 'Hongshan',
    //   street: 'Wenhui Street',
    // },
    // json data
    // data: {
    //   name: 'yunyuv',
    //   age: 1003,
    //   sex: 'female',
    //   school: 'HZAU',
    // },
    formData,
    responseType: 'json',
    timeout: 1000,
    withCredentials: false,
    onTimeout() {
      console.log('timeout')
    },
    onDownloadProgress(e) {
      console.log(
        'onDownloadProgress',
        `${((e.loaded * 100) / e.total).toFixed(2)}%`
      )
    },
    onUploadProgress(e) {
      console.log(
        'onUploadProgress',
        `${((e.loaded * 100) / e.total).toFixed(2)}%`
      )
    },
    onAbort(e) {
      console.log('onAbort', e)
    },
    onError(e) {
      console.log('onError', e)
    },
  }).then(
    response => {
      console.log('success', response)
    },
    errorResponse => {
      console.log('error', errorResponse)
    }
  )
}

document.querySelector('#submit').addEventListener('click', handleSubmit)

// rawHeaders => 'access-control-allow-headers: x-request-id,content-type\r\naccess-control-allow-methods: GET, PUT, POST, DELETE, PATCH, OPTIONS\r\naccess-control-allow-origin: *\r\nconnection: keep-alive\r\ncontent-type: application/json\r\ndate: Sun, 03 Apr 2022 02:58:27 GMT\r\nkeep-alive: timeout=5\r\nrequestid: 100123456465\r\ntransfer-encoding: chunked\r\nx-powered-by: Express\r\n'
// 把 字符串 headers 提取成 kv 对
function stripRawHeaders(rawHeaders) {
  const res = {}
  const rawHeadersSplit = rawHeaders.split('\r\n')
  rawHeadersSplit.pop()
  rawHeadersSplit.forEach(kv => {
    const kvSplit = kv.split(':')
    res[kvSplit[0].trim()] = kvSplit[1].trim()
  })
  return res
}