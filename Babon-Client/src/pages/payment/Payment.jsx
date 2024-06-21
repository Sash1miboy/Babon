import React, { useEffect, useState } from 'react'
import "./Payment.scss"
import { Link, useParams } from 'react-router-dom'
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import newRequest from '../../utils/newRequest';
import CheckOutForm from '../../components/checkoutForm/CheckoutForm';

const stripePromise = loadStripe("pk_test_51PQIzKCYxfWKUawXXvwtsj0LuhHo7jMHzcfvfYcsGWB5tZE8RfttcVUxqD7YqEx4Pg2x8sKzjFl3v5mq0THcAc0100SY1p4jwL");


const Payment = () => {

  const [clientSecret, setClientSecret] = useState("");

  const {id} = useParams();

  useEffect(()=>{
    const makeRequest = async () => {
      try {
        const res = await newRequest.post(`/orders/create-payment-intent/${id}`);
        setClientSecret(res.data.clientSecret);
      } catch (err) {
        console.log(err)
      }
    };
    makeRequest();
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className='payment'>
      <div className="container">
        <div className="address">
          <h1>Delivery Address</h1>
          <div className="buyer-info">
            <div className="left">
              <span>Nicholas Krisna</span>
              <span>(+62) 888-8888-8888</span>
            </div>
            <div className="right">
              <span>1530 Collins Avenue, Miami Beach, FL 33139</span>
              <span>United States of America</span>
            </div>
            <button>Change</button>
          </div>
        </div>
        <div className="order">
          <h1>Order Details</h1>
          <div className="order-content">
            <div className="seller">
              <img src="/img/dingle.png" alt="" />
              <div className="seller-info">
                <span>Quandale Dingle</span>
                <div className="rating">
                  <img src="/img/star.png" alt="" />
                  <span>4.9</span>
                </div>
              </div>
            </div>
            <div className="order-detail">
              <div className="top">
                <img src="/img/Cleaning.png" alt="" />
                <div className="details">
                  <h1>Membersihkan toilet paling bersih 1 jagat</h1>
                  <span><span className='bold'>Service Name: </span>Bersihin Toilet</span>
                  <span><span className='bold'>From: </span>11/11/2024</span>
                  <span><span className='bold'>To: </span>12/11/2024</span>
                  <span><span className='bold'>Additional Information: </span>Bersihin 2 toilet di apartment</span>
                  <h3>Price: Rp150.000</h3>
                </div>
              </div>
              <hr />
              <div className="middle">
                <div className="left">
                  <span>Tax (10%)</span>
                  <span>Babon Charge</span>
                </div>
                <div className="right">
                  <span>Rp15.000</span>
                  <span>Rp15.000</span>
                </div>
              </div>
              <hr />
              <div className="bottom">
                <h3>Grand Total: </h3>
                <h3>Rp180.0000</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="pay">
          <h1>Payment</h1>
          <div className="pay-form">
            <div className="method">
              <span>Payment Method</span>
              {/* <div className="method-button">
                <button>Bank Transfer</button>
                <button>GoPay</button>
                <button>Credit Card</button>
                <button>Debit Card</button>
              </div> */}
            </div>
            <hr />
            <div className="pay-options">
              {clientSecret && (
                <Elements options={options} stripe={stripePromise}>
                  <CheckOutForm />
                </Elements>
              )}
              {/* <span>Select Bank</span>
              <div className="bank-list">
                <div className="bca">
                  <input type="radio" name="bank" id="bca" />
                  <img src="/img/bca.svg" alt="" />
                </div>
                <div className="bri">
                  <input type="radio" name="bank" id="bri" />
                  <img src="/img/bri.svg" alt="" />
                </div>
                <div className="bni">
                  <input type="radio" name="bank" id="bni" />
                  <img src="/img/bni.svg" alt="" />
                </div>
                <div className="mandiri">
                  <input type="radio" name="bank" id="mandiri" />
                  <img src="/img/mandiri.svg" alt="" />
                </div>
                <div className="ocbc">
                  <input type="radio" name="bank" id="ocbc" />
                  <img src="/img/ocbc.svg" alt="" />
                </div>
              </div> */}
            </div>
          </div>
        </div>
        {/* <Link className='link' to="/success">
          <button type="submit" className='confirm'>Confirm</button>
        </Link> */}
      </div>
    </div>
  )
}

export default Payment