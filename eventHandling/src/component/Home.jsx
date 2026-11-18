import React from 'react'

const Home = () => {
    let handleaClick = ()=>{
       
        alert("You getting a call")
    }
    let add =(a,b)=>{

       alert(a +b)   //alert(10+20)//
         
    }
    let userdetails=(name,age)=>{
        alert(`The user name is ${name} and age is ${age}`)
    }

    let hi = (e)=>{
        console.log(e);
        alert("hi")
        
    }
  return (
    <div className='homecontainer'>
        <header>
            <button onClick={handleaClick}> Call Me</button> 
            <button onClick={()=>add(10,20)}>Add</button>  
            <button onClick={()=>userdetails("spiderman",25)}>Details</button> 
            <button onClick={hi}>ele Me</button>
        </header>
    </div>
  )
}

export default Home