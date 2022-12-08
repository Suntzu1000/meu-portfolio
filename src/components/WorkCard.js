import React from 'react'
import './WorkCardStyles.css'
import { NavLink} from 'react-router-dom'

const WorkCard = (props) => {

  function opeTab(){
    window.open('https://api-paises-000.vercel.app/')
  }

  function opeTabGit(){
    window.open('https://github.com/Suntzu1000')
  }

  return (
    <>
     <div className='project-card'>
                <img src={props.imgsrc} alt="imagem" />
                <h2 className='project-title'>{props.title}</h2>
              <div className='pro-details'>
                <p>{props.text}</p>
                <div className='pro-btns'>
                  <NavLink onClick={opeTab} className='btn' >Ver</NavLink>
                  <NavLink onClick={opeTabGit} className='btn' >Git</NavLink>
                </div>
              </div>
            </div>
    </>
  )
}

export default WorkCard