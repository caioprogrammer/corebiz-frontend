import React from 'react';
import './Newsletter.scss'

const Newsletter = () => {
  return (
    <div className='newsletter'>
      <h2 className='newsletter__title'>Participe de nossas news com promoções e novidades!</h2>
      <form className='newsletter__form'>
        <input type="text" name="name" id="name" placeholder='Digite seu nome' />
        <input type="email" name="email" id="email" placeholder="Digite seu email" />
        <button className='newsletter__form--button'>Eu Quero !</button>
      </form>
    </div>
  )
}

export default Newsletter