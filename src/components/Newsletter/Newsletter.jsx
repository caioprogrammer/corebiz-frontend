import React, {useEffect} from 'react';
import './Newsletter.scss'

const Newsletter = () => {

  function fazBody(url, body) {
    console.log("Body=", body);

    let request = new XMLHttpRequest();
    request.open("POST", url, true);
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(body));

    request.onload = function() {
      console.log(this.responseText)
    }

    return request.responseText
  }

  function submitCadastro() {
    let url = "https://corebiz-test.herokuapp.com/api/v1/newsletter";
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;

    var body = {
      "email": email,
      "name": name,
      "message": "Created successfully"
    }

    fazBody(url, body)
  }


  useEffect(() => {
    const buttonSubmit = document.getElementById('buttonSubmit');
    const buttonReset = document.getElementById('buttonReset')
    const name = document.querySelector('#name');
    const email = document.querySelector('#email');
    const field = document.querySelectorAll('.field')
    const sucesso = document.querySelector('.newsletter__ok');
    const form = document.querySelector('.newsletter__form')
    const h2 = document.querySelector('.newsletter__title')
    buttonSubmit.addEventListener('click',(e) => {
      e.preventDefault()
      if(name.value !== '' && email.value !== '') {
        sucesso.classList.add('active');
        h2.style.display = 'none'
        form.style.display = 'none';
        field.forEach((item) => {
          item.classList.remove('error')
        })
        submitCadastro()
      } else {
        field.forEach((item) => {
          item.classList.add('error')
        })
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
      <form className='newsletter__form' onSubmit={submitCadastro}>
        
        <div className='field'>
          <input type="text" name="name" id="name" required placeholder='Digite seu nome' />
          <label htmlFor="name">Preencha com seu nome completo</label>
        </div>
        <div className='field'>
          <input type="email" name="email" id="email" required placeholder="Digite seu email" />
          <label htmlFor="email">Preencha com um email válido</label>
        </div>
          <button id='buttonSubmit' type='submit' className='newsletter__form--button'>Eu Quero!</button>
      
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