import data from './data.json';
import DataItemList from './DataItemList';

function List (){

 return(<div> 
 {data.map((item,index)=>{
 return <DataItemList product={item}/>
    })}
 </div>);
}

export default List