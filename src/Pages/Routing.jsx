import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import OpstiUslovi from './OpstiUslovi'

const Routing = () => {
  return (
    <Routes>
          <Route path='/'  element={<Home />}  />
          <Route path='/OpstiUslovi'  element={<OpstiUslovi />}  />
    </Routes>
  )
}

export default Routing