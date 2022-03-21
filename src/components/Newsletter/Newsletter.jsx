import React, {useEffect} from 'react';
import './Newsletter.scss'

const Newsletter = () => {

  useEffect(() => {
    const buttonSubmit = document.getElementById('buttonSubmit');
    const buttonReset = document.getElementById('buttonReset')
    const name = document.querySelector('#name');
    const email = document.querySelector('#email');
    const sucesso = document.querySelector('.newsletter__ok');
    const form = document.querySelector('.newsletter__form')
    const h2 = document.querySelector('.newsletter__title')
    buttonSubmit.addEventListener('click',(e) => {
      e.preventDefault()
      if(name.value !== '' && email.value !== '') {
        sucesso.classList.add('active');
        h2.style.display = 'none'
        form.style.display = 'none'
      } else {
        console.log('preencha por favor')
      }
        
    })
    buttonReset.addEventListener('click', (e) => {
      e.preventDefault()
      form.style.display = 'flex';
      h2.style.display = 'block'
      sucesso.classList.remove('active')
    })
  })

  return (
    <div className='newsletter'>
      <h2 className='newsletter__title'>Participe de nossas news com promoções e novidades!</h2>
      <form className='newsletter__form'>
        <input type="text" name="name" id="name" required placeholder='Digite seu nome' />
        <input type="email" name="email" id="email" required placeholder="Digite seu email" />
        <button id='buttonSubmit' className='newsletter__form--button'>Eu Quero!</button>
      </form>
      <div className='newsletter__ok'>
        <span><strong>Seu email foi cadastrado com sucesso</strong></span>
        <span>a partir de agora você receberá novidades e ofertas exclusivas</span>
        <button id='buttonReset' className='newsletter__form--button'>Cadastrar novo email</button>
      </div>
    </div>
  )
}

export default Newsletter