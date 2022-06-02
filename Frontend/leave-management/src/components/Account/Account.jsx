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

 console.log(form.email)
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
            <input type='submit'/>
    </div>
  )
}

export default Account