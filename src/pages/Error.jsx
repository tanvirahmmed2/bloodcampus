import React from 'react'
import {Link} from "react-router-dom"

const Error = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center gap-4 flex-col'>
        <h1 className='text-8xl font-bold'>404</h1>
        <p>Path not found</p>
        <Link to="/" className='px-3 p-1 rounded-lg bg-white text-red-500'>Get back to home</Link>
      
    </div>
  )
}

export default Error
