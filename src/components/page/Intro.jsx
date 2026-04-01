'use client'
import Link from 'next/link'
import React from 'react'


const Intro = () => {
  

  return (
    <section className='w-full  h-screen p-2 flex flex-col items-center justify-center'>
      <div className='w-full my-12 p-4 rounded-lg bg-white/5 flex gap-4 flex-col lg:flex-row items-center justify-center'>
        <div className=' w-full rounded-lg flex flex-col gap-4 items-start'>


          <p className=' px-4 rounded-lg bg-white/20 w-60'>Community powered • 24/7</p>
          <p className='text-6xl font-semibold'>Find a donor faster — become a lifesaver</p>
          <p>Search by blood type and location. If you’re able to donate, add your details to help someone nearby. </p>
          <div className='w-full flex flex-row gap-4 items-center'>
            <Link href="/donors" className='p-2 bg-white text-red-500 px-4 rounded-lg '>Find donors</Link>
            <Link href="/register" className='p-2 bg-red-500 px-4 rounded-lg '>Be a donor</Link>
          </div>

        </div>

        <div className=' w-full bg-white/20 rounded-lg flex flex-col items-start p-4 '>
          <div>
            <h1 className='text-xl font-bold'>Urgent needs nearby</h1>
            <p>Filter by type and city</p>
          </div>
          
        </div>

      </div>

    </section>
  )
}

export default Intro
