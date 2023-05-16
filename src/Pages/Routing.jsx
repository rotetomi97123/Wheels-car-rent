import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import OpstiUslovi from './OpstiUslovi'
import Kontakt from './Kontakt'
import Automobili from './Automobili'
import AutoReservation from './AutoReservation'

const Routing = () => {
  return (
    <Routes>
          <Route path='/'  element={<Home />}  />
          <Route path='/OpstiUslovi'  element={<OpstiUslovi />}  />
          <Route path='/Kontakt'  element={<Kontakt />}  />
          <Route path='/Automobili'  element={<Automobili />}  />
          <Route path='/AutoReservation'  element={<AutoReservation />}  />
    </Routes>
  )
}

export default Routing