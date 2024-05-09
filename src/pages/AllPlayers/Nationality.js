import React, { useEffect, useState } from 'react'
import './styles/EachFilterContainer.css'


function Nationality(props) {
    const [showList, updateShowList] = useState(false);
    const [showAllCountries, updateShowAllCountries] = useState(false);

    //uniqueCountries is used to find total number of countries present in playersdata.json file
    const uniqueCountries = [...new Set(props.playersdata.map(player => player.country))];

    function changenationalityfilters(e) {
        const isFilteredAdded = e.target.checked;
        const filteredCountry = e.target.name;

        // Create a new array to avoid mutating the state directly
        let updatedFilters = [...props.nationalityappliedfilters];

        if (isFilteredAdded) {
            // Add the country to the filters array
            updatedFilters.push(filteredCountry);
        } else {
            // Remove the country from the filters array
            updatedFilters = updatedFilters.filter(country => country !== filteredCountry);
        }

        // Update the state with the new filters array
        props.handlefilters("nationalityAppliedFilters", updatedFilters);
    }


    return (
        <div className='eachfilter-container'>

            <header className='eachfilter-header' onClick={() => updateShowList(!showList)}>
                <h4>Nationality</h4>
                <span className={showList ? 'arrow-up' : 'arrow-down'}>{'>'}</span>
            </header>

            {
                uniqueCountries.length > 6 ?
                    <ul style={{ listStyleType: 'none' }}>
                        {showList && !showAllCountries &&
                            uniqueCountries.map((country, index) => {
                                return (
                                    <div key={index}>
                                        {
                                            index < 6 && (
                                                < label htmlFor={country} onClick={changenationalityfilters}>
                                                    <input type="checkbox" id={country} name={country} style={{ width: '20px', cursor: 'pointer' }} checked={props.nationalityappliedfilters.includes(country)} onChange={changenationalityfilters} />
                                                    <span style={{ cursor: 'pointer' }}>{country}</span>
                                                </label>
                                            )
                                        }

                                        {index === 6 && <p className='show-more' onClick={() => updateShowAllCountries(!showAllCountries)}>SHOW MORE</p>}
                                    </div>

                                )
                            })
                        }
                        {
                            showList && showAllCountries &&
                            uniqueCountries.map((country, index) => {
                                return (
                                    <div key={index}>

                                        < label htmlFor={country} onClick={changenationalityfilters}>
                                            <input type="checkbox" id={country} name={country} style={{ width: '20px', cursor: 'pointer' }} checked={props.nationalityappliedfilters.includes(country)} onChange={changenationalityfilters} />
                                            <span style={{ cursor: 'pointer' }}>{country}</span>
                                        </label>


                                        {index == uniqueCountries.length-1 && <p className='show-less' onClick={() => updateShowAllCountries(!showAllCountries)}>SHOW LESS</p>}
                                    </div>
                                )
                            })
                        }
                    </ul>
                    :
                    <ul style={{ listStyleType: 'none' }}>
                        {showList &&
                            uniqueCountries.map((country, index) => {
                                return (

                                    < label htmlFor={country} key={index} onClick={changenationalityfilters}>
                                        <input type="checkbox" id={country} name={country} style={{ width: '20px', cursor: 'pointer' }} checked={props.nationalityappliedfilters.includes(country)} onChange={changenationalityfilters} />
                                        <span style={{ cursor: 'pointer' }}>{country}</span>
                                    </label>

                                )

                            })
                        }
                    </ul>
            }

        </div>
    )
}

export default Nationality