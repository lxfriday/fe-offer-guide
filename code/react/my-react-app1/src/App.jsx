import { Routes, Route, Link } from 'react-router-dom'

import LifeCircle from './Pages/LifeCircle'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LifeCircle />} />
      </Routes>
    </div>
  )
}

export default App
