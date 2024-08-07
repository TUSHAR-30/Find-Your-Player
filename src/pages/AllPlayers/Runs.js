import React,{useState} from 'react'
import './styles/EachFilterContainer.css'

function Runs(props) {
    const [showList, updateShowList] = useState(false);

    function changerunsfilters(e) {
        const isFilteredAdded = e.target.checked;
        const filteredRuns = e.target.name;

        // Create a new array to avoid mutating the state directly
        let updatedFilters = [...props.runsappliedfilters];

        if (isFilteredAdded) {
            // Add the age to the filters array
            updatedFilters.push(filteredRuns);
        } else {
            // Remove the age from the filters array
            updatedFilters = updatedFilters.filter(runs => runs !== filteredRuns);
        }

        props.handlefilters("runsAppliedFilters",updatedFilters);
    }


  return (
    <div className='eachfilter-container'>

            <header className='eachfilter-header' onClick={() => updateShowList(!showList)}>
                <h4>Runs</h4>
                <span className={showList ? 'arrow-up' : 'arrow-down'}>{'>'}</span>
            </header>

            {
                showList &&
                <ul>
                    <label htmlFor='0-1000 runs'>
                        <input type='checkbox'
                            id='0-1000 runs'
                            name='0-1000 runs'
                            style={{ width: '20px', cursor: 'pointer' }}
                            checked={props.runsappliedfilters.includes('0-1000 runs')}
                            onChange={changerunsfilters}
                        />
                        <span
                            style={{ cursor: 'pointer' }}>0-1000 runs</span>
                    </label>
                    <label htmlFor='1001-2000 runs'>
                        <input type='checkbox'
                            id='1001-2000 runs'
                            name='1001-2000 runs'
                            style={{ width: '20px', cursor: 'pointer' }}
                            checked={props.runsappliedfilters.includes("1001-2000 runs")}
                            onChange={changerunsfilters}
                        />
                        <span
                            style={{ cursor: 'pointer' }}>1001-2000 runs</span>
                    </label>
                    <label htmlFor='2001-3000 runs'>
                        <input type='checkbox'
                            id='2001-3000 runs'
                            name='2001-3000 runs'
                            style={{ width: '20px', cursor: 'pointer' }}
                            checked={props.runsappliedfilters.includes("2001-3000 runs")}
                            onChange={changerunsfilters}
                        />
                        <span
                            style={{ cursor: 'pointer' }}>2001-3000 runs</span>
                    </label>
                    <label htmlFor='3001-4000 runs'>
                        <input type='checkbox'
                            id='3001-4000 runs'
                            name='3001-4000 runs'
                            style={{ width: '20px', cursor: 'pointer' }}
                            checked={props.runsappliedfilters.includes("3001-4000 runs")}
                            onChange={changerunsfilters}
                        />
                        <span
                            style={{ cursor: 'pointer' }}>3001-4000 runs</span>
                    </label>
                    <label htmlFor='>4000 runs'>
                        <input type='checkbox'
                            id='>4000 runs'
                            name='>4000 runs'
                            style={{ width: '20px', cursor: 'pointer' }}
                            checked={props.runsappliedfilters.includes(">4000 runs")}
                            onChange={changerunsfilters}
                        />
                        <span
                            style={{ cursor: 'pointer' }}>{">4000 runs"}</span>
                    </label>
                </ul>
            }

    </div>
  )
}

export default Runs