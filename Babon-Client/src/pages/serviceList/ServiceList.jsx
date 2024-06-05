import React from 'react'
import "./ServiceList.scss"
import { Link } from 'react-router-dom'

const ServiceList = () => {
  return (
    <div className='serviceList'>
      <div className="container">
        <div className="title">
          <h1>Services</h1>
          <Link to="/add" className='link'>
            <button>Add New Service</button>
          </Link>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Rating</th>
            <th>Action</th>
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
              4.8
            </td>
            <td>
              <img src="/img/Delete.svg" alt="" className='delete'/>
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
              4.8
            </td>
            <td>
              <img src="/img/Delete.svg" alt="" className='delete'/>
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
              4.8
            </td>
            <td>
              <img src="/img/Delete.svg" alt="" className='delete'/>
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
              4.8
            </td>
            <td>
              <img src="/img/Delete.svg" alt="" className='delete'/>
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
              4.8
            </td>
            <td>
              <img src="/img/Delete.svg" alt="" className='delete'/>
            </td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default ServiceList