import React, { useState, useEffect } from 'react'
import PlayersCards from '../../component/AllPlayers/PlayersCards/PlayersCards'
import playersdata from '../../playersjsondata'
import SearchBar from '../../component/AllPlayers/SearchBar/SearchBar'
import Filter from '../../component/AllPlayers/Filters/Filter'
import './AllPlayers.css'

function AllPlayers() {
  const [filteredPlayers, updateFilteredPlayers] = useState(playersdata);
  const [filterIsShown,updateFilterIsShown]=useState(false);   // The filterIsShown state is used to check wheter i am in mobile view or computer view 
  const [showappliedfilters,updateShowAppliedFilters]=useState(); // The showappliedfilters state is used to show the applied filters in mobile view only. 

  function handlefilteredPlayers(newplayerslist) {
    updateFilteredPlayers(newplayerslist);
  }

  function passappliedfilters(updatedfilters){
      updateShowAppliedFilters(updatedfilters)
  }


  return (
    <div className='allplayer-container'> 
        <SearchBar playersdata={playersdata} /> 
        <div className='panellist-wrap'>

          <div className='panel-wrapComputer'>
            <Filter playersdata={playersdata} handlefilteredPlayers={handlefilteredPlayers}
             passappliedfilters={passappliedfilters}
             />
          </div>

          {/* <div className='panel-wrapMobile'>
             <div className='show-filter' onClick={()=>updateFilterIsShown(!filterIsShown)} style={{display:'flex',justifyContent:'space-between'}}>
              <span style={{marginLeft:'5px'}}>Filters</span>
              {showappliedfilters!==0 && <span style={{color:'white',backgroundColor:'black',borderRadius:'50%',height:'25px',width:'25px',marginRight:'5px'}}>{showappliedfilters}</span>}
              {filterIsShown && (<span style={{marginRight:'5px',color:'white'}}>X</span>)}
              </div>

              <div className={filterIsShown?'visible-filtercontainer':'hidden-filtercontainer'}>
                <Filter playersdata={playersdata} updatedfilteredlist={updatedfilteredlist} passappliedfilters={passappliedfilters} /> 
              </div>
           
          </div> */}


          {!filterIsShown && (
             <div className='list-wrap'>
             <PlayersCards playersdata={filteredPlayers} />
           </div>
          )}
         
      </div>

    </div>
  )
}

export default AllPlayers


