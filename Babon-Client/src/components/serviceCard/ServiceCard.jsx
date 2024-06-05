import React from 'react'
import "./ServiceCard.scss"
import { Link } from 'react-router-dom'

const ServiceCard = ({item}) => {
  return (
    <Link to="/serviceDetails/123">
        <div className="serviceCard">
            <div className="container">
                <img src={item.img} alt="" />
                <div className="info">
                    <span className='title'>{item.title}</span>
                    <span className='price'>Rp{item.price}</span>
                </div>
                <div className="rating">
                    <div className="star">
                        <img src="/img/star.png" alt="" />
                        <span className='star-point'>{item.star}</span>
                    </div>
                    <hr />
                    <span className='sold'>{item.sold}+ Sold</span>
                </div>
            </div>
        </div>
    </Link>
  )
}

export default ServiceCard