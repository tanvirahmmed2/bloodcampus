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
        const response = await axios.get(`/api/user`, {
          params: { searchBloodgroup, searchDistrict, searchUpazilla },
          withCredentials: true,
        });
        setDonors(response.data.payload);
      } catch (error) {
        console.log(error)
      }
    };

    fetchDonors();
  }, [searchBloodgroup, searchDistrict, searchUpazilla,]);


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
console.log(donors)
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


       {donors.slice(-50).map((donor) => (
        <div key={donor._id}>
          <h1>{donor.name}</h1>
        </div>
       ))}


    </section>
  );
};

export default Donors;
