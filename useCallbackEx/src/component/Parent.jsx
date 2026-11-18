import React from 'react'
import Child from './Child'
import{useState} from 'react'
import{useCallback} from 'react'

const Parent = () => {

    const[count,setcount] = useState(0)

    console.log("Parent is rendering");


    let add = useCallback(()=>{
        console.log("iam add method");
        
    })
    

  return (
    <div>
        <h2>This is Parent component</h2>
      
        <h3>Count is:{count}</h3>
        <button onClick={()=>setcount((pre)=>pre + 1)}>click</button>

  <hr />
        <Child product={"laptop"} price={40000} add = {add}/>
    </div>
  )
}

export default Parent