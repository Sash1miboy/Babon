import React from 'react'
import "./Reviews.scss"
import Review from '../review/Review'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import newRequest from '../../utils/newRequest'

const Reviews = ({serviceId}) => {

  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ['reviews'],
    queryFn: () =>
      newRequest.get(`/reviews/${serviceId}`).then((res) => {
        return res.data;
      })
  });

  const mutation = useMutation({
    mutationFn: (review) => {
      return newRequest.post('/reviews', review)
    },
    onSuccess:()=>{
      queryClient.invalidateQueries(["reviews"])
    }
  })

  const handleSubmit = e=> {
    e.preventDefault();
    const desc = e.target[0].value;
    const star = e.target[1].value;
    mutation.mutate({serviceId, desc, star})
  }

  return (
    <div className="reviews">
      <h2>Reviews</h2>
      {isLoading ? "Loading!" : error ? "Something went wrong!" : data.map((review) => <Review key={review._id} review={review} />)}
      <div className="add">
        <h3>Add your review</h3>
        <form action="" onSubmit={handleSubmit} className='addForm'>
          <textarea name="" id="" cols="90" placeholder='write your review'></textarea>
          <div className="bottom">
            <select name="" id="">
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
            <button>Send</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Reviews