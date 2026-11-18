


import React, { useEffect, useState } from 'react'

const Home = () => {

    let [products,setproducts] = useState([])
    let [search,setsearch] = useState("")

    let fetchdata =async()=>{

        try{
            let res = await fetch('https://fakestoreapi.com/products')
            let data  = await res.json()
            console.log(data);
            setproducts(data)
            


            
            
        }
        catch(err)
        {
            console.log(err);
            
        }


    }
    useEffect(()=>{
        fetchdata()
    },[])

    let filterproduct = products.filter((p)=>p.title.toLowerCase().includes(search.toLowerCase()))
    console.log(filterproduct);
    

  return (
    <div className='homePage'>

        <header>
            <input type="text" name="" id="" value={search} onChange={(e)=>setsearch(e.target.value)} />
        </header>

        <main>
            {
                filterproduct.length >0 ?
                filterproduct.map((ele)=>{
                    return <li key={ele.id}>
                        <p>{ele.title}</p>
                    </li>
                })
                : <h1>No products</h1>
            }
       </main>
    </div>
  )
}

export default Home