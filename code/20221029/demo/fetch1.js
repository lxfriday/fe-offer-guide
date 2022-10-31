async function getData() {
  const res = await fetch('./data.json')
  const data = await res.json()
  console.log(data)
}
async function getData2() {
  const res = await fetch('https://api.x.com/getUserData', {
    method: 'GET',
    mode: 'cors',
    credentials: 'include',
  })
  const data = await res.json()
  console.log(data)
}

async function uploadAvatar() {
  const fileField = document.querySelector('#avatar')
  const fd = new FormData()
  fd.append('uid', 'asdfgh123')
  fd.append('avatar', fileField.files[0])
  const res = await fetch('https://api.x.com/uploadAvatar', {
    method: 'PUT',
    body: fd
  })
  const data = await res.json()
  console.log(data)
}

const submit = document.querySelector('.submit')
submit.addEventListener('click', uploadAvatar)

async function setData() {
  try {
    const res = await fetch('./api/updateUserInfo', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        uid: '123456789',
        name: 'lxfriday',
        school: 'HZAU',
        age: 10,
      })
    })
    const data = await res.json()
    if(data.success) {
      alert('信息更新成功')
    } else {
      alert('信息更新失败：' + data.errMsg)
    }
  } catch(e) {
    alert('请求出错：' + e)
  }
}
setData()