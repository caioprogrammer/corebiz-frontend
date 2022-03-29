import React from 'react';
import './App.scss'
import './index.scss';
import './swiper.js';


import {Header, Hero, Showcase, Footer} from './containers';

const App = () => {
  return (
    <div>
        <Header />
        <Hero />
        <Showcase />
        <Footer />
    </div>
  )
}

export default App