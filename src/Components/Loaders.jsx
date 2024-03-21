//first install this package npm i react-loader-spinner from react-loaders-spinner website
import React, { useEffect, useState } from 'react'
import { Bars, TailSpin } from 'react-loader-spinner';
import "./Header.css";
const Loaders = () => {
    const[loading,setLoading] = useState(false);
    const [data,setData] = useState([]);

    useEffect(()=>{
        setLoading(true)
       const getData = async () =>{
        const items = await fetch (" https://api.escuelajs.co/api/v1/products");
        const res = await items.json()
        setData(res)
        setLoading(false)
        }
        getData()
    },[])
  return (
    <div>
      <h1>This is my Loading Products</h1>
      
     <div className='mapcontainer'>
      {
        loading ?<div className='bar'><Bars/></div> :
       data.map((element,index)=>{
        return (
            <div className='container'>
            
            <h2>{element.title}</h2>
            <img src={element.images} alt="" />
            <h2>Price: {element.price}$</h2>
            <p className='description'>{element.description}</p>
            </div>
        )
       })
      }
      </div>
    </div>
  )
}

export default Loaders
