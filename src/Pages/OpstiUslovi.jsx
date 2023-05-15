import React from 'react'
import Navbar from '../Components/Navbar'
import styled from 'styled-components'
import { AiFillCar } from 'react-icons/ai'
import Footer from '../Components/Footer'
import OpstiUsloviText from '../Components/OpstiUsloviText'
import OpstiUsloviHero from '../Components/OpstiUsloviHero'

const OpstiUslovi = () => {
  return (
    <div>
        <Navbar />
          <OpstiUsloviHero title="OPŠTI USLOVI NAJMA" text="Wheels car rental" text2="+381 65 123 1234" />
          <OpstiUsloviText />
          <Footer />
    </div>
  )
}


export default OpstiUslovi