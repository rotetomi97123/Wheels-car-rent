import React from 'react'
import Navbar from '../Components/Navbar'
import styled from 'styled-components'
import OpstiUsloviHero from '../Components/OpstiUsloviHero'
import Map from '../Components/Map'
import Footer from '../Components/Footer'

const Kontakt = () => {
  return (
    <div>
        <Navbar />
        <OpstiUsloviHero title="KONTAKT" text="Wheels car rental" text2="+381 65 123 1234" />
        <Map />
        <Footer />
    </div>
  )
}

export default Kontakt