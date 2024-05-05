
import React,{useEffect} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import Styles from './ImageSlider.module.css'

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

function TopBatsman() {
  return (

    <div className={Styles.container}>
      <h1 className={Styles.heading}>Top Batsman</h1>
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
        <SwiperSlide className={`swiper-slide ${Styles.swiper_slide}`}>
          {/* <img loading='lazy' src={slide_image_1} alt="slide_image" />  */}
          <img loading='lazy' src="https://ik.imagekit.io/acjcnxcdk/extractedimages/SteveSmith.png?updatedAt=1714733236702" alt="slide_image" className={Styles.img}/>

        </SwiperSlide>
        <SwiperSlide className={Styles.swiper_slide}>
          {/* <img loading='lazy' src={slide_image_2} alt="slide_image" /> */}
          <img loading='lazy' src="https://ik.imagekit.io/acjcnxcdk/extractedimages/Virat%20Kohli.jpg?updatedAt=1714733236897" alt="slide_image" className={Styles.img} />

        </SwiperSlide>
        <SwiperSlide className={Styles.swiper_slide}>
          {/* <img loading='lazy' src={slide_image_3} alt="slide_image" /> */}
          <img loading='lazy' src="https://ik.imagekit.io/acjcnxcdk/extractedimages/JosButtler.png?updatedAt=1714733233743" alt="slide_image" className={Styles.img}/>

        </SwiperSlide>
        <SwiperSlide className={Styles.swiper_slide}>
          {/* <img loading='lazy' src={slide_image_4} alt="slide_image" /> */}
          <img loading='lazy' src="https://ik.imagekit.io/acjcnxcdk/extractedimages/KaneWilliamson.png?updatedAt=1714733233655" alt="slide_image" className={Styles.img}/>

        </SwiperSlide>
        <SwiperSlide className={Styles.swiper_slide}>
          {/* <img loading='lazy' src={slide_image_5} alt="slide_image" /> */}
          <img loading='lazy' src="https://ik.imagekit.io/acjcnxcdk/extractedimages/JoeRoot.png?updatedAt=1714733233354" alt="slide_image" className={Styles.img} />

        </SwiperSlide>
        <SwiperSlide className={Styles.swiper_slide}>
          {/* <img loading='lazy' src={slide_image_6} alt="slide_image" /> */}
          <img loading='lazy' src="https://ik.imagekit.io/acjcnxcdk/extractedimages/DavidWarner.jpeg?updatedAt=1714733230269" alt="slide_image" className={Styles.img}/>

        </SwiperSlide>
        <SwiperSlide className={Styles.swiper_slide}>
          {/* <img loading='lazy' src={slide_image_7} alt="slide_image" /> */}
          <img loading='lazy' src="https://ik.imagekit.io/acjcnxcdk/extractedimages/BabarAzam.png?updatedAt=1714733230036" alt="slide_image" className={Styles.img}/>

        </SwiperSlide>

        <div className={Styles.slider_controler}>
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline" style={{fontWeight:"bold"}}></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline" style={{fontWeight:"bold"}}></ion-icon>
          </div>
          <div className='swiper-pagination'></div>
        </div>
      </Swiper>
    </div>
  );
}

export default TopBatsman;









