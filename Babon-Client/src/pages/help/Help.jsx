import React from 'react'
import "./Help.scss"

const Help = () => {
  return (
    <div className='help'>
      <div className="container">
        <h1>How can we help you</h1>
        <div className="search-bar-help">
                <input type="search" name="" id="" className='search-input-help' placeholder='Search...'/>
                    <button className='search-button-help'>
                        <img className='search-icon-help' src="/img/Search.svg" alt="" />
                    </button>
                 </div>
        <div className="menu">
          <button>Babon Account</button>
          <button>Complaint & Refund</button>
          <button>Payment</button>
          <button>Order & Transaction</button>
          <button>Buying on Babon</button>
          <button>Selling on Babon</button>
          <button>Babon Services</button>
          <button>Regulation & Guidelines</button>
        </div>
      </div>
    </div>
  )
}

export default Help