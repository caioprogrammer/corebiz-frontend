import React from 'react';
import './Footer.scss';

import corebiz from '../../assets/corebiz.svg';
import vtex from '../../assets/vtex.svg';
import atendimento from '../../assets/atendimento.svg';
import email from '../../assets/email.svg'

import Newsletter from '../../components/Newsletter/Newsletter'

const Footer = () => {
  return (
    <div className='footer'>
      <Newsletter />
      <div className='footer__content container'>
        <div className='footer__content--location'>
          <h2>Localização</h2>
          <hr />
          <ul>
            <li>Avenida Andrômeda, 2000. Bloco 6 e 8</li>
            <li>Alphavile SP</li>
            <li>brasil@corebiz.ag</li>
            <li>+55 11 3090 1039</li>
          </ul>
        </div>
        <div className='footer__content--buttons'>
          <a href="#0">
            <img src={email} alt=''/>
            <span>Entre em contato</span>
          </a>
          <a href="#0">
            <img src={atendimento} alt=''/>
            <span>Fale com o nosso consultor online</span>
          </a>
        </div>
        <div className='footer__content--partners'>
          <ul>
            <li>
              Created by
              <img src={corebiz} alt=''/>
            </li>
            <li>
              Powered by
              <img src={vtex} alt=''/>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer