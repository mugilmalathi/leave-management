import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router';

const Account = () => {
    const initialLoginForm = {
        email:'',
        password:''
    }

    const [loginForm, setLoginForm] = useState(initialLoginForm);
    const { email, password } = loginForm;
    const navigate = useNavigate();

    const handleLoginFormChange = (e) => {
        const { email, value } = e.target;
        setLoginForm({ ...loginForm, [email]: value });
        
      };

    const handleLogin = (e)=>{
        e.preventDefault();
        if(email==="mugil" && password==="mugil"){
            console.log("Success")
            navigate('/navbar');
        }else if(email==="admin" && password==="admin"){
            console.log("Success")
            navigate('/adminnav');
        }else{
            alert("invalid Name or Password!")
        }
    }
  return (
    <div>
        <form onSubmit={handleLogin}>
            <h4>Login</h4>
            <label>Email</label>
            <br />
            <input 
               type="text" 
               name='email'
               value={email}
               onChange={handleLoginFormChange}
               required
               />
            <br />
            <label>Password</label>
            <br />
            <input 
               type="password" 
               name='password'
               value={password}
               onChange={handleLoginFormChange}
               required
               />
            <br />
            <input type='submit'/>
        </form>
    </div>
  )
}

export default Account