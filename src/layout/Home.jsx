import React from 'react'
import { Link } from 'react-router-dom'
import UsePageTitle from "../Component/UsePageTitle"
import Intro from '../pages/Intro'
import About from '../pages/About'

const Home = () => {
  UsePageTitle("Home")
  return (
    <section className='w-full flex flex-col items-center justify-center'>
      <Intro/>
      <Link to='/donors' className='px-4 p-1 bg-green-600 rounded-xl'>Find Donors</Link>
      <About/>
    </section>
  )
}

export default Home
