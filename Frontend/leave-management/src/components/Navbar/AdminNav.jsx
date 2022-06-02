import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import "../Home/Home.css"

const AdminNav = () => {
  return (
    <div >
      <div id='admin'>
        <Link to="/approve"><button id='approve'>Show Letters</button></Link>
        <Link to="/"><button id='logout'>Logout</button></Link>
      </div>
      <div id='home'>
        <h1>Manager Portal,</h1>
    </div>
    </div>
  )
}

export default AdminNav