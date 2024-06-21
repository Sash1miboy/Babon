import React, { useEffect, useRef, useState } from 'react'
import "./Services.scss"
// import { services } from "../../data"
import ServiceCard from "../../components/serviceCard/ServiceCard"
import { useQuery } from "@tanstack/react-query"
import newRequest from '../../utils/newRequest'
import { useLocation } from 'react-router-dom'

function Services(){

    const [open, setOpen] = useState(false);
    const [sort, setSort] = useState("sales");
    const minRef = useRef();
    const maxRef = useRef();

    const {search} = useLocation();

    const { isLoading, error, data, refetch } = useQuery({
      queryKey: ['services'],
      queryFn: () =>
        newRequest.get(
          `/services${search}&min=${minRef.current.value}&max=${maxRef.current.value}&sort=${sort}`
        ).then((res) => {
          return res.data;
        })
    })

    console.log(data)

    const reSort = (type) =>{
        setSort(type)
        setOpen(false)
    };

    useEffect(()=>{
      refetch();
    }, [sort]);
    const apply = ()=>{
      refetch();
    };

  return (
    <div className='services'>
        <div className="container">
            <h1>Others</h1>
            <p>Professional Service For Sure!</p>
            <div className="menu">
                <div className="left">
                    <span>Budget</span>
                    <input ref={minRef} type="number" placeholder='Min'/>
                    <input ref={maxRef} type="number" placeholder='Max'/>
                    <button onClick={apply}>Apply</button>
                </div>
                <div className="right">
                    <span className='sort-by'>Sort by:</span>
                    <span className='sort-type'>{sort === "sales" ? "Best Selling" : "Newest"}</span>
                    <img src="/img/down.svg" alt="" onClick={()=>setOpen(!open)}/>
                    {open && (
                      <div className="right-menu">
                          {sort === "sales" ? (
                            <span onClick={()=>reSort("createdAt")}>Newest</span>
                          ) : (
                            <span onClick={()=>reSort("sales")}>Best Selling</span>
                          )}
                          <span onClick={() => reSort("sales")}>Popular</span>
                      </div>
                    )}
                </div>
            </div>
            <hr />
            <div className="cards">
                {isLoading 
                ? "loading" 
                : error 
                ? "Something went wrong!" 
                : data.map ((service) => <ServiceCard key={service._id} item={service} />)}
            </div>
        </div>
    </div>
  )
}

export default Services