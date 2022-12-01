export function jsonpRequest({ url, params }) {
  return new Promise((resolve, reject) => {
    // 每次请求都是随机的函数名
    const cbName = `jsonp${Date.now()}`
    if (params) {
      params = {
        ...params,
        cb: cbName,
      }
    } else {
      params = {
        cb: cbName,
      }
    }
    let query = []
    for (const key in params) {
      query.push(`${key}=${params[key]}`)
    }
    const scriptEle = document.createElement('script')
    scriptEle.src = `${url}?${query.join('&')}`
    scriptEle.crossOrigin = `use-credentials`
    window[cbName] = function (data) {
      // 请求完成之后删除标签
      document.body.removeChild(scriptEle)
      resolve(data)
    }
    document.body.append(scriptEle)
  })
}
