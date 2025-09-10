import React, { useContext } from 'react';
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom';
import { ThemeContext } from '../Component/ThemeProvider';
import UsePageTitle from '../Component/UsePageTitle'

const Donors = () => {
  const { donors, districts, bloodgroups } = useContext(ThemeContext);
  UsePageTitle("Donors")

  return (
    <section className='w-full min-h-screen p-8 flex flex-col  gap-12 items-center justify-center'>

      <div className='w-full flex flex-row items-center justify-around gap-6 text-center'>
        <p className='p-1 px-3 rounded-lg w-full font-bold text-lg bg-white/10'>Find donor</p>
        <Link className='p-1 px-3 rounded-lg w-full font-bold text-lg hover:bg-white/10' to="/register">Be a donor</Link>
        <Link className='p-1 px-3 rounded-lg w-full font-bold text-lg hover:bg-white/10' to="/about">About</Link>
      </div>

      <form className='w-full gap-4 flex flex-col lg:flex-row items-start lg:items-center lg:justify-around justify-center'>
        <select name="bloodgroup" id="bloodgroup" className='w-full max-w-[300px] flex flex-col gap-2 text-red-600 px-2 p-1 rounded-lg outline-none'>
          <option value="" className='w-full outline-none px-2 p-1 rounded-lg bg-red-300'>select a blood group</option>
          {bloodgroups.map((blood) => {
            return <option value={blood} key={blood} className='w-full outline-none px-2 p-1 rounded-lg bg-red-300'>{blood}</option>
          })}
        </select>
        <select name="district" id="district" className='w-full max-w-[300px] flex flex-col gap-2 text-red-600 px-2 p-1 rounded-lg outline-none'>
          <option value="" className='w-full outline-none px-2 p-1 rounded-lg bg-red-300'>select a district</option>
          {districts.map((dist) => {
            return <option value={dist} key={dist} className='w-full outline-none px-2 p-1 h-14 rounded-lg bg-red-300'>{dist}</option>
          })}
        </select>
        <button type='submit' className=' font-semibold cursor-pointer px-3 p-1 bg-white text-red-500 rounded-lg'>Search</button>
      </form>

      <div className='w-full h-screen border-2 border-white/20 flex flex-wrap justify-center  gap-4 overflow-y-scroll overflow-x-hidden p-6  rounded-lg'>
        {donors.map((donor) => {
          const { id, name, bloodgroup, district, isAvailable, phone } = donor;
          return (
            <motion.div initial={{opacity: 0, scale: 0.8}} whileInView={{opacity:1, scale:1}} transition={{duration:0.6}} key={id} className='w-full sm:w-[320px] h-[180px] bg-red-500 rounded-lg p-4 flex flex-col justify-between cursor-pointer'>

              {/* Top Row */}
              <div className='w-full flex items-center justify-between'>
                <p className='text-xl font-bold  rounded-lg p-2 bg-white/30'>{bloodgroup}</p>
                <h1 className='font-bold text-xs'>{name}</h1>

              </div>

              <p className='italic'>District: {district}</p>

              {/* Bottom Row */}
              <div className='w-full flex flex-row items-center justify-between'>

                {
                  isAvailable ? <a className={`px-3 p-1 rounded-lg ${isAvailable ? "bg-green-500" : "bg-red-500 opacity-25"} `} href={`tel:${phone}`}>Call</a> : <p className='italic'>not available</p>
                }
              </div>

            </motion.div>
          );
        })}
      </div>


      

    </section>
  );
};

export default Donors;
