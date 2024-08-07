import React,{useState} from 'react'
import './styles/EachFilterContainer.css'


function Matches(props){
    const [showList, updateShowList] = useState(false);

    function changematchesfilters(e) {
        const isFilteredAdded = e.target.checked;
        const filteredMatches = e.target.name;

        // Create a new array to avoid mutating the state directly
        let updatedFilters = [...props.matchesappliedfilters];

        if (isFilteredAdded) {
            // Add the age to the filters array
            updatedFilters.push(filteredMatches);
        } else {
            // Remove the age from the filters array
            updatedFilters = updatedFilters.filter(matches => matches !== filteredMatches);
        }

        props.handlefilters("matchesAppliedFilters",updatedFilters);
    }

    return(
        <div className='eachfilter-container'>

            <header className='eachfilter-header' onClick={() => updateShowList(!showList)}>
                <h4>Matches</h4>
                <span className={showList ? 'arrow-up' : 'arrow-down'}>{'>'}</span>
            </header>

            {
                showList &&
                <ul>
                    <label htmlFor='1-50 matches'>
                        <input type='checkbox'
                            id='1-50 matches'
                            name='1-50 matches'
                            style={{ width: '20px', cursor: 'pointer' }}
                            checked={props.matchesappliedfilters.includes('1-50 matches')}
                            onChange={changematchesfilters}
                        />
                        <span
                            style={{ cursor: 'pointer' }}>1-50 matches</span>
                    </label>
                    <label htmlFor='51-100 matches'>
                        <input type='checkbox'
                            id='51-100 matches'
                            name='51-100 matches'
                            style={{ width: '20px', cursor: 'pointer' }}
                            checked={props.matchesappliedfilters.includes("51-100 matches")}
                            onChange={changematchesfilters}
                        />
                        <span
                            style={{ cursor: 'pointer' }}>51-100 matches</span>
                    </label>
                    <label htmlFor='101-150 matches'>
                        <input type='checkbox'
                            id='101-150 matches'
                            name='101-150 matches'
                            style={{ width: '20px', cursor: 'pointer' }}
                            checked={props.matchesappliedfilters.includes("101-150 matches")}
                            onChange={changematchesfilters}
                        />
                        <span
                            style={{ cursor: 'pointer' }}>101-150 matches</span>
                    </label>
                    <label htmlFor='>150 matches'>
                        <input type='checkbox'
                            id='>150 matches'
                            name='>150 matches'
                            style={{ width: '20px', cursor: 'pointer' }}
                            checked={props.matchesappliedfilters.includes(">150 matches")}
                            onChange={changematchesfilters}
                        />
                        <span
                            style={{ cursor: 'pointer' }}>{">150 matches"}</span>
                    </label>
                </ul>
            }

    </div>
    )
}

export default Matches