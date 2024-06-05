import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./Navbar.scss";

const Navbar = () => {

  const [open, setOpen] = useState(false)

  const currentUser= {
    id:1,
    userName:"Endra Djati",
    isSeller:true
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
                <input className='search-input' placeholder='Search...'/>
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
              {!currentUser && <button className='login-button'>Login</button>}
              {!currentUser && <button className='register-button'>Register</button>}
              {currentUser && (
                <div className="user" onClick={()=>setOpen(!open)}>
                  <img src="/img/Profile.svg" alt="" />
                  <span className='username'>{currentUser?.userName}</span>
                  {open && <div className="user-options">
                    {
                      currentUser?.isSeller && (
                        <>
                          <Link to="/serviceList" className='link'>My Services</Link>
                          <Link to="/add" className='link'>Add New Services</Link>
                        </>
                      )
                    }
                    {!currentUser && <Link to="" className='link'>Become a Seller</Link>}
                    <Link to="/profile" className='link'>Settings</Link>
                    <span>Logout</span>
                  </div>}
                </div>
              )}
            </div>
        </div>
    </div>
  )
}

export default Navbar