import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from "../Component/ThemeProvider"


const Intro = () => {
  const { donors } = useContext(ThemeContext)
  
  const availableDonor= donors.filter((e)=> e.isAvailable).length || 0

  return (
    <section className='w-full my-12 h-auto p-2 flex flex-col items-center justify-center'>
      <div className='w-4/5 my-12 p-4 rounded-lg bg-white/5 flex gap-4 flex-col lg:flex-row items-center justify-center'>
        <div className=' w-full rounded-lg flex flex-col gap-4 items-start'>


          <p className=' px-4 rounded-lg bg-white/20 w-60'>Community powered • 24/7</p>
          <p className='text-7xl font-semibold'>Find a donor faster. Become a lifesaver today</p>
          <p>Search by blood type and location. If you’re able to donate, add your details to help someone nearby. This is a safe demo — try the flow without sharing real data.</p>
          <div className='w-full flex flex-row gap-4 items-center'>
            <Link to="/donors" className='p-2 bg-white text-red-500 px-4 rounded-lg '>Find donors</Link>
            <Link to="/register" className='p-2 bg-red-500 px-4 rounded-lg '>Be a donor</Link>
          </div>

        </div>

        <div className=' w-full bg-white/20 rounded-lg flex flex-col items-start p-4 '>
          <div>
            <h1 className='text-xl font-bold'>Urgent needs nearby</h1>
            <p>Filter by type and city</p>
          </div>
          <div className='w-full flex flex-row items-center justify-center gap-4 p-4'>
            <div className='w-full h-28 p-2 flex bg-red-400 rounded-lg flex-col items-center justify-center gap-2'>
              <h1>Available Donors</h1>
              <p className='text-3xl font-bold'>{availableDonor}</p>
              
            </div>
            <div className='w-full h-28 p-2 flex bg-red-400 rounded-lg flex-col items-center justify-center gap-2'>
              <h1>Total Donor</h1>
              <p className='text-3xl font-bold'>{donors !== null ? <span>{donors.length}</span>: <span>0</span>}</p>
              
            </div>
            <div className='w-full h-28 p-2 flex bg-red-400 rounded-lg flex-col items-center justify-center gap-2'>
              <h1>Blood group</h1>
              <p className='text-3xl font-bold'>8</p>
              
            </div>

          </div>
        </div>

      </div>

    </section>
  )
}

export default Intro
