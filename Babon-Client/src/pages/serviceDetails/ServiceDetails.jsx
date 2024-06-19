import React from 'react'
import "./ServiceDetails.scss"
import { Slider } from 'infinite-react-carousel'
import { Link, useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import newRequest from '../../utils/newRequest'

const ServiceDetails = () => {

  const {id} = useParams();

  const { isLoading, error, data } = useQuery({
    queryKey: ['serviceDetails'],
    queryFn: () =>
      newRequest.get(`/services/single/${id}`).then((res) => {
        return res.data;
      })
  })

  const { isLoading: isLoadingUser, error: errorUser, data: dataUser } = useQuery({
    queryKey: ['user'],
    queryFn: () =>
      newRequest.get(`/users/${data.userId}`).then((res) => {
        return res.data;
      })
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
          <div className="reviews">
            <h2>Reviews</h2>
            <div className="item">
              <div className="user">
                <img src="/img/pink.png" alt="" className="user" />
                <span>Pink Guy</span>
              </div>
              <div className="ratings">
                <img src="/img/star.png" alt="" className="stars" />
                <span>5</span>
              </div>
              <p>
                Saya baru saja menggunakan layanan "Membersihkan Toilet Paling Bersih 1 Jagat" dan saya sangat terkesan dengan hasilnya! 
                Tim yang datang sangat profesional dan ramah, mereka membawa semua peralatan dan produk pembersih yang diperlukan.
                Toilet saya dibersihkan dengan sangat teliti, tidak ada satu pun sudut yang terlewat. 
                Bahkan noda yang sulit dihilangkan sebelumnya kini lenyap tanpa jejak.
              </p>
              <hr />
            </div>
            <div className="item">
              <div className="user">
                <img src="/img/skibidi.png" alt="" className="user" />
                <span>Skibidi Toilet</span>
              </div>
              <div className="ratings">
                <img src="/img/star.png" alt="" className="stars" />
                <span>5</span>
              </div>
              <p>
                Saya baru saja menggunakan layanan "Membersihkan Toilet Paling Bersih 1 Jagat" dan saya sangat terkesan dengan hasilnya! 
                Tim yang datang sangat profesional dan ramah, mereka membawa semua peralatan dan produk pembersih yang diperlukan.
                Toilet saya dibersihkan dengan sangat teliti, tidak ada satu pun sudut yang terlewat. 
                Bahkan noda yang sulit dihilangkan sebelumnya kini lenyap tanpa jejak.
              </p>
              <hr />
            </div>
            <div className="item">
              <div className="user">
                <img src="/img/silver.png" alt="" className="user" />
                <span>Silver Surfer</span>
              </div>
              <div className="ratings">
                <img src="/img/star.png" alt="" className="stars" />
                <span>5</span>
              </div>
              <p>
                Saya baru saja menggunakan layanan "Membersihkan Toilet Paling Bersih 1 Jagat" dan saya sangat terkesan dengan hasilnya! 
                Tim yang datang sangat profesional dan ramah, mereka membawa semua peralatan dan produk pembersih yang diperlukan.
                Toilet saya dibersihkan dengan sangat teliti, tidak ada satu pun sudut yang terlewat. 
                Bahkan noda yang sulit dihilangkan sebelumnya kini lenyap tanpa jejak.
              </p>
              <hr />
            </div>
          </div>
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