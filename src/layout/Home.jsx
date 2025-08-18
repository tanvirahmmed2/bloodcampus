import React from 'react'
import Register from "../users/Register"
import UsePageTitle from "../Component/UsePageTitle"

const Home = () => {
  UsePageTitle("Home")
  return (
    <section>

      <Register/>
    </section>
  )
}

export default Home
