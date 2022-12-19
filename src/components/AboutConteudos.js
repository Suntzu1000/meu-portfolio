import './AboutConteudosStyles.css'

import React from 'react'
import { Link } from 'react-router-dom'

import ft01 from '../assets/ft01.jpg'
import ft02 from '../assets/ft02.jpg'

const AboutConteudos = () => {
  return (<>
    <div className='sobre'>
        <div className='esquerda'>
            <h1>Quem sou eu?</h1>
            <p>Me chamo Gabriel tenho 18 anos, sou desenvolvedor de sistemas e estou focado nas tecnologias voltadas ao Front-End. Sou um apaixonado por tecnologias e movido á desafios. <br/>Hoje já entendo tecnologias como NodeJS, Bootstrap, ReactJS, React-Redux-Toolkit etc...</p>
            <Link to='/contact'>
                <button className='btn'>Contatos</button>
            </Link>
        </div>
        <div className='direita'>
            <div className='img-container'>
                <div className='img-embrulho top'>
                    <img src={ft02} className='img' alt='true'/>
                </div>

                <div className='img-embrulho bottom'>
                    <img src={ft01} className='img' alt='true'/>
                </div>
            </div>
        </div>
    </div></>
  )
}

export default AboutConteudos