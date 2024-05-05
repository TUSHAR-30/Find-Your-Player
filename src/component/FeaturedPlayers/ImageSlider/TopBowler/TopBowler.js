// import React,{useEffect} from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';

// // import './TopBowler.css'

// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import Aos from 'aos';
// import 'aos/dist/aos.css'



// import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

// // import slide_image_1 from './assets/images/DaleSteyn.png';
// // import slide_image_2 from './assets/images/BreetLee.jpg';
// // import slide_image_3 from './assets/images/JamesAnderson.png';
// // import slide_image_4 from './assets/images/JaspritBumrah.jpg';
// // import slide_image_5 from './assets/images/LasithMalinga.png';
// // import slide_image_6 from './assets/images/ShoaibAkhtar.png';
// // import slide_image_7 from './assets/images/TrentBoult.jpg';

// function TopBowler() {
//   // useEffect(()=>{
//   //   Aos.init({once:true})
//   // },[])
//   return (
//     <div className="container">
//       <h1 className="heading">Top Bowler</h1>
//       <Swiper
//         // data-aos="fade-down"
//         // data-aos-anchor-placement="top-bottom"
//         // data-aos-duration="1200"

//         effect={'coverflow'}
//         grabCursor={true}
//         centeredSlides={true}
//         loop={true}
//         slidesPerView={'auto'}
//         coverflowEffect={{
//           rotate: 0,
//           stretch: 0,
//           depth: 100,
//           modifier: 2.5,
//         }}
//         pagination={{ el: '.swiper-pagination', clickable: true }}
//         navigation={{
//           nextEl: '.swiper-button-next',
//           prevEl: '.swiper-button-prev',
//           clickable: true,
//         }}
//         modules={[EffectCoverflow, Pagination, Navigation]}
//         className="swiper_container"
//       >
//         <SwiperSlide>
//           {/* <img loading='lazy' src={slide_image_1} alt="slide_image" /> */}
//           <img loading='lazy' src="https://ik.imagekit.io/acjcnxcdk/extractedimages/DaleSteyn.png?updatedAt=1714733230429" alt="slide_image" />

//         </SwiperSlide>
//         <SwiperSlide>
//           {/* <img loading='lazy' src={slide_image_2} alt="slide_image" /> */}
//           <img loading='lazy' src="https://ik.imagekit.io/acjcnxcdk/extractedimages/BreetLee.jpg?updatedAt=1714733229953" alt="slide_image" />

//         </SwiperSlide>
//         <SwiperSlide>
//           {/* <img loading='lazy' src={slide_image_3} alt="slide_image" /> */}
//           <img loading='lazy' src="https://ik.imagekit.io/acjcnxcdk/extractedimages/JamesAnderson.png?updatedAt=1714733230288" alt="slide_image" />

//         </SwiperSlide>
//         <SwiperSlide>
//           {/* <img loading='lazy' src={slide_image_4} alt="slide_image" /> */}
//           <img loading='lazy' src="https://ik.imagekit.io/acjcnxcdk/extractedimages/JaspritBumrah.jpg?updatedAt=1714733233377" alt="slide_image" />

//         </SwiperSlide>
//         <SwiperSlide>
//           {/* <img loading='lazy' src={slide_image_5} alt="slide_image" /> */}
//           <img loading='lazy' src="https://ik.imagekit.io/acjcnxcdk/extractedimages/LasithMalinga.png?updatedAt=1714733233507" alt="slide_image" />

//         </SwiperSlide>
//         <SwiperSlide>
//           {/* <img loading='lazy' src={slide_image_6} alt="slide_image" /> */}
//           <img loading='lazy' src="https://ik.imagekit.io/acjcnxcdk/extractedimages/ShoaibAkhtar.png?updatedAt=1714733236330" alt="slide_image" />

