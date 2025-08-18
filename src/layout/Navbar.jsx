import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <section className='w-full h-auto p-2'>
      <nav className='w-full h-14 bg-white/20 flex rounded-lg flex-row items-center justify-around'>
        <a href="/" className='font-bold text-2xl'>Blood Campus</a>
        <div className='w-auto h-14 flex flex-row items-center justify-center gap-2'>
          <Link className='h-14 px-4 flex items-center justify-center font-semibold hover:border-b-2' to="/">Home</Link>
          <Link className='h-14 px-4 flex items-center justify-center font-semibold hover:border-b-2' to="/donor">Donor</Link>
          <Link className='h-14 px-4 flex items-center justify-center font-semibold hover:border-b-2' to="/help">Help</Link>
          <Link className='h-10 px-4 flex items-center justify-center  bg-green-500 rounded-lg font-bold' to="/login">LogIn</Link>
        </div>
      </nav>
    </section>
  )
}

export default Navbar
