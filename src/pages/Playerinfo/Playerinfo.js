import React from 'react'
import { useParams } from 'react-router-dom'
import playersdata from '../../playersjsondata';
import './Playerinfo.css'


function Playerinfo() {
  const params = useParams();
  const userid = params.id;
  let foundplayer = playersdata.find(player => player.player_id == userid)
  return (
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
          <div className='otherplayer'>
            <img src='https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/316400/316486.png'></img>
            <span>{foundplayer.name}</span>
          </div>
          <div className='otherplayer'>
            <img src='https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/316400/316486.png'></img>
            <span>{foundplayer.name}</span>
          </div><div className='otherplayer'>
            <img src='https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/316400/316486.png'></img>
            <span>{foundplayer.name}</span>
          </div><div className='otherplayer'>
            <img src='https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/316400/316486.png'></img>
            <span>{foundplayer.name}</span>
          </div><div className='otherplayer'>
            <img src='https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/316400/316486.png'></img>
            <span>{foundplayer.name}</span>
          </div><div className='otherplayer'>
            <img src='https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/316400/316486.png'></img>
            <span>{foundplayer.name}</span>
          </div><div className='otherplayer'>
            <img src='https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/316400/316486.png'></img>
            <span>{foundplayer.name}</span>
          </div><div className='otherplayer'>
            <img src='https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/316400/316486.png'></img>
            <span>{foundplayer.name}</span>
          </div><div className='otherplayer'>
            <img src='https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/316400/316486.png'></img>
            <span>{foundplayer.name}</span>
          </div><div className='otherplayer'>
            <img src='https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/316400/316486.png'></img>
            <span>{foundplayer.name}</span>
          </div><div className='otherplayer'>
            <img src='https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/316400/316486.png'></img>
            <span>{foundplayer.name}</span>
          </div>
         
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