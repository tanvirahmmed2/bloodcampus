import React, { useContext, } from 'react';
import { motion } from 'framer-motion'
import { Link, } from 'react-router-dom';
import axios from 'axios';
import { ThemeContext } from '../Component/ThemeProvider';
import UsePageTitle from '../Component/UsePageTitle'


const Donors = () => {
  UsePageTitle("Donors")
  const { districts, bloodgroups, donors, loading, user, api } = useContext(ThemeContext);


  const handleRequest = async (id) => {
    const payload = {
      donorId: id,
      name: user.name,
      district: user.district,
      number: user.number,
      bloodGroup: user.bloodgroup,
    }
    try {
      const response = await axios.post(`${api}/user/request`, payload, { withCredentials: true })
      alert(response.data.message)
    } catch (error) {
      alert(error?.response?.data?.message || 'Failed to send request')
    }

  }

  return (
    <section className='w-full min-h-screen p-1 flex flex-col  gap-12 items-center justify-center'>

      <div className='w-full flex flex-row items-center justify-around gap-6 text-center'>
        <p className='p-1 px-3 rounded-lg w-full font-bold text-lg bg-white/10'>Find donor</p>
        <Link className='p-1 px-3 rounded-lg w-full font-bold text-lg hover:bg-white/10' to="/register">Be a donor</Link>
        <Link className='p-1 px-3 rounded-lg w-full font-bold text-lg hover:bg-white/10' to="/about">About</Link>
      </div>

      <form className='w-full gap-4 flex flex-col md:flex-row items-start lg:items-center lg:justify-around justify-center'>
        <select name="bloodgroup" id="bloodgroup" className='w-full md:w-[300px] flex flex-col gap-2 text-red-600 px-2 p-1 rounded-lg outline-none'>
          <option value="" className='w-full outline-none px-2 p-1 rounded-lg bg-red-300'>select a blood group</option>
          {bloodgroups.map((blood) => {
            return <option value={blood} key={blood} className='w-full outline-none px-2 p-1 rounded-lg bg-red-300'>{blood}</option>
          })}
        </select>
        <select name="district" id="district" className='w-full md:w-[300px] flex flex-col gap-2 text-red-600 px-2 p-1 rounded-lg outline-none'>
          <option value="" className='w-full outline-none px-2 p-1 rounded-lg bg-red-300'>select a district</option>
          {districts.map((dist) => {
            return <option value={dist} key={dist} className='w-full outline-none px-2 p-1 h-14 rounded-lg bg-red-300'>{dist}</option>
          })}
        </select>
        <button type='submit' className='w-full md:w-auto font-semibold cursor-pointer px-3 p-1 bg-white text-red-500 rounded-lg'>Search</button>
      </form>

      <div className='w-full min-h-screen border-2 border-white/20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-4 p-2 rounded-lg'>
        {loading ? <p>loading</p> : <></>}

        {donors.map((donor) => {
          const { _id, name, bloodgroup, district, isAvailable, phone } = donor;
          return (
            <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} key={_id} className='w-full backdrop-blur-md shadow-sm shadow-white h-[180px] rounded-lg p-4 flex flex-col justify-between cursor-pointer'>


              <div className='w-full flex items-center justify-between'>
                <h1 className='font-bold '>{name}</h1>
                <p className='text-xl font-bold  rounded-lg p-2 text-green-600'>{bloodgroup}</p>
              </div>

              <p className='italic'>District: {district}</p>
              <div className='w-full flex flex-row items-center justify-between'>

                {
                  isAvailable ? <div className='w-full flex items-center justify-between'>
                    <a className={`px-3 p-1 rounded-lg ${isAvailable ? "bg-green-500" : "bg-red-500 opacity-25"} `} href={`tel:${phone}`}>Call</a>
                    <button onClick={() => handleRequest(_id)}>Request</button>
                  </div> : <p className='italic'>not available</p>
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
