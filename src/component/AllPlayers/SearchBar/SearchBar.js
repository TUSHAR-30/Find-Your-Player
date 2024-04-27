import React, { useEffect, useState } from 'react'
import "./SearchBar.css"

function SearchBar({playersdata}) {

  const[inputvalue,updateInputValue]=useState('');
  const[suggestions,updateSuggestions]=useState([]);

  useEffect(()=>{

    const timer=setTimeout(() => {
        if(inputvalue.length>1){
            let lowercaseinputvalue=inputvalue.toLowerCase();
            let newplayerslist=playersdata.filter(person=>person.name.toLowerCase().startsWith(lowercaseinputvalue));
            updateSuggestions(newplayerslist);
            }
            else{
                updateSuggestions([])
            } 
    }, 300);

    return ()=>{
        clearTimeout(timer);
    }
  },[inputvalue,playersdata])

  return (
    <div className='search-container' >
        <h3>Find Your Player</h3>
        
        <div style={{display:'flex',gap:'10px'}} >
            <input type='text' value={inputvalue} onChange={(e)=>updateInputValue(e.target.value)}></input>
            <button>Search</button>
        </div>

        {/* <ul style={{listStyleType:'none',position:'absolute',top:'160px',height:'100px',width:'300px',overflow:'scroll'}}>
                {
                    suggestions.map(suggestion=>{
                        return(
                            <option  key={suggestion.player_id} style={{fontSize:'16px',fontWeight:'500',backgroundColor:'black',color:'white',margin:'3px',width:'300px',position:'relative',left:'-54px'}}>{suggestion.name}</option>
                        )
                    })
                }
            </ul> */}

          <ul style={{alignSelf:'start',position:'absolute',top:'135px'}}>
            {
              suggestions.map(suggestion=><li key={suggestion.player_id}>{suggestion.name}</li>)
            }
          </ul>
     
    </div>
  )
}

export default SearchBar