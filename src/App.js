import React  from 'react';
import './index.scss';
import './swiper';


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