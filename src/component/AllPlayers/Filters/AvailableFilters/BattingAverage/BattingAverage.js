import React, { useState, useEffect } from 'react'
import './BattingAverage.css'

function BattingAverage(props) {
    const [showList, updateShowList] = useState(false);

    function changebattingaveragefilters(e) {
        const isFilteredAdded = e.target.checked;
        const filteredBattingAverage = e.target.name;

        // Create a new array to avoid mutating the state directly
        let updatedFilters = [...props.battingaverageappliedfilters];

        if (isFilteredAdded) {
            // Add the battingaverage to the filters array
            updatedFilters.push(filteredBattingAverage);
        } else {
            // Remove the battingaverage from the filters array
            updatedFilters = updatedFilters.filter(battingaverage => battingaverage !== filteredBattingAverage);
        }

        // Update the state with the new filters array
        props.handlefilters("battingaverageAppliedFilters",updatedFilters);
    }


    return (
        <div className='battingaveragefilter-container'>

            <header className='battingaveragefilter-header' onClick={() => updateShowList(!showList)}>
                <h4>BattingAverage</h4>
                <span className={showList?'arrow-up':'arrow-down'}>{'>'}</span>
            </header>

            {
                showList &&
                <ul>
                    <label htmlFor='0-10 batting avg.'>
                        <input type='checkbox'
                            id='0-10 batting avg.'
                            name='0-10 batting avg.'
                            style={{ width: '20px', cursor: 'pointer' }}
                            checked={props.battingaverageappliedfilters.includes("0-10 batting avg.")}
                            onChange={changebattingaveragefilters}
                        />
                        <span
                            style={{ cursor: 'pointer' }}>0-10 batting avg.</span>
                    </label>
                    <label htmlFor='10-20 batting avg.'>
                        <input type='checkbox'
                            id='10-20 batting avg.'
                            name='10-20 batting avg.'
                            style={{ width: '20px', cursor: 'pointer' }}
                            checked={props.battingaverageappliedfilters.includes("10-20 batting avg.")}
                            onChange={changebattingaveragefilters}
                        />
                        <span
                            style={{ cursor: 'pointer' }}>10-20 batting avg.</span>
                    </label>
                    <label htmlFor='20-30 batting avg.'>
                        <input type='checkbox'
                            id='20-30 batting avg.'
                            name='20-30 batting avg.'
                            style={{ width: '20px', cursor: 'pointer' }}
                            checked={props.battingaverageappliedfilters.includes("20-30 batting avg.")}
                            onChange={changebattingaveragefilters}
                        />
                        <span
                            style={{ cursor: 'pointer' }}>20-30 batting avg.</span>
                    </label>
                    <label htmlFor='30-40 batting avg.'>
                        <input type='checkbox'
                            id='30-40 batting avg.'
                            name='30-40 batting avg.'
                            style={{ width: '20px', cursor: 'pointer' }}
                            checked={props.battingaverageappliedfilters.includes("30-40 batting avg.")}
                            onChange={changebattingaveragefilters}
                        />
                        <span
                            style={{ cursor: 'pointer' }}>30-40 batting avg.</span>
                    </label>
                    <label htmlFor='40-50 batting avg.'>
                        <input type='checkbox'
                            id='40-50 batting avg.'
                            name='40-50 batting avg.'
                            style={{ width: '20px', cursor: 'pointer' }}
                            checked={props.battingaverageappliedfilters.includes("40-50 batting avg.")}
                            onChange={changebattingaveragefilters}
                        />
                        <span
                            style={{ cursor: 'pointer' }}>40-50 batting avg.</span>
                    </label>
                    <label htmlFor='>50 batting avg.'>
                        <input type='checkbox'
                            id='>50 batting avg.'
                            name='>50 batting avg.'
                            style={{ width: '20px', cursor: 'pointer' }}
                            checked={props.battingaverageappliedfilters.includes(">50 batting avg.")}
                            onChange={changebattingaveragefilters}
                        />
                        <span
                            style={{ cursor: 'pointer' }}>
                                {">50 batting avg."}</span>
                    </label>

                </ul>
            }

        </div>
    )
}

export default BattingAverage