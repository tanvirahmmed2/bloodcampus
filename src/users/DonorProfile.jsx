import React, { useContext } from 'react'
import { ThemeContext } from '../Component/ThemeProvider'
import { useParams } from 'react-router-dom'
import { IoCallOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

const DonorProfile = () => {
  const { donors } = useContext(ThemeContext)
  const { id } = useParams()
  const data = donors.find((e) => e._id === id)
  if(data=== null)return <p>Data not found</p>
  return (
    <div className='w-full flex flex-col items-center gap-6 min-h-screen p-1 bg-white/20'>
      <div className='w-full flex flex-col items-center justify-center gap-4 bg-white py-4 text-black'>
        <CgProfile className='text-8xl ' />
        <h1 className='text-3xl font-semibold'> {data.name} ({data.bloodgroup})</h1>
        <p>{data.isAvailable ? <span>Available</span> : <span>Not availble</span>}</p>
      </div>
      <div className='w-full bg-white text-black flex items-center justify-center py-4'>
        <div className=' flex flex-col gap-2'>
          <p>Email: {data.email}</p>
          <p>District: {data.district}</p>
          <p>Upazilla: {data.upazilla}</p>
          {data.isAvailable && <div>
            <p className='flex flex-row gap-2 items-center justify-center'><IoCallOutline/> {data.phone} <span className='text-xs italic'>(call if needed)</span></p>

            {data.lastdoneted !==null && <p>Last Doneted: {data.lastdoneted.slice(0, 10)}</p>}
          </div>}

        </div>
      </div>

    </div>
  )
}

export default DonorProfile
