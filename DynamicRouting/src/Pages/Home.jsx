import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  let navigate = useNavigate()


  let next = ()=>{
    navigate("/products")
  }

  return (
    <div className='homepage'>
      <button onClick={next}>Next Page</button>
    </div>
  )
}

export default Home