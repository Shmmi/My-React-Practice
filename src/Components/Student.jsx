import React, { useState } from 'react'

const Student = () => {

  const[value,setValue]= useState(0);

const handleinc = () =>{
setValue(value+1);
}
const handledec = () =>{
  if(value>0){
    setValue(value-1);
  }
}
  return (
    <div>
      <h2>{value}</h2>
      <button className='btn' onClick={handleinc}>Increment</button>
      <button className='btn'onClick={handledec}>Decrement</button>
    </div>
  )
}

export default Student;
