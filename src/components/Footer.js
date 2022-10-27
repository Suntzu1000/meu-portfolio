import './FooterStyles.css'

import React from 'react'

import {FaLinkedin, FaMailBulk, FaPhone} from 'react-icons/fa'
 
const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='esquerda'>
                <div className='numero'>
                    <h4>
                        <FaPhone size={20} style={{ color: '#fff',
                         marginRight: '2rem'}}/>
                         (62) 9953-96918
                    </h4>
                </div>

                <div className='email'>
                    <h4>
                        <FaMailBulk size={20} style={{ color: '#fff',
                         marginRight: '2rem'}}/>
                         gabrielfootze@gmail.com
                    </h4>
                </div>
            </div>

            <div className='direita'>
                <div className='rdsociais'>
                    <FaLinkedin size={100} style={{color: '#fff', marginRight: '1rem'}} />
                </div>
            </div>

        </div>
    </div>
  )
}

export default Footer