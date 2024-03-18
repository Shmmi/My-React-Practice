import React, { useEffect, useRef, useState } from 'react'

const Useref = () => {
    const[input,setInput] = useState("");
    const count = useRef(0);
    const prevState =useRef("")

    useEffect(()=>{
        count.current=count.current+1;
        prevState.current=input;
    });
    // useEffect(()=>{
    //     prevState.current=input;
    // })

    const handleChange = (e)=>{
    setInput(e.target.value)
    }
  return (
    <div>
      <input type='text' onChange={handleChange} placeholder='Please Enter here' style={{marginTop:"15px"}}></input>
      <h2>You entered: {input}</h2>
      <h2>You entered {count.current} times</h2>
      <h2>Your previous value was: {prevState.current}</h2>
    </div>
  )
}
export default Useref;
