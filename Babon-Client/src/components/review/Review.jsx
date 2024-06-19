import React from 'react'
import "./Review.scss"
import { useQuery } from '@tanstack/react-query';
import newRequest from '../../utils/newRequest';

const Review = ({review}) => {

    const { isLoading, error, data } = useQuery({
        queryKey: [review.userId],
        queryFn: () =>
          newRequest.get(`/users/${review.userId}`).then((res) => {
            return res.data;
          })
      });

  return (
    <div className="review">
        {isLoading ? ("Loading!") 
        : error ? ("Something went wrong!") 
        : (<div className="user">
            <img src={data.img || "/img/Profile 2.svg"} alt="" className="user" />
            <span>{data.username}</span>
        </div>)}
        <div className="ratings">
            <img src="/img/star.png" alt="" className="stars" />
            <span>{review.star}</span>
        </div>
        <p>
            {review.desc}
        </p>
        <hr />
    </div>
  )
}

export default Review