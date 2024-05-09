import React from 'react'
import PlayerCards from './PlayersCards'
import SearchBar from './SearchBar'
import Filter from './Filter'
import { useContext } from 'react'
import './styles/style.css'
import AllPlayersContext from '../../context/AllPlayersContext'

//All the commented code in this component which has state management logic is shifted to AllPlayersContext 
function AllPlayers() {
  // const [filteredPlayers, updateFilteredPlayers] = useState(playersdata);
  // const [filterIsShown, updateFilterIsShown] = useState(false);   // The filterIsShown state is used to check wheter i am in mobile view or computer view 
  // const [showappliedfilters, updateShowAppliedFilters] = useState(); // The showappliedfilters state is used to show the applied filters in mobile view only. 

  // function handlefilteredPlayers(newplayerslist) {
  //   updateFilteredPlayers(newplayerslist);
  // }

  // function passappliedfilters(updatedfilters) {
  //   updateShowAppliedFilters(updatedfilters)
  // }


  //   return (
  //     <div className='allplayer-container' style={{backgroundColor:'#f1f3f6'}}>
  //       <SearchBar playersdata={playersdata} />
  //       <div className='panellist-wrap'>

  //         <div className='panel-wrapComputer'>
  //           <Filter playersdata={playersdata} handlefilteredPlayers={handlefilteredPlayers}
  //             passappliedfilters={passappliedfilters}
  //           />
  //         </div>

  //         <div className='panel-wrapMobile'>
  //              <div className='show-filter' onClick={()=>updateFilterIsShown(!filterIsShown)} style={{display:'flex',justifyContent:'space-between'}}>
  //               <span style={{marginLeft:'5px'}}>Filters</span>
  //               {showappliedfilters!==0 && <span style={{color:'white',backgroundColor:'black',borderRadius:'50%',height:'25px',width:'25px',marginRight:'5px'}}>{showappliedfilters}</span>}
  //               {filterIsShown && (<span style={{marginRight:'5px',color:'white'}}>X</span>)}
  //               </div>

  //               <div className={filterIsShown?'visible-filtercontainer':'hidden-filtercontainer'}>
  //                 <Filter playersdata={playersdata} handlefilteredPlayers={handlefilteredPlayers} passappliedfilters={passappliedfilters} /> 
  //               </div>

  //           </div>


  //         {!filterIsShown && (
  //           <div className='list-wrap'>
  //             <PlayerCards playersdata={filteredPlayers} />
  //           </div>
  //         )}

  //       </div>

  //     </div>
  //   )

const context=useContext(AllPlayersContext);

  return (
    <div className='allplayer-container' style={{ backgroundColor: '#f1f3f6' }}>
      <SearchBar playersdata={context.playersdata} />
      <div className='panellist-wrap'>

        <div className='panel-wrapComputer'>
          <Filter playersdata={context.playersdata} handlefilteredPlayers={context.handlefilteredPlayers}
            passappliedfilters={context.passappliedfilters}
          />
        </div>

        <div className='panel-wrapMobile'>
          <div className='show-filter' onClick={() => context.updateFilterIsShown(!(context.filterIsShown))} style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ marginLeft: '5px' }}>Filters</span>
            {context.showappliedfilters !== 0 && <span style={{ color: 'white', backgroundColor: 'black', borderRadius: '50%', height: '25px', width: '25px', marginRight: '5px' }}>{context.showappliedfilters}</span>}
            {context.filterIsShown && (<span style={{ marginRight: '5px', color: 'white' }}>X</span>)}
          </div>

          <div className={context.filterIsShown ? 'visible-filtercontainer' : 'hidden-filtercontainer'}>
            <Filter playersdata={context.playersdata} handlefilteredPlayers={context.handlefilteredPlayers} passappliedfilters={context.passappliedfilters} />
          </div>

        </div>


        {
        // (!(context.filterIsShown)) && 
        (
          <div className={`list-wrap ${context.filterIsShown?'hide-list-wrap':''}`}>
            <PlayerCards playersdata={context.filteredPlayers} />
          </div>
        )
        }

      </div>

    </div>
  )




}

export default AllPlayers


