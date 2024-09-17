import React from 'react'
import "./Chats.scss"
import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query';
import newRequest from '../../utils/newRequest';

const Chats = () => {

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    const { isLoading, error, data, refetch } = useQuery({
      queryKey: ['chats'],
      queryFn: () =>
        newRequest.get(
          `/chats`
        ).then((res) => {
          return res.data;
        })
    })

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