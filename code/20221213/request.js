const axios = require('axios')

axios({
  method: 'MYMETHOD',
  url: 'http://localhost:4567/getUserInfo',
  data: { from: 'client', info: 'this is body' },
}).then(res => {
  console.log('res.data', res.data)
  console.log('res.status', res.status)
}).catch(e => {
  console.log('err code', e.response.status)
})
