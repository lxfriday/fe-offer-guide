import React, { Component } from 'react'

export default class Pageb extends Component {
  state = { num: 0 }
  btn: HTMLButtonElement | null = null
  render() {
    return (
      <div>
        <div>{this.state.num}</div>
        <div>
          Pageb <button ref={r => (this.btn = r)}>add</button>
        </div>
      </div>
    )
  }
  componentDidMount() {
    if (this.btn)
      this.btn.addEventListener('click', () => {
        this.setState({
          num: this.state.num + 1,
        })
        console.log('num', this.state.num)
        this.setState({
          num: this.state.num + 1,
        })
        console.log('num', this.state.num)
      })
  }
}
