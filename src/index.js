import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './index.scss';

import "swiper/css/bundle";

ReactDOM.render( <App /> , document.getElementById('root'));

// document.addEventListener("DOMContentLoaded", function(event) {
//       const quantity = document.getElementById('quantity');
//       const addCart = document.querySelectorAll('#plus');
//       var number = 0;
//       const max = 30;

//       addCart.forEach((button) => {
//         button.addEventListener('click', () => {
//             if(number < max) {
//                 number = number+1;
//                 quantity.innerText = number
//             }
//         })
//       })
// })