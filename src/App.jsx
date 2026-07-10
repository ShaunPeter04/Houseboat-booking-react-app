import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddHouseboat from './components/AddHouseboat'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ViewHouseboats from './components/ViewHouseboats'
import SearchHouseboat from './components/SearchHouseboat'
import DeleteHouseboat from './components/DeleteHouseboat'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AddHouseboat />} />
          <Route path='/search' element={<SearchHouseboat />} />
          <Route path='/view' element={<ViewHouseboats />} />
          <Route path='/delete' element={<DeleteHouseboat />} />


        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
