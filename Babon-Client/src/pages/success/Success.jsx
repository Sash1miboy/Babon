import React, { useEffect } from 'react'
import "./Success.scss"
import { Link, useLocation, useNavigate } from 'react-router-dom'
import newRequest from '../../utils/newRequest';

const Success = () => {

  const {search} = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(search);
  const payment_intent = params.get("payment_intent");

  useEffect(()=>{
    const makeRequest = async () => {
      try {
        await newRequest.put("/orders", {payment_intent});
        setTimeout(()=>{
          navigate("/orderList");
        }, 5000);
      } catch (err) {
        console.log(err)
      }
    };

    makeRequest();
  }, [])

  return (
    <div className='success'>
        <div className="container">
            <img src="/img/success.svg" alt="" />
            <h1>Transaction Complete</h1>
        </div>
    </div>
  )
}

export default Success