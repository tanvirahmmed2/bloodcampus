import React from 'react'
import axios from 'axios';
import {Link} from "react-router-dom"
import { useContext } from 'react';
import { ThemeContext } from '../Component/ThemeProvider';

const Navbar = () => {
  const {api, isLogin, setIsLogin}= useContext(ThemeContext)

  const handleLogout = async () => {
    try {
      const response= await axios.post(`${api}/user/logout`, {}, {withCredentials: true})
      if(response.data.sucess){
        setIsLogin(true)
      }else{
        setIsLogin(true)
      }
      window.location.replace('/login')
      alert(response.data.message)
    } catch (error) {
      alert(error?.response?.data?.message || 'Failed to logout')
      console.log(error)
    }
  };

  return (
    <section className='w-full h-auto p-2'>
      <nav className='w-full h-14 bg-white/20 flex rounded-lg flex-row items-center justify-around'>
        <a href="/" className='font-bold text-lg lg:text-3xl'>Blood Campus</a>
        <div className='w-auto h-14 flex flex-row items-center justify-center lg:gap-4'>
          <Link className='h-14 px-2 lg:px-8 flex items-center justify-center font-semibold hover:border-b-2' to="/donors">Donors</Link>
          <Link className='h-14 px-2 lg:px-8 flex items-center justify-center font-semibold hover:border-b-2' to="/about">About</Link>
          {isLogin? <p className='h-10 px-2 lg:px-8 flex items-center justify-center  bg-green-500 rounded-lg font-bold cursor-pointer' onClick={handleLogout} >Logout</p>
          : <Link className='h-10 px-2 lg:px-8 flex items-center justify-center  bg-green-500 rounded-lg font-bold' to="/login">LogIn</Link>
          }
        </div>
      </nav>
    </section>
  )
}

export default Navbar
