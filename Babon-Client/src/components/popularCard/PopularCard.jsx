import React from 'react'
import "./PopularCard.scss"
import { Link } from 'react-router-dom'

const PopularCard = ({item}) => {
  return (
    <Link to="/category?cat=design">
      <div className='popularCard'>
          <img src={item.img} alt="" />
          <span className='title'>{item.title}</span>
      </div>
    </Link>
  )
}

export default PopularCard