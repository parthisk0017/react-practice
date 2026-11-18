import React from 'react'
import { BrowserRouter,Routes,Route, Link } from 'react-router-dom'
import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <nav>
          <h2>UseRef Example</h2>
            <ul>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </ul>
        </nav>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App