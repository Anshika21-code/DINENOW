import React from 'react'
import HeroSection from '../components/HeroSection'
import About from '../components/About'
import Qualities from '../components/Qualities'
import Menu from '../Pages/Menu'
import WhoAreWe from '../components/WhoAreWe'
import Team from '../components/Team'
import Reservation from '../components/Reservation'



const Home = () => {
  return (
    <>
      <HeroSection/>
      <About/>
      <Qualities/>
      <WhoAreWe/>
      <Team/>
      <Reservation/>
    </>
  )
}

export default Home