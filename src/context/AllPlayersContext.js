import React,{useState} from "react";
import playersdata from "../data/playersjsondata";

let AllPlayersContext = React.createContext();

 export function AllPlayersContextProvider(props) {

    const [filters, updateFilters] = useState({
        nationalityAppliedFilters: [],
        ageAppliedFilters: [],
        battingaverageAppliedFilters: [],
        runsAppliedFilters:[],
        wicketsAppliedFilters:[],
        matchesAppliedFilters:[],
      }) // It is used to manage the filters

    const [filteredPlayers, updateFilteredPlayers] = useState(playersdata);
    const [filterIsShown, updateFilterIsShown] = useState(false);   // The filterIsShown state is used to check wheter i am in mobile view or computer view 
    const [showappliedfilters, updateShowAppliedFilters] = useState(); // The showappliedfilters state is used to show the applied filters in mobile view only. 

    function handlefilteredPlayers(newplayerslist) {
        updateFilteredPlayers(newplayerslist);
    }

    function passappliedfilters(updatedfilters) {
        updateShowAppliedFilters(updatedfilters);
    }

    return <AllPlayersContext.Provider value={
        {   filteredPlayers:filteredPlayers,
            handlefilteredPlayers:handlefilteredPlayers,
            passappliedfilters:passappliedfilters,
            playersdata:playersdata ,
            filterIsShown:filterIsShown,
            updateFilterIsShown:updateFilterIsShown,
            showappliedfilters:showappliedfilters,
            filters:filters,
            updateFilters:updateFilters,
        }}>
        {props.children}
    </AllPlayersContext.Provider>

}


export default AllPlayersContext;