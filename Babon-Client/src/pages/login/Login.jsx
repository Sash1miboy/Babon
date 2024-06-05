import React from 'react'
import "./Login.scss"
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='login'>
      <div className="container">
        <div className="link-header">
          <Link to="/help" className='link'>
            <img src="/img/Help Icon.svg" alt="" />
          </Link>
          <Link to="/" className='link'>
            <img src="/img/Home Icon.svg" alt="" />
          </Link>
        </div>
        <div className="login-box">
          <div className="left">
            <img src="/img/sitting.png" alt="" />
          </div>
          <div className="right">
            <h1>Login</h1>
            <div className="input-bar">
              <div className="username-bar">
                <label htmlFor="">Username</label>
                <input type="text" placeholder='Enter your username'/>
              </div>
              <div className="password-bar">
                <label htmlFor="">Password</label>
                <input type="password" name="" id="" placeholder='Enter your password'/>
              </div>
            </div>
            <span className="forgot">Forgot your password?</span>
            <Link to="/" className='link'>
              <button>Login</button>
            </Link>
            <span className="dont-have-account">Don't have an account? <Link to="/register" className='link'>Register here</Link></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login