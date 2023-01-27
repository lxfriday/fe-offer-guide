// import React, {
//   useEffect,
//   useLayoutEffect,
//   useInsertionEffect,
//   useRef,
//   useTransition,
//   useState,
// } from 'react'
// function sleep(time: number = 1) {
//   const now = Date.now()
//   while (Date.now() - now <= time * 1000) {}
// }
// export default function App() {
//   const [text, setText] = useState('0')
//   const ref = useRef<HTMLDivElement>(null)
//   const [num, setNum] = useState(0)
//   useEffect(() => {
//     setText(t => {
//       debugger
//       return t + 1
//     })
//   }, [])

//   return (
//     <div ref={ref} style={{ color: '#000' }}>
//       App {num}
//       <p>
//         <button
//           onClick={() => {
//             setNum(100)
//           }}
//         >
//           update
//         </button>
//       </p>
//       <div>
//         <input
//           type="text"
//           value={text}
//           onChange={e => {
//             setText(e.target.value)
//           }}
//         />
//       </div>
//     </div>
//   )
// }

import React, { Component } from 'react'

type StateType = {
  num: number
}

export default class App extends Component {
  state = {
    num: 1,
  }
  shouldComponentUpdate(nextProps: Readonly<{}>, nextState: Readonly<StateType>, nextContext: any): boolean {
    // return nextState.num !== this.state.num
    return true
  }
  render() {
    console.log('render')
    return <div onClick={() => this.setState({ num: 1 })}>App</div>
  }
  componentDidMount() {
    console.log('cdm')
  }
  componentDidUpdate() {
    console.log('cdu  ')
  }
}
