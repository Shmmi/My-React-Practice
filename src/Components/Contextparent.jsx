import React, { createContext } from 'react'
import Contextchild from './Contextchild'
import {useState } from 'react'
//We use contextApi when we want to render some data feom a single parent to child of child.
//Means let say there are 4 childs a,b,c,d and we pass the data from parent to d child than we can pass
//this data by using contextapi directly feom parent to d child
const ContextState = createContext();

const Contextparent = () => {
    // const[data,setData] = useState("This is my data")
    const data = "This is my  data"
  return (
    <div>
        <ContextState.Provider value={data}>
        <Contextchild/>
        </ContextState.Provider>
      
    </div>
  )
}

export default Contextparent
export {ContextState};
