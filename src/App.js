import React, { useState, useEffect, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Navbar from './component/common/Navbar/Navbar'
import Glimmer from './component/common/Glimmer/Glimmer'
const Home = React.lazy(() => import("./pages/Home/Home"))
const About = React.lazy(() => import("./pages/About/About"));
const AllPlayers = React.lazy(() => import("./pages/AllPlayers/AllPlayers"))
const Playerinfo = React.lazy(() => import("./pages/Playerinfo/Playerinfo"))


function App() {

  return (
    <div className='allplayer-container' >
      <BrowserRouter >
        <Navbar />
        <Suspense fallback={<Glimmer />}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='allplayers' element={<AllPlayers />} />
            <Route path='about' element={<About />} />
            <Route path='allplayers/player/:id' element={<Playerinfo />} />
          </Routes>
        </Suspense>

      </BrowserRouter>

    </div>
  )
}

export default App





