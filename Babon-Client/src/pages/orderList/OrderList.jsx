import React from 'react'
import "./OrderList.scss"
import { Link, useNavigate } from 'react-router-dom'
import newRequest from '../../utils/newRequest';
import { useQuery } from "@tanstack/react-query"

const OrderList = () => {

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const navigate = useNavigate();

  const { isLoading, error, data } = useQuery({
    queryKey: ['orders'],
    queryFn: () =>
      newRequest.get(
        `/orders`
      ).then((res) => {
        return res.data;
      })
  })

  const handleContact = async (order) => {
    const sellerId = order.sellerId;
    const buyerId = order.buyerId;
    const id = sellerId + buyerId;

    try {
      const res = await newRequest.get(`/chats/single/${id}`)
      navigate(`/message/${res.data.id}`);
    } catch (err) {
      if(err.response.status === 404){
        const res = await newRequest.post(`/chats/`, {to: currentUser.seller ? buyerId : sellerId});
        navigate(`/message/${res.data.id}`);  
      }
    }
  }

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
                <img src="/img/Chat-2.svg" alt="" className='message' onClick={()=>handleContact(order)}/>
              </td>
            </tr>  
          ))}
        </table>
      </div>)}
    </div>
  )
}

export default OrderList