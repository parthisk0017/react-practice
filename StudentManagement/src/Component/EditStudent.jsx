import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { addStudent, getStudentByid, updateStudent } from '../Service/studentservice'
import { useParams } from 'react-router-dom'

const EditStudent = () => {

    const [student,setstudent] =useState({

        sname : "",
        sid : "",
        semail : "",
        phone :"",
        dept :""

})
  let {sname, sid, semail, phone, dept} = student;

  const {id} = useParams()

  let fecthstudent =async()=>{

    try
    {
      let data = await getStudentByid(id)

      setstudent(data)
    }
    catch(err)
    {
      console.log(err);
      
    }
  }
  useEffect(()=>{
    fecthstudent()
  },[])



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

    await updateStudent(id,student);

    alert("Updated Done Successfully...")

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
            <input type="tel" placeholder='Enter  Phone Number' name="phone" id="" value={phone} maxLength={10} onChange={handlechange} />
            <input type="text" placeholder='Enter Your Department' name="dept" id="" value={dept} onChange={handlechange}/>
            <button onClick={handlesubmit}>Update</button>
        </form>
    </div>
  )
}

export default EditStudent