import React, { useRef } from 'react'

const Contact = () => {

  let username = useRef(null)
  let email = useRef(null)
  let pass = useRef(null)
  let confirmpass = useRef(null)

  let handlesubmit =(e)=>{
    e.preventDefault()

    console.log("Username is :",username.current.value);
    console.log("Email is :",email.current.value);
    console.log("Password is :",pass.current.value);
    console.log("Confirm pass:",confirmpass.current.value);
    

    console.log("form submitted");


  }





  return (
    <div className='contact'>
        <h1>Registration form</h1>

        <form action=""  onSubmit={handlesubmit}>
          <input type="text" name="" id="" placeholder='Enter Name' ref={username}/>
          <input type="email" name="" id="" placeholder='Enter Email' ref={email} />
          <input type="password" name="" id=""  placeholder='Enter password' ref={pass}/>
          <input type="password" name="" id="" placeholder='Enter Confirm password' ref={confirmpass} />

          <button>Register</button>
        </form>
    </div>
  )
}

export default Contact