const xhr = new XMLHttpRequest()
xhr.open('GET', '/xhr.json', false)
xhr.setRequestHeader('a', '1')
xhr.onreadystatechange = function(e) {
  if(xhr.readyState === 4) {
    console.log('response', xhr.response)
  }
}
xhr.onprogress = function(e) {
  console.log('progress', e);
}
xhr.send()