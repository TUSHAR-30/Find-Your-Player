import React,{useContext, useEffect} from 'react'
import { NavLink, useParams,useNavigate } from 'react-router-dom'
import './style.css'
import AllPlayersContext from '../../context/AllPlayersContext';
import playersdata from '../../data/playersjsondata';


function Playerinfo() {
  const ctx=useContext(AllPlayersContext);

  const params = useParams();
  const userid = params.id;
  let foundplayer = playersdata.find(player => player.player_id == userid)

  const indianplayers = playersdata.filter(player => player.country == "India").splice(0, 11);

  useEffect(()=>{
      ctx.updateShowBackBtn(true)

      return(()=>{
        ctx.updateShowBackBtn(false)
      })
  },[])

  return (
     foundplayer && 
      <div className='parentcontainer'>
      <div className='image-otherplayer'>
        <div className='imagecontainer'>
          <div className='playersmallinfoheader'>
            <span>{foundplayer.fullname}</span>
            <span>{foundplayer.country}</span>
          </div>
          <img className='playerimage' src={foundplayer.image_path} ></img>
          <div className='playersmallinfofooter'>INT CARRER:{foundplayer.span}</div>

        </div>
        <div className='otherplayercontainer'>
          <div className='header'>
            <img src='https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png'></img>
            <span>FAMOUS PLAYERS</span>
          </div>

          {
            indianplayers.map((player, ind) => {
              return (<NavLink to={`/allplayers/player/${player.player_id}`} key={ind} className="otherplayer">
                <img src={player.image_path}></img>
                <span>{player.fullname}</span>
              </NavLink>)
            })
          }

        </div>
      </div>
      <div className='playerdetailscontainer'>
        <div className='generalinfo'>
          <div className='fullname'>
            <span>FULL NAME</span>
            <span>{foundplayer.name}</span>
          </div>
          <div className='born'>
            <span>BORN</span>
            <span>{foundplayer.dob}</span>
          </div>
          <div className='age'>
            <span>AGE</span>
            <span>{foundplayer.age}</span>
          </div>
          {/* <div className='nicknames'>
            <span>NICKNAMES</span>
            <span>{foundplayer.name}</span>
          </div> */}
          <div className='battingstyle'>
            <span>BATTING STYLE</span>
            <span>{foundplayer.batting_style}</span>
          </div>
          <div className='bowlingstyle'>
            <span>BOWLING STYLE</span>
            <span>{foundplayer.bowling_style}</span>
          </div>
          {/* <div className='height'>
            <span>HEIGHT</span>
            <span>{foundplayer.name}</span>
          </div> */}
          {/* <div className='playingrole'>
            <span>PLAYING ROLE</span>
            <span>{foundplayer.role}</span>
          </div> */}
          <div className='nationality'>
            <span>NATIONALITY</span>
            <span>{foundplayer.country}</span>
          </div>
        </div>
        <div className='bio'>
          {foundplayer.bio}
        </div>
      </div>
    </div>
    
    

  )
}

export default Playerinfo