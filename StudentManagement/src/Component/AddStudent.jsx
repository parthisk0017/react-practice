import React, { useState } from 'react'
import axios from 'axios'
import { addStudent } from '../Service/studentservice'

const AddStudent = () => {

    const [student,setstudent] =useState({

        sname : "",
        sid : "",
        semail : "",
        phone :"",
        dept :""

})
  let {sname, sid, semail, phone, dept} = student;

  let handlechange =(e)=>{

    let {value , name } = e.target

    setstudent({...student ,[name] : value })
  }

  let handlesubmit =async(e)=>{
    e.preventDefault();

    try
    {

    if(!sname || !sid || !semail || !phone || !dept)
    {
        return alert("Fill the Boxes")
    }

    console.log(student);

    // await axios.post("http://localhost:3000/students",student)

    await addStudent(student);

    alert("Register Done Successfully...")

    setstudent({
        sname : "",
        sid : "",
        semail : "",
        phone :"",
        dept :""
    })
    }

    catch(err)
    {
        console.log(err);
        
    }
    
  }

  return (
    <div className='addStudent'>
        <form action="">
            <input type="text" placeholder='Enter Your Name' name="sname" id="" value={sname} onChange={handlechange} />
            <input type="text" placeholder='Enter Your Id' name="sid" id="" value={sid} onChange={handlechange}/>
            <input type="email" placeholder='Enter Your Email' name="semail" id="" value={semail} onChange={handlechange} />
            <input type="tel" placeholder='Enter  Phone Number' name="phone" id="" value={phone} onChange={handlechange} />
            <input type="text" placeholder='Enter Your Department' name="dept" id="" value={dept} onChange={handlechange}/>
            <button onClick={handlesubmit}>Register</button>
        </form>
    </div>
  )
}

export default AddStudent