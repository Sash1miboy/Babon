import React from 'react'
import "./ServiceList.scss"
import { Link } from 'react-router-dom'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import newRequest from '../../utils/newRequest.js'
import getCurrentUser from '../../utils/getCurrentUser.js'

const ServiceList = () => {

  const currentUser = getCurrentUser();

  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ['servicesList'],
    queryFn: () =>
      newRequest.get(`/services?userId=${currentUser}`).then((res) => {
        return res.data;
      })
  });

  const mutation = useMutation({
    mutationFn: (id) => {
      return newRequest.delete(`/services/${id}`)
    },
    onSuccess:()=>{
      queryClient.invalidateQueries(["serviceList"])
    }
  })

  const handleDelete = (id) => {
    mutation.mutate(id);
  };

  return (
    <div className='serviceList'>
      {isLoading ? ("Loading!") 
      : error ? ("Something went wrong!") 
      : (<div className="container">
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
          {data.map((service)=>{
            <tr key={service._id}>
            <td>
              <img src="/img/lyric.png" alt="" className='foto'/>
            </td>
            <td>
              {service.title}
            </td>
            <td>
              Rp{service.price}
            </td>
            <td>
              {service.totalStar}
            </td>
            <td>
              <img src="/img/Delete.svg" alt="" className='delete' onClick={()=> handleDelete(service._id)}/>
            </td>
          </tr>})}
        </table>
      </div>)}
    </div>
  )
}

export default ServiceList