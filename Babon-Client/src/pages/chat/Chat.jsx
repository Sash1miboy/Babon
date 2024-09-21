import React from 'react'
import "./Chat.scss"
import { useQuery, useQueryClient } from '@tanstack/react-query';

const chat = () => {
  const { id } = useParams();
  
  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ['chat'],
    queryFn: () =>
      newRequest.get(
        `/chat/${id}`
      ).then((res) => {
        return res.data;
      })
  })

  return (
    <div className='chat'>
      <div className="container">
        <div className="header">
          <img src="/img/tupac.png" alt="" />
          <span>Tupac Shakur</span>
        </div>
        {isLoading ? ("Loading!") : error ? ("Something went wrong!") : 
        (<div className="messages">
          <div className="item">
            <img src="/img/tupac.png" alt="" />
            <p>
              Hey Kendrick, I hope you're doing great! I'm Tupac, and I have an exciting opportunity for you. 
              I'm working on my upcoming album, and I want to feature you on one of my tracks. I've been really 
              impressed with your style and think you'd be a great addition. I’m looking for someone reliable 
              who can handle their verses efficiently. Ideally, I'd like to get this done today or tomorrow. 
              I’m not sure what the going rate is, so let’s chat and figure out something that works for both 
              of us. Thanks a lot, man!
            </p>
          </div>
        </div>)}
        <div className="type">
          <textarea name="" placeholder='Text a message' id=""></textarea>
          <button>Send</button>
        </div>
      </div>
    </div>
  )
}

export default chat