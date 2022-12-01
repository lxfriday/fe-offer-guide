import axios from 'axios'
import Mock from 'mockjs'

function getRequestId() {
  return Mock.mock('@guid')
}
function getRequestToken() {
  return Mock.mock('@guid')
}

export async function easyCORSWithFetch() {
  const res = await fetch('https://www.aaa.com/api/getUserInfoWithFetch')
  const data = await res.json()
  console.log('easyCORSWithFetch', data)
}

export async function easyCORSWithAxios() {
  const res = await axios({
    baseURL: 'https://www.aaa.com',
    url: 'api/getUserInfoWithAxios',
  })
  console.log('easyCORS', res)
}

export async function CORSWithFetch() {
  try {
    const res = await fetch('https://api.a.com/setUserInfo1', {
      method: 'POST',
      headers: {
        requestId: getRequestId(),
        requestToken: getRequestToken(),
        a: 1,
        b: 2,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        cname: '吕布',
        age: 100,
      }),
    })
    console.log('headers', [...res.headers.entries()])

    const data = await res.json()
    console.log('easyCORSWithFetch', data)
  } catch (e) {
    console.log('请求失败', e)
  }
}
