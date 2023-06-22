import React from 'react';

function SortButton({selectedoption, setSelectedoption}) {
    
        return (
          <select
            value={selectedoption} 
            onChange={e => setSelectedoption(e.target.value)}
          >
            <option value="">Name A-Z</option>
            <option value="">Name Z-A</option>
            <option value="">Category A-z</option>
            option value="">Category A-z</option>
          </select>
        );
      }
  
export default SortButton;