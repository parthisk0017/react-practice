


import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Register from './Register'
import { toast } from 'react-toastify'

const Login = () => {

    let[loginemail,setloginsetemail] = useState("")
    let[loginpass,setloginpass]= useState("")

    let navigate = useNavigate()

    let handlesubmit = (e)=>{
        e.preventDefault()
        console.log(loginemail,loginpass);


        //get data from localstorage

        let email = localStorage.getItem("email")
        let pass = localStorage.getItem("pass")


        if(email == loginemail || pass == loginpass)
        {
          toast.success("login done",{
            autoClose:800
          })
          navigate("/Home")
        }
        else
        {
          toast.error("wrong credentials",{
            autoClose:800
          })
        }

        

        
    }
  return (
    <div className='signup'>
    <form action="" onSubmit={handlesubmit}>
        <label htmlFor="">Email</label>
        <input type="email" name="" placeholder='Enter a Registered email' id=""onChange={(e)=>setloginsetemail(e.target.value)} />

        <label htmlFor="">Password</label>
        <input type="password" name="" placeholder='Enter a Valid Password' id="" onChange={(e)=>setloginpass(e.target.value)} />

        <button>Login</button>
    </form>

    <footer>
      <p>Don't have an account</p>
      <Link to="/">Register</Link>
    </footer>
    </div>
  )
}

export default Login