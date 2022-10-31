const codeMap = {
  0: 'UNSENT',
  1: 'OPENED',
  2: 'HEADERS_RECEIVED',
  3: 'LOADING',
  4: 'DONE',
}

const xhr = new XMLHttpRequest()
xhr.open('GET', '/xhr.json')
xhr.send()
xhr.onreadystatechange = function(e) {
  if(xhr.readyState === 4) {
    const data = xhr.response
    // 根据data来做对应的处理
  }
}



console.log('state after open', xhr.readyState, codeMap[xhr.readyState])
xhr.setRequestHeader('head1', 'val1')
xhr.onreadystatechange = function(e) {
  console.log('state onreadystatechange', codeMap[xhr.readyState])
  if(xhr.readyState === 4) {
    console.log('response', xhr.response)
  }
}
xhr.onload = function(e) {
  console.log('state onload', codeMap[xhr.readyState])
}
xhr.onloadend = function(e) {
  console.log('state onloadend', codeMap[xhr.readyState])
}
xhr.onloadstart = function(e) {
  console.log('state onloadstart', codeMap[xhr.readyState])
}

xhr.onabort = function () {
  console.log('你取消了 xhr')
}
xhr.abort()



xhr.onprogress = function(e) {
  console.log('progress', e);
  console.log('progress', this);
}


console.log('state after send', codeMap[xhr.readyState])