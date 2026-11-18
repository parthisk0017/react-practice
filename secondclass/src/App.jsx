


let App = ()=>{

  let ename = "miller"
  let eid = "017"
  let sal =25000
  return(

    <div>
        <h1>This is App Component</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet necessitatibus numquam, placeat voluptatibus architecto iure.</p>

        <img src="" alt="" />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.<br /> Eum, perferendis?</p>
       

        <label htmlFor=""></label>
        <div className="box"></div>

         <hr />
         <h1>Emp name is : {ename.toUpperCase()}  </h1>
         <h2>Emp id is : {eid}</h2>
         <h3> Emp salary is :{sal*12}</h3>
    </div>
  )
}
export default App