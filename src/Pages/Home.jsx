import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Onama from '../Components/Onama'
import Companies from '../Components/companies'
import Popular from '../Components/Popular'


const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Onama />
        <Companies />
        <Popular />
    </div>
  )
}

export default Home