import React, {Component} from 'react'

import './HeroImg02Styles.css'

class HeroImg02 extends Component {
  render(){
    return (
    <div className='hero-img'>
        <div className='cabeçalho'>
            <h1>{this.props.heading}</h1>
            <p>{this.props.text}</p>
        </div>
    </div>
  )
  }
  
}

export default HeroImg02