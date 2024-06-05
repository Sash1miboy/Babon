import React from 'react'
import "./Register.scss"
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='register'>
      <div className="container">
        <div className="link-header">
          <Link to="/help" className='link'>
            <img src="/img/Help Icon.svg" alt="" />
          </Link>
          <Link to="/" className='link'>
            <img src="/img/Home Icon.svg" alt="" />
          </Link>
        </div>
        <div className="register-box">
          <div className="left">
            <img src="/img/calling.png" alt="" />
          </div>
          <div className="right">
            <h1>Registration</h1>
            <div className="input-bar">
              <div className="username-bar">
                <label htmlFor="">Username</label>
                <input type="text" placeholder='Enter your username'/>
              </div>
              <div className="email-bar">
                <label htmlFor="">Email</label>
                <input type="email" name="" id="" placeholder='Enter your email address'/>
              </div>
              <div className="password-bar">
                <label htmlFor="">Password</label>
                <input type="password" name="" id="" placeholder='Enter your password'/>
              </div>
              <div className="mobile-date">
                <div className="mobile-bar">
                  <label htmlFor="">Mobile Number</label>
                  <input type="number" name="" id="" placeholder='Enter your phone number'/>
                </div>
                <div className="date-bar">
                  <label htmlFor="">Date of Birth</label>
                  <input type="date" name="" id="" />
                </div>
              </div>
            </div>
            <div className="check-box">
              <input type="checkbox" name="" id="" />
              <span>I agree to the terms of use and the privacy policy</span>
            </div>
            <Link to="/" className='link'>
              <button>Register</button>
            </Link>
            <span className="already-have-account">Already have an account? <Link to="/login" className='link'>Login here</Link></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register