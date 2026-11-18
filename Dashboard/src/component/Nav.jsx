import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
        <ul>
            <li>Home</li>
            <li><Link to="">Student Login</Link></li>
            <li><Link to="adminLogin">Admin Login</Link></li>
            <li><Link to="studentsignup">Student Signup</Link></li>
        </ul>
    </div>
  )
}

export default Nav