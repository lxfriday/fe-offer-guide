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
    // ------------------------------header----------------
    if (requestConfig.headers) {
      Object.keys(requestConfig.headers).forEach(k => {
        xhr.setRequestHeader(k, requestConfig.headers[k])
      })
    }
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
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

// 简易 interceptors
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


XHRWrapper({
  method: 'GET',
  url: 'http://x.com',
  headers: {
    'x-request-id': '100123456465',
  },
  responseType: 'json',
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