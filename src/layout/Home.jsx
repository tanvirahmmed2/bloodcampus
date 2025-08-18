import React from 'react'
import UsePageTitle from "../Component/UsePageTitle"
import Login from '../users/Login'

const Home = () => {
  UsePageTitle("Home")
  return (
    <section>

      <Login/>
    </section>
  )
}

export default Home
