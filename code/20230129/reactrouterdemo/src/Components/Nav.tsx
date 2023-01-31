import React, { useEffect } from 'react'
import {
  Outlet,
  Link,
  useNavigate,
  useLocation,
  useParams,
  useSearchParams,
} from 'react-router-dom'
import styles from './Nav.module.css'

const sideNavs = [
  {
    title: 'PageA',
    path: '/pagea',
  },
  {
    title: 'PageB',
    path: '/pageb',
  },
]

export default function Nav() {
  const location = useLocation()
  const params = useParams()
  const searchParams = useSearchParams()
  console.log({
    location,
    params,
    searchParams,
  })
  return (
    <div className={styles.wrapper}>
      <div className={styles.side}>
        {sideNavs.map(_ => (
          <div key={_.title} className={styles.linkWrapper}>
            <Link to={_.path}>{_.title}</Link>
          </div>
        ))}
        <Comp></Comp>
      </div>
      <div className={styles.contentWrapper}>
        <Outlet />
      </div>
    </div>
  )
}

function Comp() {
  console.log('Comp render')
  return <div>Comp</div>
}
