import React, { Component } from 'react'
import CodeMirror from '@uiw/react-codemirror'
import { javascript } from '@codemirror/lang-javascript'
import styles from './index.module.less'
import democode from './democode.jsx?raw'
import { materialPalenight } from 'codemirror6-themes';

export default class Context extends Component {
  render() {
    console.log('democode', democode)
    return (
      <div className={styles.wrapper}>
        <CodeMirror
          value={democode}
          height="800px"
          theme={materialPalenight}
          extensions={[javascript({ jsx: true })]}
          onChange={(value, viewUpdate) => {
            console.log('value:', value)
          }}
        />
      </div>
    )
  }
}
