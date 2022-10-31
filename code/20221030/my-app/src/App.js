import logo from './logo.svg';
import './App.css'; 
import * as request from './utils/request'; 

function App() {
  function getData() {
    request.get('./api/getData')
  }
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={getData}>发起请求</button>
      </header>
    </div>
  );
}

export default App;
