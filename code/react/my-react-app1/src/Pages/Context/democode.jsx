import React, { Component } from 'react'
import CodeMirror from '@uiw/react-codemirror'
import { javascript } from '@codemirror/lang-javascript'

export default class Context extends Component {
  render() {
    return (
      <div>
        <CodeMirror
          value="console.log('hello world!');"
          height="200px"
          extensions={[javascript({ jsx: true })]}
          onChange={(value, viewUpdate) => {
            console.log('value:', value)
          }}
        />
      </div>
    )
  }
}
