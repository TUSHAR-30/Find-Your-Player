
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import imageslider from '../../data/imageslider';

import Styles from './styles/ImageSlider.module.css'

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

function ImageSliders() {
  return (
    <div>
      {
        imageslider.map((slider, index) => {
          return (
            <div className={Styles.container} key={index}>
              <h1 className={Styles.heading}>{slider.section_name}</h1>
              <Swiper
                lazy={true}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 2.5,
                }}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation={{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                  clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className={Styles.swiper_container}
              >
                {
                  slider.players.map((slide, index) => {
                    return <SwiperSlide className={`swiper-slide ${Styles.swiper_slide}`} key={index}>
                      <img loading='lazy' src={slide.player_url} alt="slide_image" className={Styles.img} />
                    </SwiperSlide>
                  })
                }

                <div className={Styles.slider_controler}>
                  <div className="swiper-button-prev slider-arrow">
                    <ion-icon name="arrow-back-outline" style={{ fontWeight: "bold" }}></ion-icon>
                  </div>
                  <div className="swiper-button-next slider-arrow">
                    <ion-icon name="arrow-forward-outline" style={{ fontWeight: "bold" }}></ion-icon>
                  </div>
                  <div className='swiper-pagination'></div>
                </div>
              </Swiper>
            </div>
          )
        })
      }
    </div>

  );
}

export default ImageSliders;









