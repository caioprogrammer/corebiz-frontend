import React from 'react';
import './Header.scss'

import logo from '../../assets/logo-corebiz.png';
import lupa from '../../assets/lupa.png';
import customer from '../../assets/customer.png';
import carrinho from '../../assets/carrinho.png'
import menu from '../../assets/menu.svg';

const Header = () => {
  return (
    <div className='header'>
      <div className='container'>
        <div className='header__menu'>
          <img src={menu} alt='menu'></img>
        </div>
        <div className='header__logo'>
          <img src={logo} alt="logo"/>
        </div>
        <div className='header__search'>
          <form className='header__search--form'>
            <input type="text" placeholder='O que está procurando?'/>
            <img src={lupa} alt="lupa"/>
          </form>
        </div>
        <div className='header__right'>
          <div className='header__right--customer'>
            <img src={customer} alt="conta" />
            <span>Minha conta</span>
          </div>
          <div className='header__right--cart'>
            <img src={carrinho} alt="carrinho"/>
            <span className='header__right--cart number'>
              1
            </span>
          </div>
        </div>
      </div>
      <div className='header__search--mobile'>
          <form className='header__search--form mobile'>
            <input type="text" placeholder='O que está procurando?'/>
            <img src={lupa} alt="lupa"/>
          </form>
      </div>
    </div>
  )
}

export default Header