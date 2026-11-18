

import React from 'react'
import{BrowserRouter,Routes,Route,Link}from 'react-router-dom'
import Home from './component/Home'
import About from './component/About'

const App = () => {
  return (
    <>
      <BrowserRouter>
      <nav>
        <h2>EventHandling</h2>
        <ul>
          <Link to='/'>home</Link>
           <Link to='/about'>about</Link>
        </ul>
      </nav>
        <Routes>
          <Route path='/'element={<Home/>}></Route>
          <Route path='/about'element={<About/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App