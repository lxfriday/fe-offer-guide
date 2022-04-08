import React, { Component } from 'react'
import styles from './Nav.module.less'
import { NavLink, useLocation } from 'react-router-dom'
import classnames from 'classnames'
import routesConfig, { getPageTitle } from '../routesConfig'

const sideRoutesConfig = routesConfig.slice(1)

export default function Nav({ children }) {
  let location = useLocation()
  console.log('location', location)
  return (
    <div className={styles.wrapper}>
      <div className={styles.sideWrapper}>
        <div className={styles.siteTitle}>React 演示平台</div>
        <ul className={classnames(styles.listWrapper, 'side_listWrapper')}>
          {sideRoutesConfig.map(route => (
            <li key={route.path} className={styles.listItem}>
              <NavLink
                to={route.path}
                className={({ isActive }) =>
                  isActive ? styles.navLinkActive : undefined
                }
              >
                {route.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.navTitle}>
          <span>{getPageTitle(location.pathname)}</span>
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  )
}
