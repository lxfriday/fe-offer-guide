import './App.css'
import { easyCORSWithFetch, CORSWithFetch } from './utils/request'
import { jsonpRequest } from './utils/jsonp'

function App() {
  function getData() {
    jsonpRequest({
      url: 'https://api.a.com',
      params: {
        uid: 10087778,
        uname: 'yunyuv',
      },
    }).then(data => {
      console.log('jsonpResponse', data)
      // 业务处理
    })
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>20221105</h1>
        <button onClick={getData}>发起请求</button>
      </header>
    </div>
  )
}

export default App
