import React from 'react'
import "./ServiceCard.scss"
import { Link } from 'react-router-dom'

const ServiceCard = ({item}) => {
  return (
    <Link to={`/serviceDetails/${item._id}`} className='link'>
        <div className='serviceCard'>
            <img src={item.coverImage} alt="" className='service-img'/>
            <div className="info">
                <span className='title'>{item.title}</span>
                <span className='price'>Rp{item.price}</span>
            </div>
            <div className="rating">
                <img src="/img/star.png" alt="" className='star'/>
                <span className='point'>{!isNaN(item.totalStars / item.starNumber) && Math.round(item.totalStars / item.starNumber)}</span>
                <hr />
                <span className='sold'>{item.sold}+</span>
            </div>
        </div>
    </Link>
  )
}

export default ServiceCard