import React from 'react';

function DataItemList({product}) {

  return (
     <div>
      <header classname='DataItemList'>
           <img src={`../img/${product.pic}`} alt="product pic" />
               <table>
                 <p>Name: {product.name}</p>
                 <p>Size: {product.size}</p>
                 <p>Department: {product.department}</p>
                 <p>Price: £{product.price.toFixed(2)}</p>
               </table>
      </header>
</div> 
  );
}

export default DataItemList; 