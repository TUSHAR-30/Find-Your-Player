import React from 'react'
import  Carousel  from '../../component/Home/Carousel/Carousel';
import TopBatsman from '../../component/Home/ImageSlider/TopBatsman/TopBatsman';
import TopBowler from '../../component/Home/ImageSlider/TopBowler/TopBowler';
import TopAllRounder from '../../component/Home/ImageSlider/TopAllRounder/TopAllRounder';


function Home() {
  return (
    <div >
      <Carousel/>
      <TopBatsman />
      <TopBowler />
      <TopAllRounder />
    </div>
  )
}

export default Home