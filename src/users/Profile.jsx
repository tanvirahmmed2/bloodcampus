import React, { useState } from 'react'
import axios from 'axios';
import { useContext } from 'react';
import { ThemeContext } from '../Component/ThemeProvider';
import { useNavigate } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";

const Profile = () => {
  const [update, setUpdate] = useState(false)
  const { api, setIsLogin, user, isLogin, districts } = useContext(ThemeContext)
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      const response = await axios.post(`${api}/user/logout`, {}, { withCredentials: true })
      if (response.data.sucess) {
        setIsLogin(true)
      } else {
        setIsLogin(true)
      }
      window.location.replace('/login')
      alert(response.data.message)
    } catch (error) {
      alert(error?.response?.data?.message || 'Failed to logout')
      console.log(error)
    }
  };


  const { name, email, lastdonated, dateofbirth, isAvailable, bloodgroup, district, nid } = user

  const [formData, setFormData] = useState({
    name: name,
    lastdonated: lastdonated,
    isavilable: isAvailable,
    district: district,
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const updateProfile = async (e) => {
    try {
      const response = await axios.put(`${api}/user/update`, formData, { withCredentials: true })
      alert(response.data.message)
    } catch (error) {
      alert(error?.response?.data?.message || "failed to update profile")
    }

  }
  if (!isLogin) {
    return navigate('/login')
  }


  return (
    <div className='w-full min-h-screen flex flex-col items-center gap-6 p-1'>
      <div className='w-full flex flex-col items-center justify-center gap-6'>
        <div className='w-full flex flex-col items-center justify-center bg-white text-red-600 py-4'>
          <CgProfile className='text-8xl' />
          <p className='text-3xl font-semibold text-black flex flex-row gap-4 items-center justify-center'>{name} {isAvailable ? <span className='w-3 h-3 bg-green-600 rounded-full'></span> : <span className='w-3 h-3 bg-red-600 rounded-full'></span>}</p>
          <p>{email}</p>
        </div>
        <div className='w-full flex flex-col items-center justify-center bg-white text-black py-4 gap-4'>
          <div className='flex gap-2 flex-col'>
            <p>Blood Group: {bloodgroup}</p>
            <p>Date of Birth: {dateofbirth.slice(0, 10)}</p>
            <p>District: {district}</p>
            <p>Nid Number: {nid}</p>
            <p>{lastdonated !== null ? <span></span> : <span>Last donted: {lastdonated}</span>}</p>
          </div>
          <button onClick={() => setUpdate(!update)} className='bg-red-600 text-white p-1 px-3 rounded-lg'>Update Profile</button>
        </div>
      </div>
      {
        update && <div className='w-full flex flex-col items-center justify-center bg-white text-red-600 py-4'>
          <form onSubmit={updateProfile} className='flex flex-col gap-6'>
            <div className='flex flex-col '>
              <label htmlFor="name" className='text-black'>Name</label>
              <input type="text" id='name' name='name' value={formData.name} onChange={handleChange} className='outline-none border-2 px-2 p-1 rounded-md' />
            </div>
            <div className='flex flex-col '>
              <label htmlFor="lastdoneted" className='text-black'>Last Doneted</label>
              <input type="date" id='nlastdoneted' name='lastdoneted' value={formData.lastdonated} onChange={handleChange} className='outline-none border-2 px-2 p-1 rounded-md' />
            </div>
            <div className='flex flex-col '>
              <label htmlFor="district" className='text-black'>District</label>
              <select name="district" id="district" value={formData.district} onChange={handleChange}>
                {
                  districts.map((e)=>{ return <option key={e}>{e}</option>})
                }
              </select>
            </div>
            <button type='submit' className='bg-black text-white p-1 px-3 rounded-md'>Save</button>
          </form>




        </div>
      }
      <button onClick={handleLogout} className='bg-black text-white p-1 px-3 rounded-md'>Logout</button>
    </div>
  )
}

export default Profile
