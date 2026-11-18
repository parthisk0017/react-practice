


import React from 'react'
import {BrowserRouter,Routes,Route, Link} from 'react-router-dom'
import Products from './component/Products'
import Users from './component/Users'

const App = () => {
  return (
    <>
      <BrowserRouter>
      <nav>
        <h1>UseEffectTask</h1>
        <ul>
          <Link to="/">Products</Link> 
          <Link to="/users">Users</Link>
        </ul>
      </nav>
        <Routes>
          <Route path='/' element={<Products/>}></Route> 
          <Route path='/users' element={<Users/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App