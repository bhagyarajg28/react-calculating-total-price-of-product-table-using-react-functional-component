import React,{useState} from 'react';
import App from './App';

export default function Counter() {
  
  const [count,setCount]=useState([
    { id: 1, value:10,qunatity:0 },
    { id: 2, value:20,qunatity:0 },
    { id: 3, value:30,qunatity:0 },
    { id: 4, value:40,qunatity:0 }
  ]);
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">value</th>
            <th scope="col">qunatity</th>
            <th scope="col">price</th>
          </tr>
        </thead >
        <tbody>
          {count.map((num,i) => (
          <tr  key={num.id}>
            <th scope="row">{num.id}</th>
            <th scope="row">{num.value}</th>
            <th scope="row">
            <input type='text'onChange={(e)=>handleChange(e,i)}/>
            </th>
            <th scope="row">{num.value * num.qunatity}</th>
          </tr>
          ))}
        </tbody>
        <tfoot >
          ...{" "}
          <tr>
              <th scope="row">Total=</th>
              <th scope="row">{count.reduce((acc, val) => acc+(val.qunatity*val.value),0)}
              </th>
          </tr>
        </tfoot>  
      </table>
    </div>
  );
  function handleChange(e,i){
   const  newArr=[...count];
    newArr[i].qunatity=e.target.value;
    setCount(newArr)
  }

}
