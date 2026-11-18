import React, { useRef, useState } from 'react'

const Home = () => {

    let [dark,setdark] = useState(false)

    let a = useRef(20)
    let b = 20

    let increase =()=>{

        console.log("a value is:",a.current++);
        console.log("b value is",b++);
        
    }

    let h1 = useRef()

    let changecolor = ()=>{

        console.log(h1.current);

        h1.current.style.color = "red"
    }
  return (
    <div className='home'>

        <header>
            <h3>Check on console...</h3>
            <button onClick={increase}>increase</button>
            <button onClick={()=>setdark(!dark)}> {dark? "dark":"light"}</button>
        </header>


        <main>
            <h1 ref={h1}>UseRef Hook Example</h1>
            <button onClick={changecolor}>change color</button>
        </main>
        
    </div>
  )
}

export default Home