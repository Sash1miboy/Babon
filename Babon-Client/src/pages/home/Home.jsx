import React from 'react'
import "./Home.scss"
import Featured from '../../components/featured/Featured'
import Slide from '../../components/slide/Slide'
import Sponsor from '../../components/sponsor/Sponsor'
import Recommendation from '../../components/recommendation/Recommendation'

const Home = () => {
  return (
    <div className='home'>
      <Featured/>
      <Slide/>
      <Sponsor/>
      <Recommendation/>
    </div>
  )
}

export default Home