import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

const Account = () => {

  const [form, setForm] = useState({
    email:"",
    password:""
  })
  const navigate = useNavigate();

  return (
    <div>
        <h4>Login</h4>
        <label>Email</label>
        <br />
        <input 
            type="text" 
            />
        <br />
        <label>Password</label>
        <br />
        <input 
            type="password" 
            />
        <br />
        <Link to="/adminnav"><input type='submit'/></Link>
    </div>
  )
}

export default Account