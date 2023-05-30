import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import './assets/scss/index.scss'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
    <Footer />
  </BrowserRouter>,
)
