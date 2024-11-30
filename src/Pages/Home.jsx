import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import './Home.css'
import Hero_section from '../Components/Hero_section/Hero_section'
import Why_aith from '../Components/Why_aith/Why_aith'
import Program from '../Components/Program/Program'
import Contact from '../Components/Contact/Contact'
import Footer from '../Components/Footer/Footer'
const Home = () => {
  return (
    <div className='home_page'>
        <Navbar/>
        <Hero_section/>
        <Why_aith/>
        <Program/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home