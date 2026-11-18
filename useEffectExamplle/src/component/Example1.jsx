


import React, { useEffect, useState } from 'react'

const Example1 = () => {

    let [count,setcount] =useState(0)

    let [dark,setdark] = useState(true)


    useEffect(()=>{
        console.log("iam useeffect 1");

    })
    useEffect(()=>{
        console.log("iam useeffect 2");
        
    },[])

     useEffect(()=>{
        console.log("iam useeffect 3");
        
     },[dark])

     useEffect(()=>{
        console.log("iam useeffect 4");
        
     },[count])


     useEffect(()=>{
        let num = 0;
        let timer = setInterval(()=>{
            console.log(num++);
            
        },1000)

        return ()=>{
            clearInterval(timer)
            console.log("Count stoped");
            
        }
     })


  return (
    <>
        <h1>UseEffect Example</h1>
        <h2>Count is : {count}</h2>
        <button onClick={()=>setcount(count + 1)}>increase</button>

        <button onClick={()=>setdark(!dark)}>{dark?"light" : "dark"}</button>


    </>
  )
}

export default Example1