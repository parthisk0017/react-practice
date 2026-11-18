import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { getStudents } from '../Service/studentservice'
import { deleteStudent } from '../Service/studentservice'
import { useNavigate } from 'react-router-dom'

const DisplayStudents = () => {
 
  let [students,setstudents] = useState([])

  let navigate = useNavigate([])

  let fetchstudents =async()=>{

    try
    {
      //  let res = await axios.get("http://localhost:3000/students")
      //  console.log(res.data);
      //  setstudents(res.data);

      let data = await getStudents()
      setstudents(data)

    }
    catch(err)
    {
      console.log(err);
      
    }
  }
  useEffect(()=>{
    fetchstudents()
  },[])


 
let handleDelete = async (id) => {
    try {
        await deleteStudent(id)

        let data = await getStudents()
        setstudents(data)
    }
    catch (err) {
        console.log(err)
    }
}

let handleEdit =(id)=>{
  navigate(`/edit/${id}`)
}


  
  return (
    <div className='displayStudents'>
      
      <h1>Student Details</h1>

        <table>
          <thead>
            <tr>
              <th>Sid</th>
              <th>Sname</th>
              <th>Semail</th>
              <th>Phone</th>
              <th>Dept</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>
            {   
              students.map((ele)=>{
                return <tr key={ele.id}>
                  <td>{ele.sid}</td>
                  <td>{ele.sname}</td>
                  <td>{ele.semail}</td>
                  <td>{ele.phone}</td>
                  <td>{ele.dept}</td>
                  <td><button onClick={()=>handleEdit(ele.id)}>Edit</button></td>
                  <td><button onClick={()=>handleDelete(ele.id)}>Delete</button></td>
                </tr>
              })
            }
          </tbody>
        </table>
    </div>
  )
}

export default DisplayStudents