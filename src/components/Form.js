import './FormStyles.css'

import React from 'react'

const Form = () => {
  return (
    <div className='form'>
        <form>
            <label>Seu Nome</label>
            <input type='text'></input>
            <label>Seu Email</label>
            <input type='email'></input>
            <label>Mensagem</label>
            <textarea rows='6' placeholder='Escreva sua mensagem aqui'/>
            <button className='btn'>Enviar</button>
        </form>
    </div>
  )
}

export default Form