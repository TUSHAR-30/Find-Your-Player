import React, { useEffect, useState } from 'react'
import "./SearchBar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

function SearchBar({ playersdata }) {

  const [inputvalue, updateInputValue] = useState('');
  const [suggestions, updateSuggestions] = useState([]);
  const [isInputFieldFocus, updateIsInputFieldFocus] = useState(false);

  useEffect(() => {
    let timer;
    if (inputvalue.length >= 1) {
      timer = setTimeout(() => {
        let lowercaseinputvalue = inputvalue.toLowerCase();
        let newplayerslist = playersdata.filter(person => person.fullname.toLowerCase().startsWith(lowercaseinputvalue));
        updateSuggestions(newplayerslist);
      }, 300);
    }
    return () => {
      clearTimeout(timer);
    }
  }, [inputvalue, playersdata])

  return (
    <div className='search-container' >
      <h3>Find Your Player</h3>

      <div style={{ display: 'flex', gap: '9px' }} >
        <div className='searchbar'>
          <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
          <input 
          type='text' 
          value={inputvalue} 
          onChange={(e) => updateInputValue(e.target.value)}
          placeholder='Search your Player'
           onFocus={() => updateIsInputFieldFocus(true)} 
          //  onBlur={() => updateIsInputFieldFocus(false)}
          onBlur={() => setTimeout(() => updateIsInputFieldFocus(false), 300)} // Introduce a slight delay so that onclicking on navlink the blur event should fire after 3ms so that onclick executes first
          >
           </input>
        </div>
      </div>

      {
        isInputFieldFocus && 
        inputvalue.length > 0 && suggestions.length > 0 ?
          <ul style={{
            position: 'absolute', top: '146px', maxHeight: '100px', overflowY: 'auto', width: '300px', backgroundColor: 'white', borderRadius: '10px', border: '1px solid', paddingLeft: '5px', scrollBehavior: 'smooth',
            scrollbarWidth: 'thin',
            scrollbarColor: 'gray white', zIndex: '2'
          }}>
            {
              suggestions.map(suggestion => {
                return (
                  <NavLink
                    // to={`/player/${suggestion.player_id}`}
                    to={`/allplayers/player/${suggestion.player_id}`}
                    className='searchplayer'
                    key={suggestion.player_id}
                    style={{ cursor: 'pointer' }}
                  >
                    {suggestion.fullname}
                    <hr style={{ border: '1px solid black' }}></hr>
                  </NavLink>
                )
              })
            }
          </ul>
          :
          <div>
            {
            isInputFieldFocus && 
            inputvalue.length > 0 && <ul>No player to show</ul>}
          </div>

      }



    </div>
  )
}

export default SearchBar