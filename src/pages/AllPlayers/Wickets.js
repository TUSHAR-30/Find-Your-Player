import React,{useState} from 'react'
import './styles/EachFilterContainer.css'

function Wickets(props){
    const [showList, updateShowList] = useState(false);

    function changewicketsfilters(e) {
        const isFilteredAdded = e.target.checked;
        const filteredWickets = e.target.name;

        // Create a new array to avoid mutating the state directly
        let updatedFilters = [...props.wicketsappliedfilters];

        if (isFilteredAdded) {
            // Add the age to the filters array
            updatedFilters.push(filteredWickets);
        } else {
            // Remove the age from the filters array
            updatedFilters = updatedFilters.filter(wickets => wickets !== filteredWickets);
        }

        props.handlefilters("wicketsAppliedFilters",updatedFilters);
    }

    return(
        <div className='eachfilter-container'>

            <header className='eachfilter-header' onClick={() => updateShowList(!showList)}>
                <h4>Wickets</h4>
                <span className={showList ? 'arrow-up' : 'arrow-down'}>{'>'}</span>
            </header>

            {
                showList &&
                <ul>
                    <label htmlFor='0-50 wickets'>
                        <input type='checkbox'
                            id='0-50 wickets'
                            name='0-50 wickets'
                            style={{ width: '20px', cursor: 'pointer' }}
                            checked={props.wicketsappliedfilters.includes('0-50 wickets')}
                            onChange={changewicketsfilters}
                        />
                        <span
                            style={{ cursor: 'pointer' }}>0-50 wickets</span>
                    </label>
                    <label htmlFor='51-100 wickets'>
                        <input type='checkbox'
                            id='51-100 wickets'
                            name='51-100 wickets'
                            style={{ width: '20px', cursor: 'pointer' }}
                            checked={props.wicketsappliedfilters.includes("51-100 wickets")}
                            onChange={changewicketsfilters}
                        />
                        <span
                            style={{ cursor: 'pointer' }}>51-100 wickets</span>
                    </label>
                    <label htmlFor='101-150 wickets'>
                        <input type='checkbox'
                            id='101-150 wickets'
                            name='101-150 wickets'
                            style={{ width: '20px', cursor: 'pointer' }}
                            checked={props.wicketsappliedfilters.includes("101-150 wickets")}
                            onChange={changewicketsfilters}
                        />
                        <span
                            style={{ cursor: 'pointer' }}>101-150 wickets</span>
                    </label>
                    <label htmlFor='>150 wickets'>
                        <input type='checkbox'
                            id='>150 wickets'
                            name='>150 wickets'
                            style={{ width: '20px', cursor: 'pointer' }}
                            checked={props.wicketsappliedfilters.includes(">150 wickets")}
                            onChange={changewicketsfilters}
                        />
                        <span
                            style={{ cursor: 'pointer' }}>{">150 wickets"}</span>
                    </label>
                </ul>
            }

    </div>
    )
}

export default Wickets