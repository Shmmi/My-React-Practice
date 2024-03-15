import { useEffect, useState } from "react";
import React from 'react'

const Products = () => {
    const[state,setState]=useState(2);
    const[data,setData]= useState([]);
    useEffect(()=>{
        async function getData(){
        const get = await fetch("https://fakestoreapi.com/products")
        const res =await get.json();
        setData(res);
    };
    getData();
    },[state]);

    const stateChanger = ()=>{
        setState(state+2)
    }
  return (
    <div>
      
      <h1>useEffect Practice</h1>
      <button onClick={stateChanger}>Click Me OO{state}</button>
      <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-between"}}>{
        data.map((element,index)=>{
        return(<div key={index} style={{display:"flex",flexWrap:"wrap",width:"300px",border:"2px solid black",marginBottom:"20px"}}>
            <h4>{element.title}</h4>
            <h4>{element.price}</h4>
            <h4>{element.description}</h4>
            <img src={element.image} alt="" style={{height:"250px",width:"200px"}}/>
        </div>)
        })
      }
      </div>
    </div>
  )
}
export default Products
