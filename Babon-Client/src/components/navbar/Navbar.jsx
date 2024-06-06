import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import "./Navbar.scss";
import newRequest from '../../utils/newRequest';

const Navbar = () => {

  const [open, setOpen] = useState(false)

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await newRequest.post("/auth/logout");
      localStorage.setItem("currentUser", null);
      navigate("/")
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='navbar'>
        <div className="container">
            <div className="logo">
              <Link to="/" className='link'>
                <img  className="logo-babon" src="/img/Logo Babon.png" alt="" />
              </Link>
            </div>
            <div className="search">
              <div className="search-bar">
                <input type="search" name="" id="" className='search-input' placeholder='Search...'/>
                <button className='search-button'>
                  <img className='search-icon' src="/img/Search.svg" alt="" />
                </button>
              </div>
            </div>
            <div className="links">
              <img className='notif-icon' src="/img/Notif.svg" alt="" />
              <Link className='link' to="/cart">
                <img className='cart-icon' src="/img/Cart.svg" alt="" />
              </Link>
              {currentUser && (
                <Link className='link' to="/chats">
                  <img className='chat-icon' src="/img/Chat.svg" alt="" />
                </Link>
              )}
              {currentUser && (
                <Link className='link' to="/history">
                  <img className='order-history-icon' src="/img/History.svg" alt="" />
                </Link>
              )}
            </div>
            <div className="account-button">
              {!currentUser && <Link className='link' to="/login"><button className='login-button'>Login</button></Link>}
              {!currentUser && <Link className='link' to="/register"><button className='register-button'>Register</button></Link>}
              {currentUser && (
                <div className="user" onClick={()=>setOpen(!open)}>
                  <img src={currentUser.img || "img/Profile.svg"} alt="" />
                  <span className='username'>{currentUser?.username.split(" ")[0]}</span>
                  {open && <div className="user-options">
                    {
                      currentUser?.isSeller && (
                        <>
                          <Link to="/serviceList" className='link'>My Services</Link>
                          <Link to="/add" className='link'>Add New Services</Link>
                        </>
                      )
                    }
                    <Link to="/OrderList" className='link'>Orders</Link>
                    {!currentUser.isSeller && <Link to="" className='link'>Become a Seller</Link>}
                    <Link to="/profile" className='link'>Profile</Link>
                    <Link onClick={handleLogout} className='link'>Logout</Link>
                  </div>}
                </div>
              )}
            </div>
        </div>
    </div>
  )
}

export default Navbar