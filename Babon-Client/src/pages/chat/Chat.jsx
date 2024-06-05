import React from 'react'
import "./Chat.scss"

const chat = () => {
  return (
    <div className='chat'>
      <div className="container">
        <div className="header">
          <img src="/img/tupac.png" alt="" />
          <span>Tupac Shakur</span>
        </div>
        <div className="messages">
          <div className="item">
            <img src="/img/tupac.png" alt="" />
            <p>
              Hey Kendrick, I hope you're doing great! I'm Tupac, and I have an exciting opportunity for you. 
              I'm working on my upcoming album, and I want to feature you on one of my tracks. I've been really 
              impressed with your style and think you'd be a great addition. I’m looking for someone reliable 
              who can handle their verses efficiently. Ideally, I'd like to get this done today or tomorrow. 
              I’m not sure what the going rate is, so let’s chat and figure out something that works for both 
              of us. Thanks a lot, man!
            </p>
          </div>
          <div className="item myself">
            <img src="/img/kdot.png" alt="" />
            <p>
              Hey Tupac! It's great to hear from you. I'm doing well, thanks for asking! I hope things are going 
              smoothly on your end too. Wow, I'm honored that you want to feature me on your album! I'm definitely 
              up for it. I can come by either today or tomorrow, whichever works better for you.
            </p>
          </div>
          <div className="item">
            <img src="/img/tupac.png" alt="" />
            <p>
              I understand that figuring out the rate can be a bit tricky. Why don't we discuss it when I get there? 
              We can take a look at the track and come up with something fair for both of us. I want to make sure you're 
              satisfied with both the collaboration and the price.
            </p>
          </div>
          <div className="item myself">
            <img src="/img/kdot.png" alt="" />
            <p>
              Just let me know your address and what time works best for you. I can be flexible with the timing, 
              so we can find something that fits your schedule. Looking forward to working together and making some great music!
            </p>
          </div>
          <div className="item">
            <img src="/img/tupac.png" alt="" />
            <p>
              Thanks, Kendrick. I appreciate your flexibility. Things have been busy but good on my end. 
              Today or tomorrow works for me, too. How about we aim for today around 4 PM? My address is 1234 Sunset Boulevard. 
              Does that time work for you?
            </p>
          </div>
          <div className="item myself">
            <img src="/img/kdot.png" alt="" />
            <p>
              That sounds perfect, Tupac. 4 PM today at 1234 Sunset Boulevard it is. 
              I'll bring my notepad and everything I need to write and record my verse. We can chat about the rate 
              and any specific ideas you have for the song when I get there. Looking forward to creating something amazing together. See you soon!
            </p>
          </div>
          <div className="item">
            <img src="/img/tupac.png" alt="" />
            <p>
              Awesome, Kendrick! I appreciate you bringing your gear. I don't have any specific preferences, 
              just want the collaboration to be fire. We can figure out the rest when you get here. See you at 4 PM then!
            </p>
          </div>
          <div className="item myself">
            <img src="/img/kdot.png" alt="" />
            <p>
              Got it, Tupac. I'll make sure to bring my A-game. If there's anything else you think of 
              before I get there, just give me a shout. See you at 4 PM!
            </p>
          </div>
        </div>
        <div className="type">
          <textarea name="" placeholder='Text a message' id=""></textarea>
          <button>Send</button>
        </div>
      </div>
    </div>
  )
}

export default chat