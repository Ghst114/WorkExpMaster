import React from 'react';
import data from './data.json';

function Gallery (){

    function getRow (lastIndex)  
    {
        var remainder = (lastIndex + 1) % 4;

        if (lastIndex >= 3 && remainder === 0)
            return (<tr index = {lastIndex}>
                        <td><img src={`../img/${data[lastIndex - 3].pic}`} alt="product pic"/></td>
                        <td><img src={`../img/${data[lastIndex - 2].pic}`} alt="product pic"/></td>
                        <td><img src={`../img/${data[lastIndex - 1].pic}`} alt="product pic"/></td>
                        <td><img src={`../img/${data[lastIndex - 0].pic}`} alt="product pic"/></td>
                    </tr>)

        if ((lastIndex + 1) === data.length)                
            
            return (<tr index = {lastIndex}>
                        {remainder === 3 ? <td><img src={`../img/${data[lastIndex - 2].pic}`} alt="product pic" /></td> : null }
                        {remainder >= 2 ? <td><img src={`../img/${data[lastIndex - 1].pic}`} alt="product pic" /></td>  : null }
                        {remainder >= 1 ? <td><img src={`../img/${data[lastIndex - 0].pic}`} alt="product pic" /></td>  : null }
                    </tr>)
    }
        return (
          <table>
            <tbody>
                {data.map((item, index) =>  getRow(index) )}
            </tbody>
         </table>
        )
    
}
   
export default Gallery
