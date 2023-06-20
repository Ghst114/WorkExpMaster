import React from 'react';

function Dropdown({selectedoption, setSelectedoption}) {
    
        return (
          <select
            value={selectedoption} 
            onChange={e => setSelectedoption(e.target.value)}
          >
            <option value="Individual">Individual</option>
            <option value="List">List</option>
            <option value="Gallery">Gallery</option>
          </select>
        );
      }
  export default Dropdown;