fetch('https://a.com/api/getUserInfo', { credentials: 'include' })
  .then(res => res.json())
  .then(data => {
    console.log('data', data)
  })
