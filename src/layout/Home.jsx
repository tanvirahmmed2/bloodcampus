import React from 'react'
import Register from "../users/Register"
import UsePageTitle from "../Component/UsePageTitle"
import Intro from '../pages/Intro'
import About from '../pages/About'

const Home = () => {
  UsePageTitle("Home")
  return (
    <section>
      <Intro/>
      <About/>
      <Register/>
    </section>
  )
}

export default Home
