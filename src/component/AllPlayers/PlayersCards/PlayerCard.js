import React from 'react'
import { NavLink } from 'react-router-dom'
import './PlayerCard.css'

function PlayerCard(playerdata) {
    const{id}=playerdata;
    const playerimage=`url(${playerdata.image_url})`;
    return (
        <div className='player-container' >
            <div>
                <div className='player-image' style={{backgroundImage:playerimage}}></div>
                {/* <NavLink to={`/player/${id}`} */}
                <NavLink to={`/allplayers/player/${id}`}
                style={{marginTop:'5px',marginLeft:'18px',fontSize:'1rem',fontWeight:'bolder',color:'green'}}>See Profile</NavLink>
            </div>

            <div style={{height:'199px',width:'0px',borderLeft:'solid'}}></div>
            <div className='player-information'>
                <h2>{playerdata.name}</h2>
                <p>Age:-{playerdata.age}</p>
                <p>Country:-{playerdata.country}</p>
                <p>Role:-{playerdata.role}</p>
                <p>Matches:-{playerdata.matches}</p>
                <p>Runs:-{playerdata.runs}</p>
                <p>Wickets:-{playerdata.wickets}</p>
                <p>Average:-{playerdata.average}</p>
                {/* <p>BattingAverage:-{playerdata.battingaverage}</p> */}
                {/* <p>BowlingAverage:-{playerdata.bowlingaverage}</p> */}
            </div>
        </div>
    )
}

export default PlayerCard