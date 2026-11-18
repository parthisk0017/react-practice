import React from 'react'
import { BrowserRouter,Routes,Route, Link } from 'react-router-dom'
import DisplayStudents from './Component/DisplayStudents'
import AddStudent from './Component/AddStudent'
import EditStudent from './Component/EditStudent'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <nav>
          <h1>Student Management</h1>

          <Link to="/">Students</Link>
          <Link to="/add">Add</Link>
        </nav>

        <Routes>
          <Route path='/' element={<DisplayStudents/>}></Route>
          <Route path='/add' element={<AddStudent/>}></Route>
          <Route path='/edit/:id' element={<EditStudent/>}></Route>
        </Routes>
        
      </BrowserRouter>
    </>
  )
}

export default App