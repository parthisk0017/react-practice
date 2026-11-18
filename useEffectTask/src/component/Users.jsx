


import React, { useEffect, useState } from 'react'

const Users = () => {

  let[users,setusers] = useState([])


  let fetchdata =async()=>{

    try
    {

    let res = await fetch('https://api.github.com/users')
    let data = await res.json()
    console.log(data);
    setusers(data)
    
    }
    catch(err)
    {
      console.log(err);
      
    }
  }
  useEffect(()=>{
      fetchdata()
  },[])
  

  return (
    <div className='container'>
        {

          users.map((ele)=>{
            return <div key={ele.id} className='product'>
                    <img src= {ele.avatar_url} alt="" />
                    <h3>{ele.login}</h3>
                    <h4>{ele.node_id}</h4>
                   </div>
          })

        }
    </div>
  )
}

export default Users