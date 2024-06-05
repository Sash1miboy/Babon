import React from 'react'
import "./Cart.scss"
import { Link } from 'react-router-dom'

const Cart = () => {
  return (
    <div className='cart'>
      <div className="container">
        <div className="title">
          <h1>History</h1>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Rating</th>
            <th>Seller</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>
              <img src="/img/Cleaning.png" alt="" className='foto'/>
            </td>
            <td>
              Membersihkan toilet paling bersih 1 jagat
            </td>
            <td>
              Rp150.000
            </td>
            <td>
              4.9
            </td>
            <td>
              Quandale Dingle
            </td>
            <td>
              <Link to="/" className='link'>
                <button>Check Out</button>
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              <img src="/img/Cleaning.png" alt="" className='foto'/>
            </td>
            <td>
              Membersihkan toilet paling bersih 1 jagat
            </td>
            <td>
              Rp150.000
            </td>
            <td>
              4.9
            </td>
            <td>
              Quandale Dingle
            </td>
            <td>
              <Link to="/" className='link'>
                <button>Check Out</button>
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              <img src="/img/Cleaning.png" alt="" className='foto'/>
            </td>
            <td>
              Membersihkan toilet paling bersih 1 jagat
            </td>
            <td>
              Rp150.000
            </td>
            <td>
              4.9
            </td>
            <td>
              Quandale Dingle
            </td>
            <td>
              <Link to="/" className='link'>
                <button>Check Out</button>
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              <img src="/img/Cleaning.png" alt="" className='foto'/>
            </td>
            <td>
              Membersihkan toilet paling bersih 1 jagat
            </td>
            <td>
              Rp150.000
            </td>
            <td>
              4.9
            </td>
            <td>
              Quandale Dingle
            </td>
            <td>
              <Link to="/" className='link'>
                <button>Check Out</button>
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              <img src="/img/Cleaning.png" alt="" className='foto'/>
            </td>
            <td>
              Membersihkan toilet paling bersih 1 jagat
            </td>
            <td>
              Rp150.000
            </td>
            <td>
              4.9
            </td>
            <td>
              Quandale Dingle
            </td>
            <td>
              <Link to="/" className='link'>
                <button>Check Out</button>
              </Link>
            </td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Cart