import React from 'react'
import "./profile.scss"

const Profile = () => {
  return (
    <div className='profile'>
      <div className="container">
        <div className="left">
          <div className="profile-picture">
            <img src="/img/kdot.png" alt="" />
            <label htmlFor="upload-photo">Choose Photo</label>
            <input type="file" name="" id="upload-photo" />
          </div>
          <button>Change Password</button>
          <button>Turn on 2-Step Verification</button>
        </div>
        <div className="right">
          <h1>Bio</h1>
          <div className="biodata">
            <div className="left-bio">
              <span>Name</span>
              <span>Birth of Date</span>
              <span>Gender</span>
            </div>
            <div className="right-bio">
              <div className="name-input">
                <span>Kendrick Lamar</span>
                <button>Change</button>
              </div>
              <div className="dob-input">
                <span>06-17-1987</span>
                <button>Change</button>
              </div>
              <div className="gender-input">
                <span>Male</span>
                <button>Change</button>
              </div>
            </div>
          </div>
          <h1>Contacts</h1>
          <div className="contact">
            <div className="left-contacts">
              <span>Email</span>
              <span>Phone Number</span>
            </div>
            <div className="right-contacts">
              <div className="email-input">
                <span>kungfukenny@gmail.com</span>
                <button>Change</button>
              </div>
              <div className="phone-input">
                <span>(+62) 888-8888-8888</span>
                <button>Change</button>
              </div>
            </div>
          </div>
          <h1>About Yourself <button>Change</button></h1>
          <div className="about-profile">
            <p>
              Hey, I'm Kendrick Lamar from Compton, California. Influenced by legends like Tupac, 
              I started my music journey as K.Dot, dropping my first mixtape in 2003. My albums good kid, 
              m.A.A.d city (2012), To Pimp a Butterfly (2015), and DAMN. (2017) have made an impact, 
              with DAMN. earning me a Pulitzer Prize. As part of Black Hippy with Jay Rock, ScHoolboy Q, and Ab-Soul, 
              I push the boundaries of hip-hop. My music tells stories and tackles social issues. Thanks for being part of this journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile