'use client'
import React, { useContext, } from 'react';
import { motion } from 'framer-motion'
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { Context } from '@/components/helper/Context';
import Link from 'next/link';


const Donors = () => {
  const { districts, upazillas, bloodgroups } = useContext(Context);
  const [donors, setDonors]=useState([])

  const [searchDistrict, setSearchDistrict] = useState('')
  const [searchUpazilla, setSearchUpazilla] = useState('')
  const [searchBloodgroup, setSearchBloodGroup] = useState('')

  useEffect(() => {
    const fetchDonors = async () => {
      try {
        const response = await axios.get(`/api/user/filter`, {
          params: { searchBloodgroup, searchDistrict, searchUpazilla },
          withCredentials: true,
        });
        setDonors(response.data.payload);
      } catch (error) {
        console.log(error)
      }
    };

    fetchDonors();
  }, [searchBloodgroup, searchDistrict, searchUpazilla, setDonors,]);


  const handleRequest = async (id) => {
    const payload = {
      donorId: id,
      userId: user._id
    }
    try {
      const response = await axios.post(`/api/user/request`, payload, { withCredentials: true })
      alert(response.data.message)
    } catch (error) {
      alert(error?.response?.data?.message || 'Failed to send request')
      console.log(error)
    }

  }

  return (
    <section className='w-full min-h-screen p-1 flex flex-col  gap-12 items-center justify-start'>

    
      <div className='w-full flex flex-col md:flex-row items-start justify-center gap-4 text-white bg-red-900 p-2'>
        <div className='w-full flex flex-col gap-1 bg-white text-black text-xs md:text-sm p-2 rounded-lg'>
          <label htmlFor="district">District</label>
          <select name="district" id="district" value={searchDistrict} onChange={(e) => setSearchDistrict(e.target.value)} className='px-4 outline-none text-red-500'>
            <option value="">select a district</option>
            {
              districts.length > 0 && districts.map((e) => <option key={e}>{e}</option>)
            }
          </select>
        </div>
        <div className='w-full flex flex-col gap-1 bg-white text-black text-xs md:text-sm p-2 rounded-lg'>
          <label htmlFor="upazilla">Upazilla</label>
          <select name="upazilla" id="upazilla" value={searchUpazilla} onChange={(e) => setSearchUpazilla(e.target.value)} className='px-4 outline-none text-red-500'>
            <option value="">select a Upazilla</option>
            {
              upazillas.length > 0 && upazillas.map((e) => <option key={e}>{e}</option>)
            }
          </select>
        </div>
        <div className='w-full flex flex-col gap-1 bg-white text-black text-xs md:text-sm p-2 rounded-lg'>
          <label htmlFor="bloodgroup">Blood Group</label>
          <select name="bloodgroup" id="bloodgroup" value={searchBloodgroup} onChange={(e) => setSearchBloodGroup(e.target.value)} className='px-4 outline-none text-red-500'>
            <option value="">select a blood group</option>
            {
              bloodgroups.length > 0 && bloodgroups.map((e) => <option key={e} >{e}</option>)
            }
          </select>
        </div>


      </div>


       {donors.slice(-50).map((donor) => {
          const { _id, name, bloodgroup, district, isAvailable, } = donor;
          return (
            <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} key={_id} className='w-full mx-auto backdrop-blur-md shadow-sm bg-red-400 shadow-black/30 h-44 rounded-lg p-4 flex flex-col justify-between cursor-pointer'>


              <div className='w-full flex items-center justify-between'>
                <Link to={`/donor/${_id}`} className='font-bold text-lg'>{name}</Link>
                <p className='text-xl font-bold  rounded-lg p-2'>{bloodgroup}</p>
              </div>

              <p className='italic'>District: {district}</p>
              <div className='w-full flex flex-row items-center justify-between'>

                {
                  isAvailable ? <div className='w-full flex items-center justify-between'>
                    <Link to={`/donor/${_id}`}>View</Link>
                    <button onClick={() => handleRequest(_id)} className='p-1 px-3 bg-white/30 rounded-lg shadow-sm'>Request</button>
                  </div> : <p className='italic'>not available</p>
                }
              </div>

            </motion.div>
          );
        })}


    </section>
  );
};

export default Donors;
