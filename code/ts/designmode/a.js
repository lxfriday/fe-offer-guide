window.jQuery = function (...args) {
  return ajax(...args)
}
window.jQuery.ajax = ajax
function ajax(cfg) {
  return new Promise(res => {
    if (typeof cfg === 'string') cfg = { url: cfg }
    cfg.method = cfg.method || 'GET'
    const xhr = new XMLHttpRequest()
    xhr.open(cfg.method, cfg.url)
    xhr.responseType = 'json'
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 300) {
          res(xhr.response)
        } else {
          rej(xhr.response)
        }
      }
    }
    xhr.timeout = cfg.timeout || 2000
    xhr.ontimeout = cfg.ontimeout
    xhr.send(cfg.data)
  })
}
