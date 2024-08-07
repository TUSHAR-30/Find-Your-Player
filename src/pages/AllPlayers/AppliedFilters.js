import React from 'react'

function AppliedFilters(props) {
  const { showappliedfilters,filters } = props;

  function removefilter(appliedfilter) {
    const categoryname = Object.keys(appliedfilter)[0];
    const valuetoremove = Object.keys(appliedfilter).map(key => appliedfilter[key]);
    const valuesofthatcategory = filters[categoryname];

    const updatedvaluesofthatcategory = valuesofthatcategory.filter(value => {
      return value != valuetoremove;
    }
    );

    props.handlefilters(categoryname, updatedvaluesofthatcategory);
  }


  return (
    <div style={{ backgroundColor: 'white', borderBottom: '1px solid', marginBottom: '5px' }}>
      <h1>Filters</h1>
      <ul style={{ display: 'flex', listStyleType: 'none', flexWrap: 'wrap', gap: '5px' }}>
        {showappliedfilters && showappliedfilters.length > 0 &&
          showappliedfilters.map((appliedfilter, index) => {
            return (
              <div key={index} style={{ height: '25px', fontSize: '0.8rem', borderRadius: '2%', border: 'none', backgroundColor: '#ddd1d1', display: 'flex', gap: '10px', padding: '4px' ,cursor:'pointer'}} onClick={() => removefilter(appliedfilter)} >
                <span>
                  {Object.keys(appliedfilter).map(key => appliedfilter[key])}
                </span>X
              </div>
            )
          })
        }
      </ul>

    </div>
  )
}

export default AppliedFilters