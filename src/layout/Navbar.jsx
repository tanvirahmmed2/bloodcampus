import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <section className='w-full h-auto p-2'>
      <nav className='w-full h-14 bg-white/20 flex rounded-lg flex-row items-center justify-around'>
        <a href="/" className='font-bold text-lg lg:text-3xl'>Blood Campus</a>
        <div className='w-auto h-14 flex flex-row items-center justify-center '>
          <Link className='h-14 px-2 flex items-center justify-center font-semibold hover:border-b-2' to="/donors">Donors</Link>
          <Link className='h-14 px-2 flex items-center justify-center font-semibold hover:border-b-2' to="/about">About</Link>
          <Link className='h-10 px-2 flex items-center justify-center  bg-green-500 rounded-lg font-bold' to="/login">LogIn</Link>
        </div>
      </nav>
    </section>
  )
}

export default Navbar
