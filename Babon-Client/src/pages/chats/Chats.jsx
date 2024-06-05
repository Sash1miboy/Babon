import React from 'react'
import "./Chats.scss"
import { Link } from 'react-router-dom'

const Chats = () => {

    const currentUser= {
        id:1,
        userName:"Kendrick Lamar",
        isSeller:true
    };

    const message = "Soon as i pull up and park the Benz we get this bitch shakin like Parkinson’s"
    const message2 = "Hey Kendrick, I hope you're doing great! I'm Tupac, and I have an exciting opportunity for you. I'm working on my upcoming album, and I want to feature you on one of my tracks."

  return (
    <div className='chats'>
        <div className="container">
        <div className="title">
          <h1>Messages</h1>
        </div>
        <table>
          <tr>
            <th>Buyer</th>
            <th>Last Message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
          <tr className='active'> 
            <td>
              Tupac Shakur
            </td>
            <td><Link to="/chat/123" className='link'>{message2.substring(0,80)}...</Link></td>
            <td>1 day ago</td>
            <td>
              <button>Mark as Read</button>
            </td>
          </tr>
          <tr className='active'>
            <td>
              Kanye West
            </td>
            <td><Link to="/chat/123" className='link'>{message.substring(0,80)}...</Link></td>
            <td>1 day ago</td>
            <td>
              <button>Mark as Read</button>
            </td>
          </tr>
          <tr>
            <td>
              Kanye West
            </td>
            <td><Link to="/chat/123" className='link'>{message.substring(0,80)}...</Link></td>
            <td>1 day ago</td>
          </tr>
          <tr>
            <td>
              Kanye West
            </td>
            <td><Link to="/chat/123" className='link'>{message.substring(0,80)}...</Link></td>
            <td>1 day ago</td>
          </tr>
          <tr>
            <td>
              Kanye West
            </td>
            <td><Link to="/chat/123" className='link'>{message.substring(0,80)}...</Link></td>
            <td>1 day ago</td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Chats