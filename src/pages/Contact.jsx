import React, { useContext } from 'react'
import axios from 'axios'
import { useState } from 'react';
import { ThemeContext } from '../Component/ThemeProvider';
import UsePageTitle from '../Component/UsePageTitle';

const Contact = () => {
  UsePageTitle('Contact')
  const { api , setNotification} = useContext(ThemeContext)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }


  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(`${api}/message/new`, formData)

      setNotification(response.data.message);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
    } catch (error) {
      setNotification(error.response?.data?.message || "Server error");
    }
  }
  return (
    <section className='w-full min-h-[800px] p-6 flex flex-col items-center justify-center gap-8'>
      <h1 className='text-4xl font-bold '>Contact Us</h1>


      <div className='w-full sm:w-3/4 md:w-1/2 flex items-start justify-center flex-col gap-2 p-6  rounded-xl shadow-lg'>
        <p className='text-2xl font-semibold'>Send us a Message</p>
        <form onSubmit={handleSubmit} className='w-full flex flex-col items-start justify-center gap-4'>
          <div className='w-full flex flex-col items-start justify-center gap-2 '>
            <label htmlFor="name">Name</label>
            <input type="text" name='name' id='name' required className='w-full px-4 p-2 border-2 outline-none text-black' onChange={handleChange} value={formData.name} />
          </div>
          <div className='w-full flex flex-col items-start justify-center gap-2 '>
            <label htmlFor="email">Email</label>
            <input type="email" name='email' id='email' required className='w-full px-4 p-2 border-2 outline-none text-black' onChange={handleChange} value={formData.email} />
          </div>
          <div className='w-full flex flex-col items-start justify-center gap-2 '>
            <label htmlFor="subject">Subject</label>
            <input type="text" name='subject' id='subject' required className='w-full px-4 p-2 border-2 outline-none text-black' onChange={handleChange} value={formData.subject} />
          </div>
          <div className='w-full flex flex-col items-start justify-center gap-2 '>
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" type='text' className='w-full  px-4 p-2 border-2 outline-none resize-none text-black' onChange={handleChange} value={formData.message}></textarea>
          </div>

          <button type='submit' className='w-full bg-emerald-500 rounded-lg text-white hover:bg-emerald-600 p-1'>Send Message</button>
        </form>
      </div>


    </section>
  )
}

export default Contact
