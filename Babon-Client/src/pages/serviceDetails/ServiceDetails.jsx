import React from 'react'
import "./ServiceDetails.scss"
import { Slider } from 'infinite-react-carousel'
import { Link, useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import newRequest from '../../utils/newRequest'
import Reviews from '../../components/reviews/Reviews'

const ServiceDetails = () => {

  const {id} = useParams();

  const { isLoading, error, data } = useQuery({
    queryKey: ['serviceDetails'],
    queryFn: () =>
      newRequest.get(`/services/single/${id}`).then((res) => {
        return res.data;
      })
  })

  const userId = data?.userId

  const { isLoading: isLoadingUser, error: errorUser, data: dataUser } = useQuery({
    queryKey: ['user'],
    queryFn: () =>
      newRequest.get(`/users/${data.userId}`).then((res) => {
        return res.data;
      }),
      enabled: !!userId,
  })

  return (
    <div className='serviceDetails'>
      {isLoading ? "Loading!" : error ? "Somethings went wrong!" : <div className="container">
        <div className="left">
          <div className="header">
            <h1>{data.title}</h1>
            {isLoadingUser ? ("Loading!") : errorUser ? ("Somethings went wrong!") : (<div className="seller">
              <Link className='link' to="/serviceProvider">
                <img src={dataUser.img || "/img/Profile 2.svg"} alt="" className="seller-pp" />
              </Link>
              <div className="seller-info">
                <Link className='link' to="/serviceProvider"> 
                  <span>{dataUser.username}</span>
                </Link>
                {!isNaN(data.totalStars / data.starNumber) && (
                  <div className="rating">
                    <img src="/img/star.png" alt="" className="star" />
                    <span>{Math.round(data.totalStars / data.starNumber)}</span>
                  </div>
                )}
                <button className="contact-me">Contact Me</button>
              </div>
            </div>)}
          </div>
          <Slider className='img-slider' slidesToShow={1} arrowsScroll={1}>
            {data.images.map((img)=>(
              <img key={img} src={img} alt="" />
            ))}
          </Slider>
          <div className="desc">
            <h2>About This Service</h2>
            <p>
              {data.desc}
            </p>
          </div>
          <Reviews serviceId={id}/>
        </div>
        <div className="right">
          <div className="price">
            <h3>{data.shortTitle}</h3>
            <h3>Rp{data.price}</h3>
          </div>
          <p>{data.shortDesc}</p>
          <div className="details">
            {data.features.map((feature)=>(
              <div className="item" key={feature}>
                <img src="/img/check2.png" alt="" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
          <Link to="/order" className='link'>
            <button>Order</button>
          </Link>
        </div>
      </div>}
    </div>
  )
}

export default ServiceDetails