


import React from 'react'
import { useState } from 'react'

const Counter = () => {
  let[count,setcount] = useState(0)
  let[name,setname] = useState("dhoni")
  
  let increase =()=>{
    setcount(count +1)
  }
  
  let decrease=()=>{
    setcount(count -1)
  }

  let reset =()=>{
    setcount(count = 0)
  }
  
  let chgname =()=>{
    setname("rohit")
  }
  return (
    <div id='card'>
        <h1>Count is :{count}</h1>
        <button onClick={increase}>increase</button> <br />
        <button onClick={decrease}>Decrease</button> <br />
        <button onClick={reset}>Reset</button> <br />
        <h2>Name is : {name}</h2>
        <button onClick={chgname}>change name</button> <br />
        <button onClick={()=>setcount(count +1)}>increase 2</button> <br />
        <button onClick={()=>setcount(count -1)}>decrease 2</button> <br />

    </div>
  )
}

export default Counter
