import { useState } from 'react'
import Posts from './pages/Posts'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Posts />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
