import React, { useReducer } from 'react'

const reducer = (value,action)=>{
if(action.type== "INC"){
    return value+2;
}
else if(action.type=="DEC"&& value>0){
    return value-2;
}
else if(action.type=="MUL"){
    return value*2;
}
else if(action.type=="DIV"&& value>1){
    return value/2;
}
else{
    return value;
}
}

const UseReducer = () => {
    const[value,dispatch] = useReducer(reducer,0);
    
  return (
    <div>
        <h1>{value}</h1>
      <button onClick={()=>dispatch({type: "INC"})}>Increment</button>
      <button onClick={()=>dispatch({type: "DEC"})}>Decrement</button>
      <button onClick={()=>dispatch({type: "MUL"})}>Multiply</button>
      <button onClick={()=>dispatch({type: "DIV"})}>Divide</button>
    </div>
  )
}

export default UseReducer
