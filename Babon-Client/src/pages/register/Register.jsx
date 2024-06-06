import React, {useState} from 'react'
import "./Register.scss"
import { Link } from 'react-router-dom'
import newRequest from '../../utils/newRequest';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
    dateOfBirth: "",
    isSeller: false,
  });

  const navigate = useNavigate();

  const handleChange = (e)=>{
    setUser(prev=>{
      return {...prev, [e.target.name]: e.target.value};
    });
  };
  
  const handleSeller = (e)=>{
    setUser(prev=>{
      return {...prev, isSeller: e.target.checked};
    });
  };

  const handleSubmit = async (e)=>{
    e.preventDefault()
    try {
      await newRequest.post("/auth/register", {
        ...user
      });
      navigate("/login")
    } catch (err) {
      console.log(err)
    }
  };

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
          <form className="right" onSubmit={handleSubmit}>
            <h1>Registration</h1>
            <div className="input-bar">
              <div className="username-bar">
                <label htmlFor="">Username</label>
                <input type="text" name='username' placeholder='Enter your username' onChange={handleChange}/>
              </div>
              <div className="email-bar">
                <label htmlFor="">Email</label>
                <input type="email" name="email" placeholder='Enter your email address' onChange={handleChange}/>
              </div>
              <div className="password-bar">
                <label htmlFor="">Password</label>
                <input type="password" name="password" placeholder='Enter your password' onChange={handleChange}/>
              </div>
              <div className="mobile-date">
                <div className="mobile-bar">
                  <label htmlFor="">Mobile Number</label>
                  <input type="number" name="phoneNumber" placeholder='Enter your phone number'onChange={handleChange}/>
                </div>
                <div className="date-bar">
                  <label htmlFor="">Date of Birth</label>
                  <input type="date" name="dateOfBirth" onChange={handleChange}/>
                </div>
              </div>
            </div>
            <div className="become-seller">
              <input type="checkbox" name="isSeller" onChange={handleSeller}/>
              <span>I Want to Become a Seller</span>
            </div>
            <div className="check-box">
              <input type="checkbox" name="" id="" />
              <span>I agree to the terms of use and the privacy policy</span>
            </div>
            <button type="submit">Register</button>
            <span className="already-have-account">Already have an account? <Link to="/login" className='link'>Login here</Link></span>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register