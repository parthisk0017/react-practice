import React from 'react'
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom'
import Nav from './component/Nav'
import StudentLogin from './component/StudentLogin'
import StudentSignup from './component/StudentSignup'
import AdminLogin from './component/AdminLogin'


const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
            <li><Link to="/">AdminLogin</Link></li>
            <li><Link to="/studentlogin">studentlogin</Link></li>
            <li> <Link to="/studentsignup">studentsignup</Link></li>              
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<AdminLogin/>}></Route>
        <Route path='/studentlogin' element={<StudentLogin/>}></Route>
        <Route path='/studentsignup' element={<StudentSignup/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App