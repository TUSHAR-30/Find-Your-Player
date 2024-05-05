import React from 'react'
import  Carousel  from '../../component/FeaturedPlayers/Carousel/Carousel';
import TopBatsman from '../../component/FeaturedPlayers/ImageSlider/TopBatsman/TopBatsman';
import TopBowler from '../../component/FeaturedPlayers/ImageSlider/TopBowler/TopBowler';
import TopAllRounder from '../../component/FeaturedPlayers/ImageSlider/TopAllRounder/TopAllRounder';


function FeaturedPlayers() {
  return (
    <div >
      <Carousel/>
      <TopBatsman />
      <TopAllRounder />
      <TopBowler />
    </div>
  )
}

export default FeaturedPlayers