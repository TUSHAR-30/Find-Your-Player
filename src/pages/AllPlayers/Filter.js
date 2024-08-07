import React, { useEffect, useState } from 'react'
import AppliedFilters from './AppliedFilters'
import AvailableFilters from './AvailableFilters'
import { useContext } from 'react';
import AllPlayersContext from '../../context/AllPlayersContext';

function Filter(props) {
  // const [filters, updateFilters] = useState({
  //   nationalityAppliedFilters: [],
  //   ageAppliedFilters: [],
  //   battingaverageAppliedFilters: [],
  //   runsAppliedFilters:[],
  //   wicketsAppliedFilters:[],
  //   matchesAppliedFilters:[],
  // })
  const filtercontext=useContext(AllPlayersContext);

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

    if (filtercontext.filters.nationalityAppliedFilters.length > 0) {
      newplayers = props.playersdata.filter(player => {
         return filtercontext.filters.nationalityAppliedFilters.includes(player.country) 
        })
    } 
    if (filtercontext.filters.ageAppliedFilters.length > 0) {
      newplayers = newplayers.filter(player => {
        const ageGroup = getAgeGroup(player.age);
        return filtercontext.filters.ageAppliedFilters.includes(ageGroup)
      })
    }
    if (filtercontext.filters.battingaverageAppliedFilters.length > 0) {
      newplayers = newplayers.filter(player => {
        const battingaverageGroup = getBattingAverageGroup(player.average);
        return filtercontext.filters.battingaverageAppliedFilters.includes(battingaverageGroup)
      })
    }
    if(filtercontext.filters.runsAppliedFilters.length>0){
      newplayers=newplayers.filter(player=>{
        const runsGroup=getRunsGroup(player.runs);
        return filtercontext.filters.runsAppliedFilters.includes(runsGroup);
      })
    }
    if(filtercontext.filters.wicketsAppliedFilters.length>0){
      newplayers=newplayers.filter(player=>{
        const wicketsGroup=getWicketsGroup(player.wickets);
        return filtercontext.filters.wicketsAppliedFilters.includes(wicketsGroup);
      })
    }
    if(filtercontext.filters.matchesAppliedFilters.length>0){
      newplayers=newplayers.filter(player=>{
        const matchesGroup=getMatchesGroup(player.matches);
        return filtercontext.filters.matchesAppliedFilters.includes(matchesGroup);
      })
    }

    props.handlefilteredPlayers(newplayers);
  }


  function handlefilters(filtercategory,filtersofthatcategory){
    let temp={...(filtercontext.filters)};
    temp[filtercategory]=filtersofthatcategory;
    filtercontext.updateFilters(temp);
  }

  function handleshowfilters(){
    const arrayOfObjects = Object.keys(filtercontext.filters).flatMap(key => {
      const values = filtercontext.filters[key];
      return values.map(value => ({ [key]: value }));
    });
    updateShowAppliedFilters(arrayOfObjects);
  }
 

  useEffect(() => {
    handlecards();
    handleshowfilters();
  }, [filtercontext.filters])

  useEffect(() => {
    props.passappliedfilters(showappliedfilters.length); // only have effect when mobile device has open the website
}, [showappliedfilters])


  return (
    <div>
        <AppliedFilters showappliedfilters={showappliedfilters} 
          filters={filtercontext.filters}
          handlefilters={handlefilters}
        />

        <AvailableFilters 
          playersdata={props.playersdata} 
          handlefilters={handlefilters} 
          ageappliedfilters={filtercontext.filters.ageAppliedFilters} 
          nationalityappliedfilters={filtercontext.filters.nationalityAppliedFilters} 
          battingaverageappliedfilters={filtercontext.filters.battingaverageAppliedFilters}
          runsappliedfilters={filtercontext.filters.runsAppliedFilters}
          wicketsappliedfilters={filtercontext.filters.wicketsAppliedFilters}
          matchesappliedfilters={filtercontext.filters.matchesAppliedFilters}
        />
    </div>
  )
}

export default Filter