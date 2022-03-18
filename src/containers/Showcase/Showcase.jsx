import React, { useEffect, useState, useRef } from 'react';
import './Showcase.scss';
import axios from 'axios';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

const Showcase = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get("https://corebiz-test.herokuapp.com/api/v1/products")
    .then((response) => {
      setProducts(response.data)
    })
    .catch(() => {
      console.log('Deu errado')
    })
  }, [])
  return (
    <div className='showcase container'>
      <h2 className='showcase__title'>
        Mais vendidos
      </h2>
      <hr />
      <div className='showcase__swiper'>
        <Swiper slidesPerView={4} spaceBetween={30} loop={true} pagination={false} navigation={true} modules={[Pagination, Navigation]} className="mySwiper">
          {products.map((products, key) => {
              return (
                <SwiperSlide>
                  <div className='showcase__card' key={key}>
                    <img src={products.imageUrl} alt={products.productName}/>
                    <div className='showcase__card--content'>
                      <p>{products.productName}</p>
                      <span>{products.stars}</span>
                      {products.installments.forEach((item) => {
                        console.log(item.quantity)
                        console.log(item.value)
                      })}
                      <br />
                      <h3>R$ {products.price.toLocaleString('pt-BR').replace('.', ',')}</h3>
                    </div>
                  </div>
                </SwiperSlide>
                
              )
              
            })}
        </Swiper>

          
      </div>
    </div>
  )
}

export default Showcase