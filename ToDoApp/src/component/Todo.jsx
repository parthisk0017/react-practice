


import React, { useState } from 'react'

const Todo = () => {

    let[item,setitem] = useState("")
    let[items,setitems] = useState([])
    let[editIndex,seteditIndex] = useState(null)


    
    let handleclick = ()=>{

        item = item.trim()
         
        if(items.includes(item))
        {

            return alert("Item already present in list")

        }


        if(item === "")
        {
          return  alert("fill the box")
        }


        if(editIndex == null)
        {
            setitems ([...items,item])
        }
        else
        {
            let newitems = [...items]
            newitems[editIndex] = item;
            setitems(newitems);
            seteditIndex(null)

            alert("items updated successfuly",)
        }
        setitem ("")
    }

    let handledelete =(index)=>{
        console.log(index);
        
        let newItems = items.filter((ele,ind)=> ind != index)
        setitems(newItems)
        
    }
    let handleEdit = (index)=>{
        console.log();
        seteditIndex(index)
        setitem(items[index])
        
    }

  return (
    <div className='outer'>

        <h1>Todo App</h1>
        <header>
            <input type="text" placeholder='Enter your Todo' name="" id="" value={item} onChange={(e)=>setitem(e.target.value)} />
            <button onClick={handleclick}>{editIndex == null ? "Add":"update"}</button>
        </header>

        <main>
            {

                items.length > 0 ?

                items.map((ele,index)=>{
                    return <li key={index}>{ele}
                    <button onClick={()=>handleEdit(index)}>Edit</button>
                    <button onClick={()=>handledelete(index)}>Delete</button>
                    </li>
                })

                : <h3>No items found</h3>
            }
        </main>
    </div>
  )
}

export default Todo