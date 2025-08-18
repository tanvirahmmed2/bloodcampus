import React from 'react'
import Register from "../users/Register"
import UsePageTitle from "../Component/UsePageTitle"
import Intro from '../pages/Intro'
import About from '../pages/About'
import Donors from '../pages/Donors'

const Home = () => {
  UsePageTitle("Home")
  return (
    <section>
      <Intro/>
      <Donors/>
      <About/>
      <Register/>
    </section>
  )
}

export default Home
