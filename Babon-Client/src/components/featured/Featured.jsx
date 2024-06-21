import React, { useState } from 'react'
import "./Featured.scss"
import { useNavigate } from "react-router-dom";

function Featured() {

const [input, setInput] = useState("");
const navigate = useNavigate();

const handleSubmit = ()=>{
    navigate(`/services?search=${input}`)
};

  return (
    <div className='featured'>
        <div className="container">
            <div className="left">
                <div className="slogan">
                    <h1>Making Every Service</h1>
                    <h1>Accessible and Hassle-Free</h1>
                </div>
                <div className="search-bar-featured">
                    <input type="search" name="" id="" className='search-input-featured' placeholder='Search...' onChange={(e)=>setInput(e.target.value)}/>
                    <button className='search-button-featured'>
                        <img className='search-icon-featured' src="/img/Search.svg" alt="" onClick={handleSubmit} />
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