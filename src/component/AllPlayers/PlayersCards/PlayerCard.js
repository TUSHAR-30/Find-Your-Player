import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './PlayerCard.css'

function PlayerCard(playerdata) {
    const{id}=playerdata;
    const playerimage=`url(${playerdata.image_url})`;
    return (
        <div className='player-container'>
            <div>
                <div className='player-image'>
                    <img loading='lazy' src={playerdata.image_url} 
                     style={{height:'100%',width:'100%',borderRadius:'50%'}}
                    />
                </div>

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
            </div>
        </div>
    )
}

export default PlayerCard