//         </SwiperSlide>
//         <SwiperSlide>
//           {/* <img loading='lazy' src={slide_image_7} alt="slide_image" /> */}
//           <img loading='lazy' src="https://ik.imagekit.io/acjcnxcdk/extractedimages/TrentBoult.jpg?updatedAt=1714733236427" alt="slide_image" />
//         </SwiperSlide>

//         <div className="slider-controler">
//           <div className="swiper-button-prev slider-arrow">
//             <ion-icon name="arrow-back-outline" style={{fontWeight:"bold"}}></ion-icon>
//           </div>
//           <div className="swiper-button-next slider-arrow">
//             <ion-icon name="arrow-forward-outline" style={{fontWeight:"bold"}}></ion-icon>
//           </div>
//           <div className="swiper-pagination"></div>
//         </div>
//       </Swiper>
//     </div>
//   );
// }

// export default TopBowler;


import React,{useEffect} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import Styles from './ImageSlider.module.css'

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

// import slide_image_1 from './assets/images/HardikPandya.png';
// import slide_image_2 from './assets/images/Kallis.png';
// import slide_image_3 from './assets/images/Maxwell.jpg';
// import slide_image_4 from './assets/images/RavindraJadeja.jpg';
// import slide_image_5 from './assets/images/ShadabKhan.png';
// import slide_image_6 from './assets/images/ShakibAlHasan.png';
// import slide_image_7 from './assets/images/SikandarRaza.jpg';

function TopBowler() {
  return (

    <div className={Styles.container}>
      <h1 className={Styles.heading}>Top Bowler</h1>
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
          <img loading='lazy' src="https://ik.imagekit.io/acjcnxcdk/extractedimages/HardikPandya.png?updatedAt=1714733230199" alt="slide_image" className={Styles.img}/>

        </SwiperSlide>
        <SwiperSlide className={`swiper-slide ${Styles.swiper_slide}`}>
          {/* <img loading='lazy' src={slide_image_2} alt="slide_image" /> */}
          <img loading='lazy' src="https://ik.imagekit.io/acjcnxcdk/extractedimages/Kallis.png?updatedAt=1714733233465" alt="slide_image" className={Styles.img} />

        </SwiperSlide>
        <SwiperSlide className={Styles.swiper_slide}>
          {/* <img loading='lazy' src={slide_image_3} alt="slide_image" /> */}
          <img loading='lazy' src="https://ik.imagekit.io/acjcnxcdk/extractedimages/Maxwell.jpg?updatedAt=1714733233412" alt="slide_image" className={Styles.img}/>

        </SwiperSlide>
        <SwiperSlide className={Styles.swiper_slide}>
          {/* <img loading='lazy' src={slide_image_4} alt="slide_image" /> */}
          <img loading='lazy' src="https://ik.imagekit.io/acjcnxcdk/extractedimages/RavindraJadeja.jpg?updatedAt=1714733234004" alt="slide_image" className={Styles.img}/>

        </SwiperSlide>
        <SwiperSlide className={Styles.swiper_slide}>
          {/* <img loading='lazy' src={slide_image_5} alt="slide_image" /> */}
          <img loading='lazy' src="https://ik.imagekit.io/acjcnxcdk/extractedimages/ShadabKhan.png?updatedAt=1714733233680" alt="slide_image" className={Styles.img} />

        </SwiperSlide>
        <SwiperSlide className={Styles.swiper_slide}>
          {/* <img loading='lazy' src={slide_image_6} alt="slide_image" /> */}
          <img loading='lazy' src="https://ik.imagekit.io/acjcnxcdk/extractedimages/ShakibAlHasan.png?updatedAt=1714733234261" alt="slide_image" className={Styles.img}/>

        </SwiperSlide>
        <SwiperSlide className={Styles.swiper_slide}>
          {/* <img loading='lazy' src={slide_image_7} alt="slide_image" /> */}
          <img loading='lazy' src="https://ik.imagekit.io/acjcnxcdk/extractedimages/SikandarRaza.jpg?updatedAt=1714733236576" alt="slide_image" className={Styles.img}/>

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

export default TopBowler;




