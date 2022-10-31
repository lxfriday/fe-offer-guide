async function getData() {
  const res = await fetch('./fetch.json')
  const data = await res.json()
  // 根据 data 写业务逻辑
  console.log('data', data)
}

async function getData2() {
  try {
    const res = await fetch('./fetch.json', {
      method: 'POST',
      headers: {
        a: 1,
        'content-type': 'application/json'
      },
      body: JSON.stringify({name: 'yunyuv'}), // FormData or URLSearchParams
    })
    const data = await res.json()
    // 根据 data 写业务逻辑
    console.log('data2', data)
  } catch(e) {
    console.log('请求出错')
  }

}
getData2()

interface RequestInit {
  method?: string; // GET POST ...
  mode?: RequestMode; // cors、 no-cors 或者 same-origin。
  credentials?: RequestCredentials; // include, *same-origin, omit
  headers?: HeadersInit;
  body?: BodyInit | null; // 请求体
  signal?: AbortSignal | null; // 取消时使用
}