import React from 'react'
import "./Sponsor.scss"

const Sponsor = () => {
  return (
    <div className='sponsor'>
        <div className="container">
            <div className="left">
                <img src="/img/monkey-business.png" alt="" />
            </div>
            <div className="right">
                <span className='headline'>Effortless Solutions for Your Every Need</span>
                <div className="bullet-poin">
                    <div className="point-1">
                        <img src="/img/check.png" alt="" />
                        <span>Meet the best service provider for your needs</span>
                    </div>
                    <div className="point-2">
                        <img src="/img/check.png" alt="" />
                        <span>Find any services you need</span>
                    </div>
                    <div className="point-3">
                        <img src="/img/check.png" alt="" />
                        <span>Hassle Free!</span>
                    </div>
                </div>
                <button>Get started now!</button>
            </div>
        </div>
    </div>
  )
}

export default Sponsor