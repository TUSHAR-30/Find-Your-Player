import React, { useState, useEffect } from 'react'
import filterdata from '../../data/filterdata';
import './styles/EachFilterContainer.css'

function AllFilters(props) {
    const [showList, updateShowList] = useState(
        [
            { filtershown: false },
            { filtershown: false },
            { filtershown: false },
            { filtershown: false },
            { filtershown: false }
        ]
    );

    function changefilters(e) {
        const isFilteredAdded = e.target.checked;
        const filtername = e.target.name;
        let category = e.target.getAttribute("data-category");
        console.log(category);
        let updatedFilters;

        // Create a new array to avoid mutating the state directly

        if (category == "Age") {
            updatedFilters = [...props.ageappliedfilters];
        }
        if (category == "BattingAverage") {
            updatedFilters = [...props.battingaverageappliedfilters];
        }
        else
            if (category == "Runs") {
                updatedFilters = [...props.runsappliedfilters];
            }
            else
                if (category == "Wickets") {
                    updatedFilters = [...props.wicketsappliedfilters];
                }
                else
                    if (category == "Matches") {
                        updatedFilters = [...props.matchesappliedfilters];
                    }


        if (isFilteredAdded) {
            // Add the battingaverage to the filters array
            updatedFilters.push(filtername);
        } else {
            // Remove the battingaverage from the filters array
            updatedFilters = updatedFilters.filter(filter => filter != filtername);
        }

        // Update the state with the new filters array

        if (category == "Age")
            props.handlefilters("ageAppliedFilters", updatedFilters);
        else
            if (category == "BattingAverage")
                props.handlefilters("battingaverageAppliedFilters", updatedFilters);
            else
                if (category == "Runs")
                    props.handlefilters("runsAppliedFilters", updatedFilters);
                else
                    if (category == "Wickets")
                        props.handlefilters("wicketsAppliedFilters", updatedFilters);
                    else
                        if (category == "Matches")
                            props.handlefilters("matchesAppliedFilters", updatedFilters);
    }

    function togglecheckedbtn(category, categoryfilter) {
        // let category=e.target.getAttribute("data-category");
        console.log(category)
        if (category == "Age") {
            return props.ageappliedfilters.includes(categoryfilter)
        }
        else
            if (category == "Runs") {
                return props.runsappliedfilters.includes(categoryfilter)
            }
            else
                if (category == "Wickets") {
                    return props.wicketsappliedfilters.includes(categoryfilter)
                }
                else
                    if (category == "Matches") {
                        return props.matchesappliedfilters.includes(categoryfilter)
                    }
                    else
                        if (category == "BattingAverage") {
                            return props.battingaverageappliedfilters.includes(categoryfilter)
                        }
    }


    return (
        <div className='eachfilter-container'>
            {
                filterdata.map((filtercategory, index) => {
                    return (
                        <div key={index}>
                            <header className='eachfilter-header'
                                onClick={() => updateShowList(prevShowList => ({
                                    ...prevShowList,
                                    [index]: { filtershown: !prevShowList[index]?.filtershown }
                                }))}
                            >
                                <h4>{filtercategory.category_name}</h4>
                                <span className={showList[index].filtershown ? 'arrow-up' : 'arrow-down'}>{'>'}</span>
                            </header>

                            {
                                showList[index].filtershown &&
                                <ul>
                                    {
                                        filtercategory.category_filters.map((categoryfilter, index) => {
                                            return (
                                                <label htmlFor={categoryfilter} key={index}>
                                                    <input type='checkbox'
                                                        id={categoryfilter}
                                                        name={categoryfilter}
                                                        data-category={filtercategory.category_name}
                                                        style={{ width: '20px', cursor: 'pointer' }}
                                                        checked={togglecheckedbtn(filtercategory.category_name, categoryfilter)}
                                                        onChange={changefilters}
                                                    />
                                                    <span
                                                        style={{ cursor: 'pointer' }}>{categoryfilter}</span>
                                                </label>
                                            )
                                        })
                                    }
                                </ul>
                            }

                        </div>
                    )
                })
            }
        </div>
    )
}

export default AllFilters