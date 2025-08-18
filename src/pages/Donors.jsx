import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../Component/ThemeProvider'

const Donors = () => {
    const {donors} = useContext(ThemeContext)
  return (
    <section className='w-full min-h-screen p-8 flex flex-col items-start gap-12'>
        <div className='w-full flex flex-row items-center justify-around gap-6 text-center'>
            <p    className='p-1 px-3 rounded-lg w-full font-bold text-lg bg-white/10'>Find donor</p>
            <Link className='p-1 px-3 rounded-lg w-full font-bold text-lg hover:bg-white/10' to="/register">Be a donor</Link>
            <Link className='p-1 px-3 rounded-lg w-full font-bold text-lg hover:bg-white/10' to="/about">About</Link>
        </div>

        <form className='w-full gap-4 flex flex-col lg:flex-row items-start lg:items-center lg:justify-around justify-center'>
          <div className='w-full max-w-[300px] flex flex-col gap-2'>
            <label htmlFor="bloodgroup">blood group</label>
            <input type="text" name='bloodgroup' id='bloodgroup' className='w-full outline-none px-2 p-1 rounded-lg bg-red-300'/>
          </div>
          <div className='w-full max-w-[300px] flex flex-col gap-2'>
            <label htmlFor="district">district</label>
            <input type="text" name='district' id='district' className='w-full outline-none px-2 p-1 rounded-lg bg-red-300'/>
          </div>
          <button type='submit' className='text-xl font-semibold cursor-pointer px-3 p-1 bg-white text-red-500 rounded-lg'>Search</button>

        </form>

        <div className='w-full h-[80vh] bg-white/10 grid-cols-[repeat(auto-fill,minmax(400px,1fr))] justify-items-center  rounded-lg grid gap-4 overflow-y-scroll p-6'>
          {
            donors.map((donor)=>{
              const {id, name, bloodgroup, district, isAvailable, phone} =donor
              return (
                <div key={id} className='w-[400px] h-[180px] bg-white/30 rounded-lg p-4 flex flex-col items-start justify-between'>
                  <div className='w-full flex flow-row items-center justify-between'>
                    <p className='text-xl font-bold bg-white text-red-600 rounded-lg p-2'>{bloodgroup}</p>
                    <div>
                      <h1 className='font-bold'>{name}</h1>
                      <p className='italic'>{district}</p>
                    </div>
                    <p className='font-bold'>{isAvailable? "Available" : "Unavailable"}</p>
                  </div>
                  <p className='italic'>Call or book for faster connection</p>
                  <div className='w-full flex flex-row items-center justify-between'>
                    <a className={`px-3 p-1 rounded-lg ${isAvailable? "bg-green-500": "bg-red-500"}`} href={`tel:${phone}`}>Call</a>
                    <p className={`px-3 p-1 rounded-lg bg-white text-black`}>Book</p>
                  </div>
                </div>
              )
            })
          }
        </div>

    </section>
  )
}

export default Donors
