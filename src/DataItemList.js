import React from 'react';

function DataItemList({product}) {

  return (
     <div>
      <header className='DataItemList'>
           <img src={`../img/${product.pic}`} alt="product pic" />
               <table><tbody>
                 <tr>Name: {product.name}</tr>
                 <tr>Size: {product.size}</tr>
                 <tr>Category: {product.category}</tr>
                 <tr>Department: {product.department}</tr>
                 <tr>Price: £{product.price.toFixed(2)}</tr>
                 </tbody></table>
      </header>
</div> 
  );
}

export default DataItemList;