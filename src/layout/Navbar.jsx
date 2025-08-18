import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <section className='w-full h-auto px-4 bg-white/20 shadow-lg'>
      <nav className='w-full h-14 flex flex-row items-center justify-around'>
        <a href="/" className='font-bold text-3xl'>Blood Campus</a>
        <div>
          <Link className='h-14 px-4' to="/">Home</Link>
          <Link className='h-14 px-4' to="/donor">Donor</Link>
          <Link className='h-14 px-4' to="/help">Help</Link>
          <Link className='h-14 px-4' to="/login">LogIn</Link>
        </div>
      </nav>
    </section>
  )
}

export default Navbar
