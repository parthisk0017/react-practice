


import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Login from './Login'

const Register = () => {

    let[username,setusername] = useState("")
    let[email,setemail]=useState("")
    let[pass,setpass] = useState("")
    

    let navigate = useNavigate()


    let handleSubmit =(e)=>{
      e.preventDefault()

       console.log(username,email,pass);
      
      

       if(!username || !email || !pass)
       {
        toast.warning("fill all the box")
       }

       localStorage.setItem("username",username)
       localStorage.setItem("email",email)
       localStorage.setItem("pass",pass)
       
       
       toast.success("signup done",{
        autoClose:800
       } );
       
       setusername("")
       setemail("")
       setpass("")


       setTimeout(() => {
          navigate("/Login")
       }, 1000);



    }
  return (

       <div className='signup'>

        <h1>Register Page</h1>

         <form action=""onSubmit={handleSubmit}>

            <label htmlFor="">Name</label>
            <input type="text" name="" placeholder='Enter a name' id="" value={username} onChange={(e)=>setusername(e.target.value)}/>

            <label htmlFor="">email</label>
            <input type="email" name="" id="" placeholder='Enter a Email' value={email} onChange={(e)=>setemail(e.target.value)}/>

            <label htmlFor="">Password</label>
            <input type="password" name="" id="" placeholder='Enter a Password' value={pass}onChange={(e)=>setpass(e.target.value)} />
            <button>SignUp</button>
         </form>

         <footer>
          <p>Already have an Account</p>
          <Link to="/login">login</Link>
         </footer>
    </div>
  )
}

export default Register