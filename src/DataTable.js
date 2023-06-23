import React, { useState } from 'react';
import data from './data.json';
import DataItem from './DataItem';

function DataTable() {

  const [itemNo, setItemNo] = useState(0);

  function nextPage()
  {
    if (itemNo + 1 < data.length)
    {
      setItemNo(itemNo+1);
    }
    
    else {
      setItemNo(0)
    }
    
  }

  function previousPage() 
  {
   if (itemNo -1 >= 0)
   {
    setItemNo(itemNo-1);
   }
   else {
    setItemNo(data.length - 1)
   }
  }

  function firstPage() 
  {
    setItemNo(0);
  }

  function lastPage() 
  {
    setItemNo(data.length - 1);
  }

  return (<div>
            <DataItem product={data[itemNo]} />
            <button onClick={() => firstPage()}>First</button>
            <button onClick={() => previousPage()}>Previous</button>
            <button onClick={() => nextPage()}>Next</button>
            <button onClick={() => lastPage()}>Last</button>
          </div>);
}

export default DataTable;