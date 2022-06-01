import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div id='navbar'>
        <Link to="/"><h4 id='h'>Home</h4></Link>
        <Link to="/create"><button id='create'>Create Leave</button></Link>
        <Link to="/cancel"><button id='cancel'>Cancel Leave</button></Link>
        <Link to="/check"><button id='check'>Check Status</button></Link>
        <Link to="/account"><button id='account'>Account</button></Link>
    </div>
  )
}

export default Navbar