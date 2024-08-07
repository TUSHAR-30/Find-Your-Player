import React from 'react'
import Nationality from './Nationality'
import AllFilters from './AllFilters'
// import Age from './Age'
// import BattingAverage from './BattingAverage'
// import Runs from './Runs'
// import Wickets from './Wickets'
// import Matches from './Matches'

function AvailableFilters(props) {

  return (
    <div  style={{display:'flex',flexDirection:'column',gap:'2px'}}>

        <Nationality 
          playersdata={props.playersdata} 
          handlefilters={props.handlefilters}
          nationalityappliedfilters={props.nationalityappliedfilters}
        />

        <AllFilters
          playersdata={props.playersdata} 
          handlefilters={props.handlefilters}
          ageappliedfilters={props.ageappliedfilters}
          battingaverageappliedfilters={props.battingaverageappliedfilters}
          runsappliedfilters={props.runsappliedfilters}
          wicketsappliedfilters={props.wicketsappliedfilters}
          matchesappliedfilters={props.matchesappliedfilters}
        />

        {/* <Age 
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
        /> */}

    </div>
  )
}

export default AvailableFilters