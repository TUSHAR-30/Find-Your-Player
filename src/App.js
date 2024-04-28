import React, { useState, useEffect } from 'react'
import AllPlayers from './pages/AllPlayers/AllPlayers'
import './App.css'
import Home from './pages/Home/Home'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Navbar from './component/common/Navbar/Navbar'
import About from './pages/About/About'
import Playerinfo from './pages/Playerinfo/Playerinfo'

function App() {

  return (
    <div className='allplayer-container' >
      <BrowserRouter >
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='allplayers' element={<AllPlayers />}/>
        <Route path='about' element={<About />} />
        {/* <Route path='player/:id' element={<Playerinfo />}/> */}
        <Route path='allplayers/player/:id' element={<Playerinfo />}/>
      </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App





