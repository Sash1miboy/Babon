import React, { useState } from 'react'
import "./Category.scss"
import {services} from "../../data"
import ServiceCard from "../../components/serviceCard/ServiceCard"

const Category = () => {

    const [open, setOpen] = useState(false)
    const [sort, setSort] = useState("sales")

    const reSort = (type) =>{
        setSort(type)
        setOpen(false)
    }

  return (
    <div className='category'>
        <div className="container">
            <h1>Music Production</h1>
            <p>Professional Sound for Every Genre</p>
            <div className="menu">
                <div className="left">
                    <span>Budget</span>
                    <input type="text" placeholder='Min'/>
                    <input type="text" placeholder='Max'/>
                    <button>Apply</button>
                </div>
                <div className="right">
                    <span className='sort-by'>Sort by:</span>
                    <span className='sort-type'>{sort === "sales" ? "Best Selling" : "Newest"}</span>
                    <img src="/img/down.svg" alt="" onClick={()=>setOpen(!open)}/>
                    {open && (
                        <div className="right-menu">
                            <span onClick={()=>reSort("createdAt")}>Newest</span>
                            <span onClick={()=>reSort("sales")}>Best Selling</span>
                        </div>
                    )}
                </div>
            </div>
            <hr />
            <div className="cards">
                {services.map(service=>(
                    <ServiceCard key={service.id} item={service}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Category