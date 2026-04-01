'use client'
import React from 'react'
import { useContext } from 'react';
import { CgProfile } from "react-icons/cg";
import Link from 'next/link';
import { Context } from '../helper/Context';

const Navbar = () => {
  const { userData}= useContext(Context)



  return (
    <section className='w-full h-auto p-1'>
      <nav className='w-full h-14 bg-white flex rounded-lg flex-row items-center justify-around'>
        <Link href="/" className='font-bold text-lg lg:text-3xl'>Blood Campus</Link>
        <div className='w-auto h-14 flex flex-row items-center justify-center '>
          <Link className='h-14 px-2 lg:px-8 flex items-center justify-center font-semibold hover:border-b-2' href="/donors">Donors</Link>
          <Link className='h-14 px-2 lg:px-8 flex items-center justify-center font-semibold hover:border-b-2' href="/about">About</Link>
          <Link className='h-14 px-2 lg:px-8 hidden md:flex items-center justify-center font-semibold hover:border-b-2' href="/contact">Contact</Link>
          {userData? <Link className='h-10 px-2 lg:px-8 flex items-center justify-center text-2xl font-bold' href="/profile"><CgProfile/></Link>
          : <Link className='h-8 px-2 lg:px-8 flex items-center justify-center text-white font-bold bg-green-400 rounded-2xl' href="/login">Login</Link>
          }
        </div>
      </nav>
    </section>
  )
}

export default Navbar
