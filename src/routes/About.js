import React from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg02 from '../components/HeroImg02'
import AboutConteudos from '../components/AboutConteudos'

const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg02 heading='SOBRE MIM' text='Sou um Desenvolvedor focado no Fron-End.'/>
      <AboutConteudos/>
      <Footer/>
    </div>
  )
}

export default About