import { Routes, Route } from 'react-router-dom'
import styles from './App.module.less'
import routesConfig from '@/routesConfig'
import Nav from '@/Components/Nav'

function App() {
  return (
    <div className={styles.container}>
      <Nav>
        <Routes>
        {routesConfig.map(route => (
          <Route key={route.path} path={route.path} title={route.title} element={<route.comp />} />
        ))}
        </Routes>
      </Nav>
    </div>
  )
}

export default App
