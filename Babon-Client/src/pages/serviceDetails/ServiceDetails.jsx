import React from 'react'
import "./ServiceDetails.scss"
import { Slider } from 'infinite-react-carousel'

const ServiceDetails = () => {
  return (
    <div className='serviceDetails'>
      <div className="container">
        <div className="left">
          <div className="header">
            <h1>Membersihkan toilet paling bersih 1 jagat</h1>
            <div className="seller">
              <img src="/img/dingle.png" alt="" className="profile" />
              <div className="seller-info">
                <span>Quandale Dingle</span>
                <div className="rating">
                  <img src="/img/star.png" alt="" className="star" />
                  <span>4.9</span>
                </div>
                <button className="contact-me">Contact Me</button>
              </div>
            </div>
          </div>
          <Slider className='img-slider' slidesToShow={1} arrowsScroll={1}> 
            <img src="/img/pexels-christa-grover-977018-1910472.jpg" alt="" />
            <img src="/img/pexels-karolina-grabowska-4239071.jpg" alt="" />
            <img src="/img/pexels-karolina-grabowska-4239086.jpg" alt="" />
          </Slider>
          <div className="desc">
            <h2>About This Service</h2>
            <p>
              Kami hadir untuk memberikan layanan pembersihan toilet yang tak tertandingi. 
              Dengan perhatian terhadap detail dan dedikasi untuk kebersihan maksimal, 
              kami menjamin toilet Anda akan bersinar dan bebas dari kuman. Layanan kami meliputi:
              1. Pembersihan Menyeluruh: Kami membersihkan semua bagian toilet, termasuk lantai, dinding, wastafel, kloset, dan area lainnya.
              2. Penggunaan Produk Ramah Lingkungan: Kami menggunakan produk pembersih yang efektif dan aman bagi lingkungan serta penghuni rumah.
              3. Peralatan Modern: Tim kami dilengkapi dengan peralatan pembersih terbaru untuk memastikan efisiensi dan hasil yang optimal.
              4. Tenaga Profesional: Tim pembersih kami terlatih dan berpengalaman, memastikan setiap sudut toilet Anda bersih sempurna.
              5. Pembersihan Mendalam: Kami tidak hanya membersihkan permukaan, tetapi juga melakukan pembersihan mendalam untuk menghilangkan noda membandel dan kotoran yang tersembunyi.
              6. Aromaterapi Segar: Setelah pembersihan, kami juga menyemprotkan aromaterapi yang menyegarkan, sehingga toilet Anda tidak hanya bersih tapi juga harum.
              7. Kebersihan Terjamin: Kami memberikan garansi kebersihan, jika Anda tidak puas dengan hasilnya, kami siap untuk kembali dan membersihkannya lagi tanpa biaya tambahan.
              Percayakan pembersihan toilet Anda kepada kami dan nikmati kebersihan yang tak tertandingi. 
              Hubungi kami sekarang untuk jadwal pembersihan dan rasakan sendiri perbedaannya!
            </p>
          </div>
          <div className="reviews">
            <h2>Reviews</h2>
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
        <div className="right">
          <div className="price">
            <h3>Bersihin Toilet</h3>
            <h3>Rp150.000</h3>
          </div>
          <p>Akan membersihkan toilet dari rumah customer sesuai keinginannya</p>
          <div className="details">
            <div className="item">
              <img src="/img/check2.png" alt="" />
              <span>Membersihkan Toilet</span>
            </div>
            <div className="item">
              <img src="/img/check2.png" alt="" />
              <span>Menghilangkan aroma tidak enak</span>
            </div>
            <div className="item">
              <img src="/img/check2.png" alt="" />
              <span>Pasti kinclong</span>
            </div>
            <div className="item">
              <img src="/img/check2.png" alt="" />
              <span>3 jam selesai</span>
            </div>
          </div>
          <button>Order</button>
        </div>
      </div>
    </div>
  )
}

export default ServiceDetails