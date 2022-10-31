const xhr = new XMLHttpRequest()
xhr.open('GET', 'https://api.x.com/saveUInfo')

xhr.withCredentials = false

xhr.send()
