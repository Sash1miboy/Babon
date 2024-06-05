import React from 'react'
import "./Footer.scss"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="container">
        <div className="left">
          <div className="content">
            <div className="about">
              <h1>About</h1>
              <span>Privacy Policy</span>
              <span>Term of Services</span>
              <span>Intellectual Property Claims</span>
              <span>Investor Relations</span>
              <span>Partnerships</span>
              <span>Press news</span>
              <span>Careers</span>
            </div>
            <div className="support">
              <h1>Support</h1>
              <Link to="/help" className='link'>
                <span>Help and Support</span>
              </Link>
              <span>Trust and Safety</span>
              <span>Selling on Babon</span>
              <span>Buying on Babon</span>
              <span>Babon Guides</span>
              <span>Learn</span>
            </div>
            <div className="community">
              <h1>Community</h1>
              <span>Community Hub</span>
              <span>Forum</span>
              <span>Events</span>
              <span>Blog</span>
              <span>Affliates</span>
              <span>Become A Seller</span>
              <span>Community Standards</span>
            </div>
          </div>
          <div className="download-app">
            <img src="/img/appstore.svg" alt="" />
            <img src="/img/googleplay.svg" alt="" />
          </div>
        </div>
        <div className="right">
          <div className="line">
            <hr />
          </div>
          <div className="content">
            <div className="foot-babon">
              <img src="/img/Logo Babon.png" alt="" />
              <span>Making Every Service Accessible and Hassle-Free</span>
            </div>
            <div className="touch">
              <h1>Get in Touch</h1>
              <span>monkey1@babon.com</span>
              <span>&#40;+62&#41; 812 8793 323</span>
            </div>
            <div className="social">
              <img src="/img/twitter.svg" alt="" />
              <img src="/img/facebook.svg" alt="" />
              <img src="/img/linkedin.svg" alt="" />
              <img src="/img/instagram.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer