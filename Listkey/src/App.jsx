import Card from "../../propsExample/src/Component/Card"
import Cards from "./component/Cards"



function App(){

  let subjects =["html","css","Js","java","python"]

  let emp = [
    {
       ename : "Tom",
       eid : 101,
       sal : 20000
    },
    {
       ename : "Kumar",
       eid : 102,
       sal : 22000
    },
    {
       ename : "Sanjay",
       eid : 103,
       sal : 23000
    },
    {
       ename : "Miller",
       eid : 104,
       sal : 25000
    },
    {
       ename : "Ram",
       eid : 105,
       sal : 26000
    },
   

  ]

  return(
    <>
      <h1>List and Key</h1>
      {
        subjects.map((sub,index)=>{
          return <li key={index}>{sub}</li>
        })
      }

      <main>
        {
          emp.map((ele)=>{
            return <div key={ele.eid}>
              <h1>Ename is : {ele.ename}</h1>
              <h2>Eid is : {ele.eid}</h2>
              <h3>Emp Sal : {ele.sal}</h3>
            </div>
          })
        }
      </main>

      <hr />


      <section>
        {
          emp.map((ele)=>{
            return <Cards
            ename= {ele.ename}
            eid = {ele.eid}
            sal = {ele.sal}
            />
          })
        }
      </section>
    </>

  )

}
export default App