import './FormStyles.css'
import emailjs from 'emailjs-com'
import React from 'react'

const Form = () => {

function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('gmailMessage', 'template_rxxi3cg', e.target, 'FWfIqkWp5xVQgLugA')

        .then((result) => {
            alert("Mensagem enviada com sucesso! 👍");
           
        }, (error) => {
            alert(error.message)
            
        });
        e.target.reset()

 
    }

  return (
    <div className='form'>
          <form onSubmit={sendEmail}>
            <label>Seu Nome</label>
            <input type='text' required placeholder='Seu Nome' name='name'></input>
            <label>Seu Email</label>
            <input type='email' required placeholder='Seu Email' name='email'></input>
            <label>Mensagem</label>
            <textarea id='' rows='6' placeholder='Envie sua mensagem aqui' name='message'/>
            <button className='btn'>Enviar</button>
         </form>
    </div>
  )
}

export default Form