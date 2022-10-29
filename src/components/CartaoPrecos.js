import './CartaoPrecosStyles.css'

import React from 'react'
import { Link } from 'react-router-dom'

const CartaoPrecos = () => {
  return (
    <div className='preco'>
        <div className='container-do-cartao'>
            <div className='cartao'>
                <h3>- Básico -</h3>
                <span className='barra'></span>
                <p className='btc'>R$ 500,00</p>
                <p>- 3 Dias -</p>
                <p>- 3 Páginas -</p>
                <p>- Destaque -</p>
                <p>- Design Responsivo -</p>
                <Link to='/contact' className='btn'>
                    COMPRE AGORA
                </Link>
            </div>

            <div className='cartao'>
                <h3>- Em Breve -</h3>
                
                <Link to='/contact' className='btn'>
                    CONTATO
                </Link>
            </div>

            <div className='cartao'>
                <h3>- Em Breve -</h3>
                
                <Link to='/contact' className='btn'>
                    CONTATO
                </Link>
            </div>

          
        </div>
    </div>
  )
}

export default CartaoPrecos

/* Somente quando colocar alguns sites no ar. 
 <div className='cartao'>
                <h3>- Premium -</h3>
                <span className='barra'></span>
                <p className='btc'>R$ 1.000,00</p>
                <p>- 3 Dias -</p>
                <p>- 7 Páginas -</p>
                <p>- Destaque -</p>
                <p>- Design Responsivo -</p>
                <Link to='/contact' className='btn'>
                    COMPRE AGORA
                </Link>
            </div>

            <div className='cartao'>
                <h3>- Empresa -</h3>
                <span className='barra'></span>
                <p className='btc'>Negociável</p>
                <p>- Design Responsivo -</p>
                <Link to='/contact' className='btn'>
                    COMPRE AGORA
                </Link>
            </div>*/