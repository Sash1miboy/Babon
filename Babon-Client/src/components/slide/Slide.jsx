import React from 'react'
import "./Slide.scss"
import Slider from 'infinite-react-carousel';
import PopularCard from '../popularCard/PopularCard';
import {cards} from "../../data"

const Slide = () => {
  return (
    <div className='slide'>
        <div className="container">
          <span className='popular-category'>Popular Category</span>
          <Slider className="category-slide" slidesToShow={5} wheel={true} arrows={false}> 
              {cards.map(card=>(
                  <PopularCard item={card} key={card.id}/>
              ))}
          </Slider>
        </div>
    </div>
  )
}

export default Slide