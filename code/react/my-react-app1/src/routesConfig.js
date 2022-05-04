import Home from './Pages/Home/index'
import LifeCircle from './Pages/LifeCircle/index'
import Context from './Pages/Context/index'

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
