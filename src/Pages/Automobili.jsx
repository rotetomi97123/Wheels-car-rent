import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import styled from 'styled-components'
import { AllCars } from '../Components/data'
import {IoIosPricetag} from 'react-icons/io'
import { AiFillCar } from 'react-icons/ai'
import OpstiUsloviHero from '../Components/OpstiUsloviHero'
import AutomobiliComp from '../Components/AutomobiliComp'
import Footer from '../Components/Footer'

const Automobili = () => {
  return (
    <div>
        <Navbar />
        <Wrapper>
            <OpstiUsloviHero title="NAŠI AUTOMOBILI" text="Wheels car rental" text2="+381 65 123 1234" />
            <AutomobiliComp />
        </Wrapper>
        <Footer />
    </div>
  )
}
const Wrapper = styled.div`
  width:100%;
  height: 100%;
`


export default Automobili