import React, { useEffect } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Nav from './Components/Nav'
import Pagea from './Pages/Pagea'
import Pageb from './Pages/Pageb'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route path="/" element={<Navigate to="/pagea" replace />} />
        <Route path="/pagea" element={<Pagea />} />
        <Route path="/pageb" element={<Pageb />} />
      </Route>
    </Routes>
  )
}

export default App
