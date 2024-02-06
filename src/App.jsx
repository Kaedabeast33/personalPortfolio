import { useState } from 'react'


import { Routes, Route } from 'react-router-dom'
import './App.css'
import HomeSharedLayout from './layout/HomeSharedLayout'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-[100vw]'>
    <Routes>
      <Route path="/" element={<HomeSharedLayout />}>
        <Route index element={<Home />} />
      </Route>
     
    </Routes>
    </div>
  )
}

export default App
