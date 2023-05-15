import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import OpstiUslovi from './OpstiUslovi'
import Kontakt from './Kontakt'
import Automobili from './Automobili'

const Routing = () => {
  return (
    <Routes>
          <Route path='/'  element={<Home />}  />
          <Route path='/OpstiUslovi'  element={<OpstiUslovi />}  />
          <Route path='/Kontakt'  element={<Kontakt />}  />
          <Route path='/Automobili'  element={<Automobili />}  />

    </Routes>
  )
}

export default Routing