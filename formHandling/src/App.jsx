import React from 'react'
import Register from './component/Register'

import{BrowserRouter,Routes,Route, Link}from 'react-router-dom'
import Login from './component/Login'
import Home from './component/Home'
import{ToastContainer} from 'react-toastify'

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
      </Routes>
      <ToastContainer/>
    </BrowserRouter>
    </>
  )
}

export default App