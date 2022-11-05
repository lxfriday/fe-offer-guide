import './App.css'
import {
  getUserInfo1,
  getUserInfo2,
  getUserInfo3,
  setUserInfo,
  getUserInfo5,
  emitTimeOut1,
  emitTimeOut2,
  getUserInfo6,
  seeProgressInfo,
  validateStatusDemo,
  transformRequestDemo,
  getUserInfo7,
  instanceDemo1,
  instanceDemo2,
  axiosDefaultsDemo1,
  axiosDefaultsAndIns,
  axiosCfgPriority,
  interceptorsDemo1,
} from './utils/req1'
import { get } from './utils/request'

function App() {
  function getData() {
    interceptorsDemo1()
  }
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={getData}>发起请求</button>
      </header>
    </div>
  )
}

export default App
