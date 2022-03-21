import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Hero.scss";

// import required modules
import { Pagination, Navigation } from "swiper";

// import image banners
import banner1 from '../../assets/banner.png';
import banner2 from '../../assets/banner.png';
import wave from '../../assets/svg.png'

export default function Hero() {
  return (
    <>
      <Swiper pagination={true} navigation={true} modules={[Pagination, Navigation]} className="mySwiper">
        <SwiperSlide>
          <div>
            <span>Olá o que você está buscando?</span>
            <h2>Criar ou migrar seu <br/> e-commerce?</h2>
            <img className="wave" src={wave} alt="" />
          </div>
          <img src={banner1} alt=''/>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <span>Olá o que você está buscando?</span>
            <h2>Criar ou migrar seu <br/> e-commerce?</h2>
            <img src={wave} alt="" />
          </div>
          <img src={banner2} alt=''/>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <span>Olá o que você está buscando?</span>
            <h2>Criar ou migrar seu <br/> e-commerce?</h2>
            <img src={wave} alt="" />
          </div>
          <img src={banner1} alt=''/>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <span>Olá o que você está buscando?</span>
            <h2>Criar ou migrar seu <br/> e-commerce?</h2>
            <img src={wave} alt="" />
          </div>
          <img src={banner2} alt=''/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

