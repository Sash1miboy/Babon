import React from 'react'
import "./Recommendation.scss"
import { services } from '../../data'
import ServiceCard from "../../components/serviceCard/ServiceCard"

const Recommendation = () => {
  return (
    <div className='recommendation'>
        <div className="container">
            <div className="recommendation">
                <span className='text-rec'>Recommendation</span>
            </div>
            <div className="cards">
                {services.map(service=>(
                    <ServiceCard key={service.id} item={service}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Recommendation