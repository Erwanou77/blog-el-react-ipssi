import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BL_Home from './pages/BL_Home'
import './assets/scss/index.scss'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import TO_Todo from './pages/TO_Todo'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<BL_Home />} />
      <Route path='/todolist' element={<TO_Todo />} />
    </Routes>
    <Footer />
  </BrowserRouter>,
)
