import React from 'react'
import {Link, useNavigate} from "react-router-dom"

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await fetch('https://bloodcampus-server.vercel.app/api/user/logout', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('auth-token') // optional, if backend needs it
        }
      });

      // Clear token from localStorage
      localStorage.removeItem('auth-token');

      // Redirect to login page
      navigate('/login');
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <section className='w-full h-auto p-2'>
      <nav className='w-full h-14 bg-white/20 flex rounded-lg flex-row items-center justify-around'>
        <a href="/" className='font-bold text-lg lg:text-3xl'>Blood Campus</a>
        <div className='w-auto h-14 flex flex-row items-center justify-center lg:gap-4'>
          <Link className='h-14 px-2 lg:px-8 flex items-center justify-center font-semibold hover:border-b-2' to="/donors">Donors</Link>
          <Link className='h-14 px-2 lg:px-8 flex items-center justify-center font-semibold hover:border-b-2' to="/about">About</Link>
          {localStorage.getItem('auth-token')? <p className='h-10 px-2 lg:px-8 flex items-center justify-center  bg-green-500 rounded-lg font-bold cursor-pointer' onClick={handleLogout} >Logout</p>
          : <Link className='h-10 px-2 lg:px-8 flex items-center justify-center  bg-green-500 rounded-lg font-bold' to="/login">LogIn</Link>
          }
        </div>
      </nav>
    </section>
  )
}

export default Navbar
