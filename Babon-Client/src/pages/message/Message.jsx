import React from 'react'
import "./Message.scss"
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import newRequest from '../../utils/newRequest.js';

const chat = () => {
  const { id } = useParams();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  
  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ['messages'],
    queryFn: () =>
      newRequest.get(
        `/messages/${id}`
      ).then((res) => {
        return res.data;
      })
  });

  const mutation = useMutation({
    mutationFn: (message) => {
      return newRequest.post(`/messages`, message);
    },
    onSuccess:()=>{
      queryClient.invalidateQueries(["messages"])
    }
  })

  const handleSubmit = (e)=>{
    e.preventDefault();
    mutation.mutate({
      messageId: id,
      desc: e.target[0].value,
    });
    e.target[0].value = "";
  }

  return (
    <div className='message'>
      <div className="container">
        <div className="header">
          <img src="/img/tupac.png" alt="" />
          <span>Tupac Shakur</span>
        </div>
        {isLoading ? ("Loading!") : error ? ("Something went wrong!") : 
        (<div className="messages">
          {data.map((m) => (
            <div className={m.userId === currentUser._id ? "owner item" : "item" } key={m._id}>
              <img src="/img/tupac.png" alt="" />
              <p>
              {m.desc}
              </p>
            </div>
          ))}
        </div>
      )}
        <form className="type" onSubmit={handleSubmit}>
          <textarea type="text" name="" placeholder='Text a message' id=""></textarea>
          <button type='submit'>Send</button>
        </form>
      </div>
    </div>
  )
}

export default chat