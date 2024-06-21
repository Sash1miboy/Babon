import React, { useEffect, useState } from 'react'
import "./Recommendation.scss"
import { services } from '../../data'
import ServiceCard from "../../components/serviceCard/ServiceCard"
import { useQuery } from '@tanstack/react-query'
import newRequest from '../../utils/newRequest'

const Recommendation = () => {

    const { isLoading, error, data } = useQuery({
      queryKey: ['recommendation'],
      queryFn: () =>
        newRequest.get(`/services`).then((res) => res.data),
    });
  
    console.log(data);

  return (
    <div className='recommendation'>
        <div className="container">
            <div className="recommendation">
                <span className='text-rec'>Recommendation</span>
            </div>
            <div className="cards">
                {isLoading ? "Loading" 
                : error ? "Something went wrong!" 
                : data.map((service)=>
                    <ServiceCard key={service._id} item={service}/>
                )}
            </div>
        </div>
    </div>
  )
}

export default Recommendation