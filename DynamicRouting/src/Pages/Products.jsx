import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Products = () => {
    let[items,setitems] = useState([])
    let navigate = useNavigate()

    let fetchdata = async()=>{
        try{
            let res = await fetch('https://fakestoreapi.com/products')
            let data = await res.json()
            setitems(data)
                    
        }
        catch(err)
        {
            console.log(err);

            
        }

   
    }
        useEffect(()=>{
            fetchdata()
        },[])


        let handleClick =(id)=>{
           navigate(`/products/${id}`)
            
        }
  return (
    <>
        <h1>Products Page</h1>

        <main className='container'>
            {
                items.map((ele)=>{
                    return <div key={ele.id} className='card'>
                            
                                <p>{ele.title}</p>
                                <p>{ele.price}💲</p>
                                <button onClick={()=>handleClick(ele.id)}>more info</button>
                           </div>
                })
            }
        </main>
    </>
  )
}

export default Products