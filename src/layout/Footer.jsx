import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear())

  useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])

  return (
    <footer className="w-full bg-white text-black py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 md:gap-0 text-center md:text-left">

        <div className="flex flex-col items-center md:items-start gap-2">
          <h1 className="text-2xl font-bold  tracking-wide">Blood Campus</h1>
          <p className=" text-sm">A humanity organization</p>
        </div>

        <div className="text-sm flex flex-col gap-1  max-w-md leading-relaxed">
          <p>Beware of scams and frauds.</p>
          <p>Any kind of money transaction is strictly prohibited.</p>
          <p>Donate blood and save lives.</p>
          <p>Stand with humanity.</p>
          <p>Be kind to people and animals.</p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-2">
          <p className=" text-sm">
            © {year} All rights reserved
          </p>
          <p className="text-sm">
            Project of{' '}
            <a
              href="https://www.disibin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-green-400 hover:text-green-500 transition-colors"
            >
              DisiBin
            </a>

          </p>
          <Link to='/admin' className='text-xs italic'>Admin</Link>
        </div>
      </div>


    </footer>
  )
}

export default Footer
