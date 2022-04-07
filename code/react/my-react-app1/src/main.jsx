import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'

window.LogR = function (...args) {
  console.log('%c%s', 'color: red;font-weight:bold;', ...args)
}
window.LogG = function (...args) {
  console.log('%c%s', 'color: green;font-weight:bold;', ...args)
}


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)

