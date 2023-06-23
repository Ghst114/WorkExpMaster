import React from 'react';

function DataItem({product}) {

  return (
     <div>
      <header className='DataItem'>
           <img src={`../img/${product.pic}`} alt="product pic" />
               <table>
                 <p>Name: {product.name}</p>
                 <p>Size: {product.size}</p>
                 <p>Category: {product.category}</p>
                 <p>Department: {product.department}</p>
                 <p>Price: £{product.price.toFixed(2)}</p>
               </table>
      </header>
</div> 
  );
}

export default DataItem; 