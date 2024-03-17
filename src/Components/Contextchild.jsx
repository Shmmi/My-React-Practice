import React, { useContext } from 'react'
import { ContextState } from './Contextparent';
const Contextchild = () => {
    
const contextData= useContext(ContextState);
  return (
    <div>
      <h1>{contextData}</h1>
    </div>
  )
}

export default Contextchild
