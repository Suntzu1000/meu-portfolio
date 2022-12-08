import './WorkCardStyles.css'
import WorkCard from './WorkCard'
import WorkCardDados from './WorkCardDados'
import React from 'react'




const Work = () => {

  
 


  return (
    <div className='work-container'>
        <h1 className='project-heading'>Projetos</h1>
        <div className='project-container'>
            {WorkCardDados.map((val, ind) =>{
             return(
             <WorkCard
                key={ind}
                imgsrc={val.imgsrc}
                title={val.title}
                text={val.text} />  
                ) 
            })}
           
        </div>
    </div>
  )
}

export default Work