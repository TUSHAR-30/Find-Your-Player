import React, { useEffect, useState } from 'react'
import './Role.css'

function Role(props) {
    const [showList, updateShowList] = useState(false);
    const [rolefilters, updateRoleFilters] = useState([]);

    useEffect(() => {
        props.passRolefilters(rolefilters);
    }, [rolefilters])

    //uniqueRoles is used to find total number of roles present in playersdata.json file
    const uniqueRoles = [...new Set(props.playersdata.map(player => player.role))];

    function handlefilter(e) {
        const isFilteredAdded = e.target.checked;
        const filteredRole = e.target.name;

        // Create a new array to avoid mutating the state directly
        let updatedFilters = [...rolefilters];

        if (isFilteredAdded) {
            // Add the role to the filters array
            updatedFilters.push(filteredRole);
            props.handleshowfilters(filteredRole, true);
        } else {
            // Remove the role from the filters array
            updatedFilters = updatedFilters.filter(role => role !== filteredRole);
            props.handleshowfilters(filteredRole, false);
        }

        // Update the state with the new filters array
        updateRoleFilters(updatedFilters);
    }


    return (
        <div className='rolefilter-container'>

            <header className='rolefilter-header' onClick={() => updateShowList(!showList)}>
                <h4>Role</h4>
                <span className={showList?'arrow-up':'arrow-down'}>{'>'}</span>
            </header>

            {
                <ul style={{ listStyleType: 'none' }}>
                    {showList &&
                        uniqueRoles.map((role, index) => {
                            return (

                                < label htmlFor={role} key={index} onClick={handlefilter}>
                                    <input type="checkbox" id={role} name={role} style={{ width: '20px', cursor: 'pointer' }} checked={rolefilters.includes(role)} onChange={handlefilter} />
                                    <span style={{ cursor: 'pointer' }}>{role}</span>
                                </label>

                            )

                        })
                    }
                </ul>
            }

        </div>
    )
}

export default Role