import React, { useEffect, useState } from 'react'

const Footer = () => {

  const [year, setYear] = useState(new Date().getFullYear())
  useEffect(()=>{
    setYear(new Date().getFullYear())
  },[])

  return (
    <section className='w-full h-auto p-2 overflow-x-hidden'>
      <footer className='w-full h-auto text-xs p-4 bg-white/5 rounded-lg flex gap-6 flex-col md:flex-row items-center justify-around'>
        <div className='w-auto flex flex-col items-center justify-center gap-2'>
          <h1 className='text-xl font-bold'>Blood Campus</h1>
          <p>A humanity organization</p>
        </div>
        <div className='w-auto flex flex-col items-center justify-center gap-2'>
          <p>Beware of scams & frauds</p>
          <p>Any kind of money transaction is strictly prohibited</p>
          <p>Give blood & save life</p>
          <p>We're giving fully free support form every soul</p>
          <p>be kind to people and animals</p>
        </div>
        <div className='w-auto flex flex-col items-center justify-center gap-2'>
          <p>Alrights are reserved {year}</p>
          <p>Project of <a href="https://www.disibin.com" className=' font-bold text-green-500'>DisiBin</a></p>
        </div>
      </footer>
    </section>
  )
}

export default Footer
