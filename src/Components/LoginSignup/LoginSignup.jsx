import React, { useState } from 'react'
import './Form.css'

import person_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'

export const LoginSignup = () => {

    const [action, setAction] = useState("Login");

  return (
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {action==="Login"?<div></div>:<div className="input">
                <img src={person_icon} alt="person" />
                <input type="text" placeholder='Name' />
            </div>}
            

            <div className="input">
                <img src={email_icon} alt="email" />
                <input type="email" placeholder='Email' />
            </div>

            <div className="input">
                <img src={password_icon} alt="password" />
                <input type="password" placeholder='Password' />
            </div>
        </div>
        {action==="Sign Up"?<div></div>:<div className="forgot-password">Forgot Password! <span>Click Here</span></div>}
        
        <div className="submit-container">
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>

            <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
        </div>
        
    </div>
  )
}

export default LoginSignup;
