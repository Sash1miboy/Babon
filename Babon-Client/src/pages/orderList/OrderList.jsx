import React from 'react'
import "./OrderList.scss"
import { Link } from 'react-router-dom'

const OrderList = () => {

    const currentUser= {
        id:1,
        userName:"Endra Djati",
        isSeller:true
    };

  return (
    <div className='orderList'>
        <div className="container">
        <div className="title">
          <h1>Services</h1>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>{currentUser?.isSeller ? "Buyer" : "Seller"}</th>
            <th>Contact</th>
          </tr>
          <tr>
            <td>
              <img src="/img/lyric.png" alt="" className='foto'/>
            </td>
            <td>
              Jasa feature rap/hip-hop untuk semua genre lagu
            </td>
            <td>
              Rp9.000.000
            </td>
            <td>
              Metro Boomin
            </td>
            <td>
              <img src="/img/Chat-2.svg" alt="" className='message'/>
            </td>
          </tr>
          <tr>
            <td>
              <img src="/img/lyric.png" alt="" className='foto'/>
            </td>
            <td>
              Jasa feature rap/hip-hop untuk semua genre lagu
            </td>
            <td>
              Rp9.000.000
            </td>
            <td>
              Playboi Carti
            </td>
            <td>
              <img src="/img/Chat-2.svg" alt="" className='message'/>
            </td>
          </tr>
          <tr>
            <td>
              <img src="/img/lyric.png" alt="" className='foto'/>
            </td>
            <td>
              Jasa feature rap/hip-hop untuk semua genre lagu
            </td>
            <td>
              Rp9.000.000
            </td>
            <td>
              A$AP Rocky
            </td>
            <td>
              <img src="/img/Chat-2.svg" alt="" className='message'/>
            </td>
          </tr>
          <tr>
            <td>
              <img src="/img/lyric.png" alt="" className='foto'/>
            </td>
            <td>
              Jasa feature rap/hip-hop untuk semua genre lagu
            </td>
            <td>
              Rp9.000.000
            </td>
            <td>
              Rihanna
            </td>
            <td>
              <img src="/img/Chat-2.svg" alt="" className='message'/>
            </td>
          </tr>
          <tr>
            <td>
              <img src="/img/lyric.png" alt="" className='foto'/>
            </td>
            <td>
              Jasa feature rap/hip-hop untuk semua genre lagu
            </td>
            <td>
              Rp9.000.000
            </td>
            <td>
              Tupac Shakur
            </td>
            <td>
              <img src="/img/Chat-2.svg" alt="" className='message'/>
            </td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default OrderList