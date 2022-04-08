import Home from './Pages/Home'
import LifeCircle from './Pages/LifeCircle'
import Context from './Pages/Context'

const routes = [
  {
    path: '/',
    comp: Home,
    title: '首页',
  },
  {
    path: '/lifecircle',
    comp: LifeCircle,
    title: 'React 生命周期',
  },
  {
    path: '/context',
    comp: Context,
    title: 'context',
  },
]

export default routes

// '/context'
export function getPageTitle(pathname) {
  for(let route of routes) {
    if(route.path === pathname) {
      return route.title
    }
  }
  return '无'
}
