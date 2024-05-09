import React, { useState, useEffect, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './component/Navbar/Navbar'
import Glimmer from './component/Glimmer/Glimmer'
import { AllPlayersContextProvider } from './context/AllPlayersContext'
const Home = React.lazy(() => import("./pages/Home"))
const About = React.lazy(() => import("./pages/About"));
const AllPlayers = React.lazy(() => import("./pages/AllPlayers"))
const Playerinfo = React.lazy(() => import("./pages/Playerinfo"))
const FeaturedPlayers = React.lazy(() => import("./pages/FeaturedPlayers"));



function App() {

  return (
    <div className='allplayer-container' style={{ height: "100%", width: '100%' }}>
      <AllPlayersContextProvider>
        <BrowserRouter >
          <Navbar />
          <Suspense fallback={<Glimmer />}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='about' element={<About />} />
              <Route path='featuredplayers' element={<FeaturedPlayers />} />
              <Route path='allplayers' element={<AllPlayers />} />
              <Route path='allplayers/player/:id' element={<Playerinfo />} />
            </Routes>
          </Suspense>

        </BrowserRouter>
      </AllPlayersContextProvider>


    </div>
  )
}

export default App





