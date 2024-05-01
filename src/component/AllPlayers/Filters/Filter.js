import React, { useEffect, useState } from 'react'
import AppliedFilters from './AppliedFilters/AppliedFilters'
import AvailableFilters from './AvailableFilters/AvailableFilters'

function Filter(props) {
  const [filters, updateFilters] = useState({
    nationalityAppliedFilters: [],
    ageAppliedFilters: [],
    battingaverageAppliedFilters: [],
    runsAppliedFilters:[],
    wicketsAppliedFilters:[],
    matchesAppliedFilters:[],
  })

  const [showappliedfilters, updateShowAppliedFilters] = useState([]);

  function handlecards() {
    let newplayers = props.playersdata;

    function getAgeGroup(age) {
      if (age >= 11 && age <= 20) return "11-20 age";
      if (age >= 21 && age <= 30) return "21-30 age";
      if(age>=31 && age <=40) return "31-40 age";
      if (age >= 41 && age <= 50) return "41-50 age";
    }

    function getBattingAverageGroup(battingaverage) {
      if (battingaverage >= 0 && battingaverage <= 10) return "0-10 batting avg.";
      if (battingaverage > 10 && battingaverage <= 20) return "10-20 batting avg.";
      if (battingaverage > 20 && battingaverage <= 30) return "20-30 batting avg.";
      if (battingaverage > 30 && battingaverage <= 40) return "30-40 batting avg.";
      if (battingaverage > 40 && battingaverage <= 50) return "40-50 batting avg.";
      if (battingaverage > 50) return ">50 batting avg.";
    }
    function getRunsGroup(runs){
      if(runs>=0 && runs<=1000) return "0-1000 runs";
      if(runs>=1001 && runs<=2000) return "1001-2000 runs";
      if(runs>=2001 && runs<=3000) return "2001-3000 runs";
      if(runs>=3001 && runs<=4000) return "3001-4000 runs";
      if(runs>4000) return ">4000 runs";
    }
    function getWicketsGroup(wickets){
      if(wickets>=0 && wickets<=50) return "0-50 wickets";
      if(wickets>=51 && wickets<=100) return "51-100 wickets";
      if(wickets>=101 && wickets<=150) return "101-150 wickets";
      if(wickets>150) return ">150 wickets";
    }
    function getMatchesGroup(matches){
      if(matches>=1 && matches<=50) return "1-50 matches";
      if(matches>=51 && matches<=100) return "51-100 matches";
      if(matches>=101 && matches<=150) return "101-150 matches";
      if(matches>150) return ">150 matches";
    }

    if (filters.nationalityAppliedFilters.length > 0) {
      newplayers = props.playersdata.filter(player => {
         return filters.nationalityAppliedFilters.includes(player.country) 
        })
    } 
    if (filters.ageAppliedFilters.length > 0) {
      newplayers = newplayers.filter(player => {
        const ageGroup = getAgeGroup(player.age);
        return filters.ageAppliedFilters.includes(ageGroup)
      })
    }
    if (filters.battingaverageAppliedFilters.length > 0) {
      newplayers = newplayers.filter(player => {
        const battingaverageGroup = getBattingAverageGroup(player.average);
        return filters.battingaverageAppliedFilters.includes(battingaverageGroup)
      })
    }
    if(filters.runsAppliedFilters.length>0){
      newplayers=newplayers.filter(player=>{
        const runsGroup=getRunsGroup(player.runs);
        return filters.runsAppliedFilters.includes(runsGroup);
      })
    }
    if(filters.wicketsAppliedFilters.length>0){
      newplayers=newplayers.filter(player=>{
        const wicketsGroup=getWicketsGroup(player.wickets);
        return filters.wicketsAppliedFilters.includes(wicketsGroup);
      })
    }
    if(filters.matchesAppliedFilters.length>0){
      newplayers=newplayers.filter(player=>{
        const matchesGroup=getMatchesGroup(player.matches);
        return filters.matchesAppliedFilters.includes(matchesGroup);
      })
    }

    props.handlefilteredPlayers(newplayers);
  }


  function handlefilters(filtercategory,filtersofthatcategory){
    let temp={...filters};
    temp[filtercategory]=filtersofthatcategory;
    updateFilters(temp);
  }

  function handleshowfilters(){
    const arrayOfObjects = Object.keys(filters).flatMap(key => {
      const values = filters[key];
      return values.map(value => ({ [key]: value }));
    });
    updateShowAppliedFilters(arrayOfObjects);
  }
 

  useEffect(() => {
    handlecards();
    handleshowfilters();
  }, [filters])

  useEffect(() => {
    props.passappliedfilters(showappliedfilters.length); // only have effect when mobile device has open the website
}, [showappliedfilters])


  return (
    <div>
        <AppliedFilters showappliedfilters={showappliedfilters} 
          filters={filters}
          handlefilters={handlefilters}
        />

        <AvailableFilters 
          playersdata={props.playersdata} 
          handlefilters={handlefilters} 
          ageappliedfilters={filters.ageAppliedFilters} 
          nationalityappliedfilters={filters.nationalityAppliedFilters} 
          battingaverageappliedfilters={filters.battingaverageAppliedFilters}
          runsappliedfilters={filters.runsAppliedFilters}
          wicketsappliedfilters={filters.wicketsAppliedFilters}
          matchesappliedfilters={filters.matchesAppliedFilters}
        />
    </div>
  )
}

export default Filter