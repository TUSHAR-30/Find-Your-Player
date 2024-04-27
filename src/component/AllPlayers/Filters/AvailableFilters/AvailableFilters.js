import React from 'react'
import Nationality from './Nationality/Nationality'
import Age from './Age/Age'
import BattingAverage from './BattingAverage/BattingAverage'
import Runs from './Runs/Runs'
import Wickets from './Wickets/Wickets'
import Matches from './Matches/Matches'
// import Role from './Role/Role'

function AvailableFilters(props) {

  return (
    <div  style={{display:'flex',flexDirection:'column',gap:'2px'}}>

        <Nationality 
          playersdata={props.playersdata} 
          handlefilters={props.handlefilters}
          nationalityappliedfilters={props.nationalityappliedfilters}
        />

        <Age 
          playersdata={props.playersdata} 
          handlefilters={props.handlefilters}
          ageappliedfilters={props.ageappliedfilters}
        />

        <BattingAverage  
        playersdata={props.playersdata} 
        handlefilters={props.handlefilters}
        battingaverageappliedfilters={props.battingaverageappliedfilters}
        />

        <Runs 
          playersdata={props.playersdata} 
          handlefilters={props.handlefilters}
          runsappliedfilters={props.runsappliedfilters}
        />

        <Wickets 
          playersdata={props.playersdata} 
          handlefilters={props.handlefilters}
          wicketsappliedfilters={props.wicketsappliedfilters}
        />

        <Matches 
          playersdata={props.playersdata} 
          handlefilters={props.handlefilters}
          matchesappliedfilters={props.matchesappliedfilters}
        />


        {/* <Role playersdata={props.playersdata} passRolefilters={props.passRolefilters} handleshowfilters={props.handleshowfilters}/> */}
        
    </div>
  )
}

export default AvailableFilters