import React from 'react'
import {Link} from "react-router-dom"
import { useContext } from 'react';
import { ThemeContext } from '../Component/ThemeProvider';

const Navbar = () => {
  const { isLogin}= useContext(ThemeContext)



  return (
    <section className='w-full h-auto p-1'>
      <nav className='w-full h-14 bg-white/20 flex rounded-lg flex-row items-center justify-around'>
        <a href="/" className='font-bold text-lg lg:text-3xl'>Blood Campus</a>
        <div className='w-auto h-14 flex flex-row items-center justify-center '>
          <Link className='h-14 px-2 lg:px-8 flex items-center justify-center font-semibold hover:border-b-2' to="/finddonor">Find Donor</Link>
          <Link className='h-14 px-2 lg:px-8 flex items-center justify-center font-semibold hover:border-b-2' to="/donors">Donors</Link>
          <Link className='h-14 px-2 lg:px-8 flex items-center justify-center font-semibold hover:border-b-2' to="/about">About</Link>
          <Link className='h-14 px-2 lg:px-8 flex items-center justify-center font-semibold hover:border-b-2' to="/contact">Contact</Link>
          {isLogin? <Link className='h-10 px-2 lg:px-8 flex items-center justify-center  bg-green-600 rounded-lg font-bold' to="/profile">Profile</Link>
          : <Link className='h-10 px-2 lg:px-8 flex items-center justify-center  bg-green-600 rounded-lg font-bold' to="/login">Login</Link>
          }
        </div>
      </nav>
    </section>
  )
}

export default Navbar
