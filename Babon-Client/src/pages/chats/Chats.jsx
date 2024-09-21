import React from 'react'
import "./Chats.scss"
import { Link } from 'react-router-dom'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import newRequest from '../../utils/newRequest';
import moment from 'moment';

const Chats = () => {

  
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  
  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ['chats'],
    queryFn: () =>
      newRequest.get(
        `/chats`
      ).then((res) => {
        return res.data;
      })
  })

  const mutation = useMutation({
    mutationFn: (id) => {
      return newRequest.put(`/chats/${id}`);
    },
    onSuccess:()=>{
      queryClient.invalidateQueries(["chats"])
    }
  })

  const handleRead = (id)=>{
    mutation.mutate(id);
  }

  return (
    <div className='chats'>
      {isLoading ? (
        "loading"
        ) : error ? (
          "Something went wrong!"
          ) : (
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
              {data.map((c) => (
                <tr className={((currentUser.isSeller && !c.readBySeller) || (!currentUser.isSeller && !c.readByBuyer)) && ("active")} key={c.id}> 
                  <td>
                    {currentUser.isSeller ? c.buyerId : c.sellerId}
                  </td>
                  <td>
                    <Link to={`/chat/${c.id}`} className='link'>
                      {c?.lastMessage?.substring(0,80)}...
                    </Link>
                  </td>
                  <td>{moment(c.updatedAt).fromNow()}</td>
                  <td>
                    {((currentUser.isSeller && !c.readBySeller) || (!currentUser.isSeller && !c.readByBuyer)) && (<button onClick={()=>handleRead(c.id)}>Mark as Read</button>)}
                  </td>
                </tr>
              ))}
            </table>
          </div>
        )}
    </div>
  )
}

export default Chats