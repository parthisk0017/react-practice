import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Singleproduct = () => {

  let navigate = useNavigate()
  let[product,setproduct] = useState({})

    let {id} = useParams()

  let getSingleProduct =async (id)=>{
    try{
        let res = await fetch (`https://fakestoreapi.com/products/${id}`)
        let data = await res.json()
        setproduct(data)
      
    }
    catch(err)
    {
      console.log(err);
      
    }
  }
  useEffect(()=>{
    getSingleProduct(id)
  },[])

  let back =()=>{
    navigate(-1)
  }

  return (
    <div className='soloproduct'>

      <div className='productcard'>
        <img id='img' src={product.image} alt="" />
        <p>{product.title}</p>
        <p>{product.price*90}RS</p>
        <p>{product.category}</p>
        <p>{product.rating?.rate}⭐</p>
        </div>
      <footer>
        <button onClick={back}>Back</button>
      </footer>
    </div>

  )
}

export default Singleproduct