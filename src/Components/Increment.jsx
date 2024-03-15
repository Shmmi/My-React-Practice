import React, { useState } from 'react'

const Number = () => {

  const[value,setValue]= useState(0);

const handleinc = () =>{
setValue(value+1);
}
const handledec = () =>{
  if(value>0){
    setValue(value-1);
  }
}
const handleKey = (event)=>{
if(event.key=='Enter'){
  console.log("Entered key")
  
  setValue(value+1);
}
}
  return (
    <div>
      <h2>{value}</h2>
      <input type='text' onKeyPress={(e)=>handleKey(e)}></input>
      <button className='btn' onClick={handleinc}>Increment</button>
      <button className='btn'onClick={handledec}>Decrement</button>
    </div>
  )
}

export default Number;
