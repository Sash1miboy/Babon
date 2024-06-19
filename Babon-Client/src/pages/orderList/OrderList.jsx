import React from 'react'
import "./OrderList.scss"
import { Link } from 'react-router-dom'
import newRequest from '../../utils/newRequest';
import { useQuery } from "@tanstack/react-query"

const OrderList = () => {

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const { isLoading, error, data } = useQuery({
    queryKey: ['orders'],
    queryFn: () =>
      newRequest.get(
        `/orders`
      ).then((res) => {
        return res.data;
      })
  })

  return (
    <div className='orderList'>
      {isLoading ? ("Loading!") : error ? ("Something went wrong!") : 
      (<div className="container">
        <div className="title">
          <h1>Services</h1>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Contact</th>
          </tr>
          {data.map((order)=>(
            <tr key={order._id}>
              <td>
                <img src={order.img} alt="" className='foto'/>
              </td>
              <td>
                {order.title}
              </td>
              <td>
                Rp{order.price}
              </td>
              <td>
                <img src="/img/Chat-2.svg" alt="" className='message'/>
              </td>
            </tr>  
          ))}
        </table>
      </div>)}
    </div>
  )
}

export default OrderList