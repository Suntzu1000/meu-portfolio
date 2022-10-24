import './HeroImgStyles.css';

import React from 'react'

import IntroImg from '../assets/intro2.jpg'
import { Link } from 'react-router-dom';

const HeroImg = () => {
  return (
    <div className='hero'>
        <div className='mask'>
           < img className='intro-img' src={IntroImg} alt='IntroImg'/>
        </div>
        <div className='content'>
            <h1>Olá, Eu sou Gabriel.</h1>
            <p>Desenvolvedor em react, entre outras linguagens.</p>
            <div>
                <Link to='/project' className='btn'>Projetos</Link>
                <Link to='/contact' className='btn btn-light'>Contato</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg