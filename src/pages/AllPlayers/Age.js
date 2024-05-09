import React, { useState } from 'react'
import './styles/EachFilterContainer.css'


function Age(props) {
    const [showList, updateShowList] = useState(false);

    function changeagefilters(e) {
        const isFilteredAdded = e.target.checked;
        const filteredAge = e.target.name;

        // Create a new array to avoid mutating the state directly
        let updatedFilters = [...props.ageappliedfilters];

        if (isFilteredAdded) {
            // Add the age to the filters array
            updatedFilters.push(filteredAge);
        } else {
            // Remove the age from the filters array
            updatedFilters = updatedFilters.filter(age => age !== filteredAge);
        }

        props.handlefilters("ageAppliedFilters",updatedFilters);
    }

    return (
        <div className='eachfilter-container'>

            <header className='eachfilter-header' onClick={() => updateShowList(!showList)}>
                <h4>Age</h4>
                <span className={showList ? 'arrow-up' : 'arrow-down'}>{'>'}</span>
            </header>

            {
                showList &&
                <ul>
                    <label htmlFor='11-20 age'>
                        <input type='checkbox'
                            id='11-20 age'
                            name='11-20 age'
                            style={{ width: '20px', cursor: 'pointer' }}
                            checked={props.ageappliedfilters.includes('11-20 age')}
                            onChange={changeagefilters}
                        />
                        <span
                            style={{ cursor: 'pointer' }}>11-20 age</span>
                    </label>
                    <label htmlFor='21-30 age'>
                        <input type='checkbox'
                            id='21-30 age'
                            name='21-30 age'
                            style={{ width: '20px', cursor: 'pointer' }}
                            checked={props.ageappliedfilters.includes("21-30 age")}
                            onChange={changeagefilters}
                        />
                        <span
                            style={{ cursor: 'pointer' }}>21-30 age</span>
                    </label>
                    <label htmlFor='31-40 age'>
                        <input type='checkbox'
                            id='31-40 age'
                            name='31-40 age'
                            style={{ width: '20px', cursor: 'pointer' }}
                            checked={props.ageappliedfilters.includes("31-40 age")}
                            onChange={changeagefilters}
                        />
                        <span
                            style={{ cursor: 'pointer' }}>31-40 age</span>
                    </label>
                    <label htmlFor='41-50 age'>
                        <input type='checkbox'
                            id='41-50 age'
                            name='41-50 age'
                            style={{ width: '20px', cursor: 'pointer' }}
                            checked={props.ageappliedfilters.includes("41-50 age")}
                            onChange={changeagefilters}
                        />
                        <span
                            style={{ cursor: 'pointer' }}>41-50 age</span>
                    </label>
                </ul>
            }

        </div>
    )
}

export default Age