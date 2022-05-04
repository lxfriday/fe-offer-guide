import React, { Component } from 'react'
import { Navigate } from 'react-router-dom'
import routesConfig from '@/routesConfig'


export default class Home extends Component {
  render() {
    return (
      <Navigate replace to={routesConfig[1].path} />
    )
  }
}
