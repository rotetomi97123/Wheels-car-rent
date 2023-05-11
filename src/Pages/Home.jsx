import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Onama from '../Components/Onama'
import Companies from '../Components/companies'
import Popular from '../Components/Popular'
import Ponuda from '../Components/Ponuda'
import Wheels from '../Components/Wheels'
import Footer from '../Components/Footer'


const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Onama />
        <Ponuda />
        <Companies />
        <Popular />
        <Wheels />
        <Footer />
    </div>
  )
}

export default Home