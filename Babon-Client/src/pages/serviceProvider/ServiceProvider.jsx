import React from 'react'
import "./ServiceProvider.scss"
import { services } from '../../data'
import ServiceCard from '../../components/serviceCard/ServiceCard'

const ServiceProvider = () => {
  return (
    <div className='serviceProvider'>
      <div className="container">
        <div className="header">
          <div className="seller">
            <img src="/img/dingle.png" alt="" />
            <div className="item">
              <h1>Raul Hernendez</h1>
              <div className="rating">
                <img src="/img/star.png" alt="" />
                <span>4.9</span>
                <span>(1.5k)</span>
                <hr />
                <span>Verified</span>
              </div>
              <div className="location">
                <img src="/img/pin 1.svg" alt="" />
                <span>Mexico</span>
              </div>
            </div>
          </div>
          <div className="seller-desc">
            <h1>About Me</h1>
            <p>
              Hey, I'm Raul Hernendez, a professional toilet cleaner. 
              I take pride in ensuring every restroom is spotless and 
              sanitary. For me, it's about providing a clean and 
              comfortable environment for everyone. I tackle tough stains 
              and grime daily, earning a reputation for reliability and 
              thoroughness. Thanks for getting to know me. Let's keep those 
              toilets sparkling clean!
            </p>
          </div>
        </div>
        <div className="seller-service">
          <h1>Service Provided</h1>
          <div className="cards">
            {services.map(service=>(
              <ServiceCard key={service.id} item={service}/>
            ))}
          </div>
        </div>
        <div className="seller-review">
          <h1>Reviews</h1>
          <div className="reviews">
              <div className="item">
                <div className="user">
                  <img src="/img/pink.png" alt="" className="user" />
                  <span>Pink Guy</span>
                </div>
                <div className="ratings">
                  <img src="/img/star.png" alt="" className="stars" />
                  <span>5</span>
                </div>
                <p>
                  Saya baru saja menggunakan layanan "Membersihkan Toilet Paling Bersih 1 Jagat" dan saya sangat terkesan dengan hasilnya! 
                  Tim yang datang sangat profesional dan ramah, mereka membawa semua peralatan dan produk pembersih yang diperlukan.
                  Toilet saya dibersihkan dengan sangat teliti, tidak ada satu pun sudut yang terlewat. 
                  Bahkan noda yang sulit dihilangkan sebelumnya kini lenyap tanpa jejak.
                </p>
                <hr />
              </div>
              <div className="item">
                <div className="user">
                  <img src="/img/skibidi.png" alt="" className="user" />
                  <span>Skibidi Toilet</span>
                </div>
                <div className="ratings">
                  <img src="/img/star.png" alt="" className="stars" />
                  <span>5</span>
                </div>
                <p>
                  Saya baru saja menggunakan layanan "Membersihkan Toilet Paling Bersih 1 Jagat" dan saya sangat terkesan dengan hasilnya! 
                  Tim yang datang sangat profesional dan ramah, mereka membawa semua peralatan dan produk pembersih yang diperlukan.
                  Toilet saya dibersihkan dengan sangat teliti, tidak ada satu pun sudut yang terlewat. 
                  Bahkan noda yang sulit dihilangkan sebelumnya kini lenyap tanpa jejak.
                </p>
                <hr />
              </div>
              <div className="item">
                <div className="user">
                  <img src="/img/silver.png" alt="" className="user" />
                  <span>Silver Surfer</span>
                </div>
                <div className="ratings">
                  <img src="/img/star.png" alt="" className="stars" />
                  <span>5</span>
                </div>
                <p>
                  Saya baru saja menggunakan layanan "Membersihkan Toilet Paling Bersih 1 Jagat" dan saya sangat terkesan dengan hasilnya! 
                  Tim yang datang sangat profesional dan ramah, mereka membawa semua peralatan dan produk pembersih yang diperlukan.
                  Toilet saya dibersihkan dengan sangat teliti, tidak ada satu pun sudut yang terlewat. 
                  Bahkan noda yang sulit dihilangkan sebelumnya kini lenyap tanpa jejak.
                </p>
                <hr />
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceProvider