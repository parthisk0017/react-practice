


import React, { useState } from 'react'
import Hello from './component/Hello'

const App = () => {

  let[count,setcount] = useState(0)
  let[dark,setdark] = useState(true)

  let increase =(pre)=>{
      setcount((pre)=>pre+1)
      setcount((pre)=>pre+1)
      setcount((pre)=>pre+1)
  }

  return (
    <div>

      <h1>Count : {count}</h1>
      <button onClick={increase}>increace</button> 
      <button onClick={()=>(setcount((pre)=>(pre-1)))}>decrease</button>
      <button onClick={()=>(setcount(0))}>reset</button>
      <button onClick={()=>(setdark((pre)=>!pre))}>{dark?"light":"dark"}</button>


    <hr />

    <Hello/>
    </div>

  )
}

export default App