import './NavbarStyles.css'

import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick (!click)

    const [color, setColor] = useState(false)
    const changeColor = () => {
        if(window.scrollY >= 100){
            setColor(true)
        }else{
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)

  return (
    <div className={color ? 'header header-bg': 'header'}>
        <Link to='/'>
            <h1>Portfólio</h1>
        </Link>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li>
                <Link to='/'>Início</Link>
            </li>
            <li>
                <Link to='/about'>Sobre</Link>
            </li>
            <li>
                <Link to='/project'>Projetos</Link>
            </li>
            <li>
                <Link to='/contact'>Contato</Link>
            </li>
        </ul>
        <div className='hamburguer' onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{color: "#fff"}}/>)
            : (<FaBars size={20} style={{color: "#fff"}}/>)}
            
            
        </div>
    </div>
  )
}

export default Navbar