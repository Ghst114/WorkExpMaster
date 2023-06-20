import React, { useState } from 'react';
import data from './data.json';
import DataItem from './DataItem';

function List (){
    const [itemNo] = useState(5);
 <div>
    <img src= {"hammer_medium.jpg"} alt="hammermedium" ></img>
 </div>
 
 return(<div> 
 <DataItem product={data[itemNo]}/> 
 <button><img src= {"hammer_medium.jpg"} alt="hammermedium" ></img></button>
 </div>);
}

export default List