import React from 'react'
import "./Featured.scss"

const Featured = () => {
  return (
    <div className='featured'>
        <div className="container">
            <div className="left">
                <div className="slogan">
                    <h1>Making Every Service</h1>
                    <h1>Accessible and Hassle-Free</h1>
                </div>
                <div className="search-bar-featured">
                    <input className='search-input-featured' placeholder='Search...'/>
                    <button className='search-button-featured'>
                        <img className='search-icon-featured' src="/img/Search.svg" alt="" />
                    </button>
                 </div>
                 <div className="popular">
                    <span>Popular:</span>
                    <button>Baby Sitter</button>
                    <button>Home Deep Cleaning</button>
                    <button>Toilet Cleaning</button>
                 </div>
            </div>
            <div className="middle">
                <hr className='line-separator-featured'/>
            </div>
            <div className="right">
                <img src="/img/ads.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Featured