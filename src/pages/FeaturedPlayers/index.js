import React,{useContext,useEffect} from 'react'
import AllPlayersContext from "../../context/AllPlayersContext";
import  Carousel  from './Carousel';
import ImageSliders from './ImageSliders';

function FeaturedPlayers() {
  const ctx=useContext(AllPlayersContext);

  useEffect(()=>{
    ctx.updateFilters({
      nationalityAppliedFilters: [],
      ageAppliedFilters: [],
      battingaverageAppliedFilters: [],
      runsAppliedFilters:[],
      wicketsAppliedFilters:[],
      matchesAppliedFilters:[],
    })
  },[])
  return (
    <div >
      <Carousel/>
      <ImageSliders />
    </div>
  )
}

export default FeaturedPlayers