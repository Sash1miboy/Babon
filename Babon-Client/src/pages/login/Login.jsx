import React, { useState } from 'react'
import "./Login.scss"
import { Link, useNavigate } from 'react-router-dom'
import newRequest from '../../utils/newRequest'

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res =  await newRequest.post("/auth/login", {username, password});
      localStorage.setItem("currentUser", JSON.stringify(res.data))
      navigate("/")
    } catch (err) {
      setError(err.response.data);
    }
  }

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
          <form className="right" onSubmit={handleSubmit}>
            <h1>Login</h1>
              <div className="input-bar">
                <div className="username-bar">
                  <label htmlFor="">Username</label>
                  <input type="text" name='username' placeholder='Enter your username' onChange={e=>setUsername(e.target.value)}/>
                </div>
                <div className="password-bar">
                  <label htmlFor="">Password</label>
                  <input type="password" name="password" id="" placeholder='Enter your password' onChange={e=>setPassword(e.target.value)}/>
                </div>
              </div>
              <span className="forgot">Forgot your password?</span>
              <button type="submit">Login</button>
              {error && error}
              <span className="dont-have-account">Don't have an account? <Link to="/register" className='link'>Register here</Link></span>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login