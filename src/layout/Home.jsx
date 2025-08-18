import React from 'react'
import Register from "../users/Register"
import UsePageTitle from "../Component/UsePageTitle"
import Intro from '../pages/Intro'

const Home = () => {
  UsePageTitle("Home")
  return (
    <section>
      <Intro/>

      <Register/>
    </section>
  )
}

export default Home
