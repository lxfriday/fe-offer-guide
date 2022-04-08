import React, { Component } from 'react'

export default class LifeCircle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      otherData: 100,
      hasError: false,
    }
    LogR('outer constructor')
  }
  static getDerivedStateFromProps(props, state) {
    LogR('outer getDerivedStateFromProps', { props, state })
    return { otherData: Math.floor(Math.random() * 100) }
  }
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    LogR('outer getDerivedStateFromError', { error })
    return { hasError: true }
  }
  shouldComponentUpdate(nextProps, nextState) {
    LogR('outer shouldComponentUpdate', { nextProps, nextState })
    return true
  }
  render() {
    LogR('outer render')
    return (
      <div className='LifeCircleWrapper'>
        <button
          onClick={() => this.setState(prev => ({ count: prev.count + 1 }))}
        >
          add
        </button>
        <div>
          {this.state.hasError ? null : (
            <LifeCircleSub count={this.state.count} />
          )}
        </div>
        <div>{this.state.hasError ? 'has Error' : 'no error'}</div>
      </div>
    )
  }
  componentDidMount() {
    LogR('outer componentDidMount')
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    LogR('outer getSnapshotBeforeUpdate', { prevProps, prevState })
    return 12355
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    LogR('outer componentDidUpdate', { prevProps, prevState, snapshot })
  }
  componentDidCatch(error, info) {
    LogR('outer componentDidCatch', { error, info })
  }
  componentWillUnmount() {
    LogR('outer componentWillUnmount')
  }
}

class LifeCircleSub extends Component {
  constructor(props) {
    super(props)
    this.state = {
      otherData: 10087,
    }
    LogG('inner constructor')
  }
  static getDerivedStateFromProps(props, state) {
    LogG('inner getDerivedStateFromProps', { props, state })
    return { otherData: Math.floor(Math.random() * 100) }
  }
  shouldComponentUpdate(nextProps, nextState) {
    LogG('inner shouldComponentUpdate', { nextProps, nextState })
    return true
  }
  render() {
    LogG('inner render')
    return <div>inner LifeCircle count: {this.props.count}</div>
  }
  componentDidMount() {
    LogG('inner componentDidMount')
    throw new Error('my error')
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    LogG('inner getSnapshotBeforeUpdate', { prevProps, prevState })
    return 12355
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    LogG('inner componentDidUpdate', { prevProps, prevState, snapshot })
  }
  componentDidCatch(error, info) {
    LogR('inner componentDidCatch', { error, info })
  }
  componentWillUnmount() {
    LogG('inner componentWillUnmount')
  }
}
