import React, { useState } from 'react'

const AdminLogin = () => {


    let[admin,setAdmin] = useState({
        name:"",
        password:""
    })

    let handleChange =(e)=>{
          let{name,value} = e.target
          
          setAdmin({...admin,[name]:value})                 
    }
    console.log(admin);

    let handlesubmit =async(e)=>{
        e.preventDefault()
       let res = await fetch('https://dummyjson.com/auth/login',{
            method:"POST",
            headers:{
                 "Content-Type":"application/json"
            },
             
            
    })
    }
    

  return (
    <div>
        <form onSubmit="handlesubmit">
            <input type="text" placeholder='Enter a user name' name="name" value={admin.name} onChange={handleChange} id="" />
            <input type="text" placeholder='Enter your pass' name="password" value={admin.password} onChange={handleChange} id="" /><br />
            <button onClick={handlesubmit}>Login</button>
        </form>
    </div>
  )
}

export default AdminLogin