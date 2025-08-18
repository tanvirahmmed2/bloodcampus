import React, { useEffect, useState } from 'react'

const Footer = () => {

  const [year, setYear] = useState(new Date().getFullYear())
  useEffect(()=>{
    setYear(new Date().getFullYear())
  },[])

  return (
    <section className='w-full h-auto p-2 overflow-x-hidden'>
      <footer className='w-full h-auto text-xs p-4 bg-white/20 rounded-lg flex  flex-row items-center justify-around'>
        <div className='w-auto flex flex-col items-start justify-center gap-2'>
          <h1 className='text-xl font-bold'>Blood Campus</h1>
          <p>A humanity organization</p>
        </div>
        <div className='w-auto flex flex-col items-end justify-center gap-2'>
          <p>Alrights are reserved {year}</p>
          <p>Developed by <a href="https://tanvirahmmed.netlify.app" className='text-xl font-bold'>Tanvir Ahmmed</a></p>
        </div>
      </footer>
    </section>
  )
}

export default Footer
