import React from 'react'
import "./Success.scss"
import { Link } from 'react-router-dom'

const Success = () => {
  return (
    <div className='success'>
        <div className="container">
            <img src="/img/success.svg" alt="" />
            <h1>Transaction Complete</h1>
            <Link className='link' to="/">
                <button>Back To Home Page</button>
            </Link>
        </div>
    </div>
  )
}

export default Success