const xhr = new XMLHttpRequest()
xhr.open('GET', '/xhr.json')
xhr.onreadystatechange = function(e) {
  if(xhr.readyState === 4) {
    console.log('response', xhr.response)
    // 写一些业务
  }
}
xhr.send()