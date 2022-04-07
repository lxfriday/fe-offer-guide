const axios = require('axios')

axios({
  method: 'GET',
  // url: 'https://qiniu1.lxfriday.xyz/feoffer/vuejs-book.pdf',
  url: 'https://www.baidu.com/',
  onDownloadProgress: function (progressEvent) {
    // Do whatever you want with the native progress event
    console.log('progressEvent', progressEvent)
  },
}).then(data => {
  console.log(data)
})
