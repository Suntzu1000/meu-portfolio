import React from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg02 from '../components/HeroImg02'
import CartaoPrecos from '../components/CartaoPrecos'

const Project = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg02 heading='PROJETOS' text='Projetos em breve serão postados.'/>
      <CartaoPrecos/>
      <Footer/>
    </div>
  )
}

export default Project