import React from 'react';

function DropdownSort({selectedoption2, setSelectedoption2}) {
    
        return (
          <select
            value={selectedoption2} 
            onChange={e => setSelectedoption2(e.target.value)}
          >
            <option value="SortAZ">Name A-Z</option>
            <option value="SortZA">Name Z-A</option>
            <option value="SortAZCategory">Category A-Z</option>
            <option value="SortZACategory">Category Z-A</option>
            <option value="SortAZPrice">Price A-Z</option>
            <option value="SortZAPrice">Price Z-A</option>
          </select>
        );
      }
  
export default DropdownSort;