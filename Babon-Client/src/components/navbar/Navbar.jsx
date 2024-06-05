import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import "./Navbar.scss"

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
              <img  className="logo-babon" src="./img/Logo Babon.png" alt="" />
            </div>
            <div className="search">
              <div className="search-bar">
                <input className='search-input' type="search" placeholder='Search...'/>
                <button className='search-button'>
                  <img className='search-icon' src="./img/Search.svg" alt="" />
                </button>
              </div>
            </div>
            <div className="links">
              <img className='notif-icon' src="./img/Notif.svg" alt="" />
              <img className='cart-icon' src="./img/Cart.svg" alt="" />
              {currentUser && <img className='chat-icon' src="./img/Chat.svg" alt="" />}
              {currentUser && <img className='order-history-icon' src="./img/History.svg" alt="" />}
            </div>
            <div className="account-button">
              {!currentUser && <button className='login-button'>Login</button>}
              {!currentUser && <button className='register-button'>Register</button>}
              {currentUser && (
                <div className="user" onClick={()=>setOpen(!open)}>
                  <img src="./img/Profile.svg" alt="" />
                  <span className='username'>{currentUser?.userName}</span>
                  {open && <div className="user-options">
                    {
                      currentUser?.isSeller && (
                        <>
                          <span>Services</span>
                          <span>Add New Services</span>
                        </>
                      )
                    }
                    {!currentUser && <span>Become a Seller</span>}
                    <span>Settings</span>
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