import React, { useContext, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import './style.css'
import AllPlayersContext from '../../context/AllPlayersContext';
import playersdata from '../../data/playersjsondata';

// Helper function to split text into paragraphs of 10 statements each
const splitTextIntoParagraphs = (text, statementsPerParagraph = 4) => {
  // Convert the text to a string
  const stringText = String(text);

  // Split the text into statements based on periods
  const statements = stringText.split('.').map(statement => statement.trim()).filter(statement => statement.length > 0);
  const paragraphs = [];

  for (let i = 0; i < statements.length; i += statementsPerParagraph) {
    paragraphs.push(statements.slice(i, i + statementsPerParagraph).join('. ') + '.');
  }

  return paragraphs;
};

const PlayerBio = ({ bio }) => {
  const paragraphs = splitTextIntoParagraphs(bio);

  return (
    <div className='information-content'>
      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
};


function Playerinfo(props) {
  const params = useParams();
  const userid = params.id;
  let foundplayer = playersdata.find(player => player.player_id == userid)


  const recommendedplayers = playersdata.filter(player => player.country == foundplayer.country).splice(0, 11);

  const otherplayers = playersdata.slice(20, 30);

  useEffect(() => {
    props.updateShowBackBtn(true)

    return (() => {
      props.updateShowBackBtn(false)
    })
  }, [])

  return (

    foundplayer && (
      <div className='singleplayer-container'>
        <div className='singleplayer-leftpart'>
          <div className='imagecontainer '>
            <span>{foundplayer.fullname}</span>
            <span>{foundplayer.country}</span>
            <img src={foundplayer.image_path} />
            <span>INT CAREER:{foundplayer.span}</span>
          </div>
          <div className='recommended-players'>
            <p>Recommended Players</p>
            {
              recommendedplayers.map((player, ind) => {

                return (
                  <div className='recommended-player-container'>
                    <NavLink to={`/allplayers/player/${player.player_id}`} key={ind} className="recommended-player">
                      <img src={player.image_path}></img>
                      <span>{player.fullname}</span>
                    </NavLink>
                  </div>

                )
              })
            }
          </div>
        </div>
        <div className='singleplayer-rightpart'>
          <div className='singleplayer-information-container'>
            <div className='information-header'>
              <div className='field'>
                <span>FULL NAME</span>
                <span>{foundplayer.name}</span>
              </div>
              <div className='field'>
                <span>BORN</span>
                <span>{foundplayer.dob}</span>
              </div>
              <div className='field'>
                <span>AGE</span>
                <span>{foundplayer.age}</span>
              </div>
              <div className='field'>
                <span>BATTING STYLE</span>
                <span>{foundplayer.batting_style}</span>
              </div>
              <div className='field'>
                <span>BOWLING STYLE</span>
                <span>{foundplayer.bowling_style}</span>
              </div>
              <div className='field'>
                <span>NATIONALITY</span>
                <span>{foundplayer.country}</span>
              </div>
            </div>
            <PlayerBio bio={foundplayer.bio} />
          </div>
          <div className='otherplayers'>
            {
              otherplayers.map((otherplayer, index) => (
                <NavLink to={`/allplayers/player/${otherplayer.player_id}`} key={index} style={{textDecoration:'none',color:'black'}}>
                  <div>
                    <img src={otherplayer.image_path} />
                    <span>{otherplayer.name}</span>
                  </div>
                </NavLink>
              ))
            }
          </div>
        </div >
        <div className='recommended-players'>
          <p>Recommended Players</p>
          {
            recommendedplayers.map((player, ind) => {

              return (
                <div className='recommended-player-container'>
                  <NavLink to={`/allplayers/player/${player.player_id}`} key={ind} className="recommended-player">
                    <img src={player.image_path}></img>
                    <span>{player.fullname}</span>
                  </NavLink>
                </div>

              )
            })
          }
        </div>
      </div >
    )
  )


}

export default Playerinfo