import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import "./Account.css"

const Account = () => {

  const [form, setForm] = useState({
    email:"",
    password:""
  })
  const navigate = useNavigate();

  return (
    <div id='login'>
        <h4>Login</h4>
        <p>Please enter username:admin pwd:admin</p>
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
        <button 
        id='login-but' 
        type='submit' 
        onClick={()=>{
          navigate('/adminnav')
        }}>Login</button>
        
    </div>
  )
}

export default Account