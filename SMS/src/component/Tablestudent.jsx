import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'


const Tablestudent = () => {

    async function std() {

        let res = await axios.get('https://6ad078d5addc5b5cb141cc74.mockapi.io/student')

        return res.data;
    }
    
    let {data,isLoading,isError} = useQuery({
        queryKey : ["student"],
        queryFn : std
    })

    if(isLoading)
    {
      return  <h1>...Loading</h1>
    }

    if(isError)
    {
        return <h1>someting went wrong try again later</h1>
    }

  return (
    <div>
        <table>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>email</th>
                <th>dept</th>
                <th>action</th>
            </tr>

            {
                data.map((e)=>{
                    return <tr key={e.id}>
                        <td>{e.id}</td>
                        <td>{e.name}</td>
                        <td>{e.email}</td>
                        <td>{e.department}</td>
                        <td><button>Edit</button>
                        <button>delete</button></td>
                </tr>
            })
        }
        </table>
     
    </div>
  )
}

export default Tablestudent