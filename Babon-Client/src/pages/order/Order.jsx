import React from 'react'
import "./Order.scss"
import { Link } from 'react-router-dom'

const Order = () => {
  return (
    <div className='order'>
      <div className="container">
        <div className="form">
          <div className="header">
            <img src="/img/Cleaning.png" alt="" />
            <h1>Membersihkan toilet paling bersih 1 jagat</h1>
          </div>
          <div className="item">
            <div className="what-to-do">
              <label htmlFor="">Service To do</label>
              <input type="text" placeholder='e.g jasa foto wedding'/>
            </div>
            <div className="time-period">
              <label htmlFor="">Time Period</label>
              <div className="period">
                <div className="from">
                  <span>From:</span>
                  <input type="date" name="" id="" />
                </div>
                <div className="to">
                  <span>To:</span>
                  <input type="date" name="" id="" />
                </div>
              </div>
            </div>
            <div className="info">
              <label htmlFor="">Additional Information <span>(optional)</span></label>
              <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
            <div className="btn">
              <Link to="/cart" className='link'>
                <button>Add to cart</button>
              </Link>
              <Link to="/payment" className='link'>
                <button>Check Out</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Order