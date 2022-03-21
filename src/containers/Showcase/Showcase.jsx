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
        <Swiper breakpoints={{
          1024: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 3,
          },
          600: {
            slidesPerView: 2,
          },
          350: {
            slidesPerView: 2,
          },
          120: {
            slidesPerView: 1,
          }

        }} slidesPerView={4} spaceBetween={30} autoplay={true} loop={true} pagination={false} navigation={true} modules={[Pagination, Navigation]} className="mySwiper">
          {products.map((products, key) => {
            const priceBefore = products.listPrice;
              return (
                <SwiperSlide>
                  <div className='showcase__card' key={key}>
                    <img src={products.imageUrl} alt={products.productName}/>
                    <div className='showcase__card--content'>
                      <p>{products.productName}</p>
                      <span>{products.stars} stars</span>
                      <h4>de R$ {priceBefore}</h4>
                      <h3>por R$ {products.price.toLocaleString('pt-BR').replace('.', ',')}</h3>
                      {/* {products.installments.forEach((item, key) => {
                        return (<h4>{item}</h4>)
                      } )} */}
                      <button>COMPRAR</button>
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