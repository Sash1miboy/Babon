import React from 'react'
import "./Home.scss"
import Featured from '../../components/featured/Featured'
import Slide from '../../components/slide/Slide'
import Sponsor from '../../components/sponsor/Sponsor'

const Home = () => {
  return (
    <div className='home'>
      <Featured/>
      <Slide/>
      <Sponsor/>
      <div className="recommendation">
          <span className='text-rec'>Recommendation</span>
      </div>
    </div>
  )
}

export default Home