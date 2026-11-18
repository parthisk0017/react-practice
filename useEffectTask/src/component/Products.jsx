


import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Products = () => {

    let [items,setItems] = useState([])
    let [currentpage,setcurrentpage] = useState(1)

    let perpageData = 6;
    let lastpage = Math.ceil(items.length / perpageData)
    let endindex = currentpage * perpageData;
    let startindex = endindex - perpageData;
    let currentItems = items.slice(startindex,endindex)


    let fetchdata = async()=>{
        try
        {
            let res = await fetch('https://dummyjson.com/products')
            let data = await res.json();
            console.log(data.products);
            setItems(data.products)
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
<>
    <div className='container'>
        {
           currentItems.length > 0 ?
           currentItems.map((ele)=>{
                return <div key={ele.id} className='product'>
                    <img src={ele.images[0]} alt="" />
                    <h2><p>{ele.title}</p></h2>
                    <h3><p>{ele.description}</p></h3>
                    <h4><p>{ele.price}$</p></h4>
                    <h4><p>{ele.rating}⭐</p></h4>
                </div>
            })
            : <h1>Data not Found</h1>
        }
 
    </div>

        <footer>
            <button onClick={()=>setcurrentpage(currentpage - 1)} disabled={currentpage ==1}>back</button>
            <span>{currentpage}/{lastpage}</span>
            <button onClick={()=>setcurrentpage(currentpage +1)}disabled={currentpage ==lastpage}>next</button>
        </footer>
</>
  )
}

export default Products