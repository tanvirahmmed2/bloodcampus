import React from 'react'
import UsePageTitle from '../Component/UsePageTitle'
import axios from 'axios'
import { useContext } from 'react'
import { ThemeContext } from '../Component/ThemeProvider'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Recover = () => {
  UsePageTitle("Recover Account")
  const navigate = useNavigate()
  const { api, setNotification } = useContext(ThemeContext)
  const [changePass, setChangePass] = useState(false)
  const [resetData, setResetData] = useState({
    email: '',
    code: '',
    newpass:''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setResetData((prev) => ({ ...prev, [name]: value }))
  }

  const requestForCode = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(`${api}/user/forgetpassword`, resetData, {withCredentials:true})

      setNotification(response.data.message)
      setChangePass(true)

    } catch (error) {
      setNotification(error?.response?.data?.message || "failed to send code")
      setChangePass(false)
    }

  }


  const resetPassword = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(`${api}/user/resetpassword`, resetData, {withCredentials: true})

      setNotification(response.data.message)
      navigate('/login')

    } catch (error) {
      setNotification(error?.response?.data?.message || "failed to change password")


    }


  }

  return (
    <div className="w-full min-h-screen flex items-center justify-center px-4 md:px-20 bg-gradient-to-b ">
      <div className='bg-white text-black p-6 flex items-center justify-center rounded-lg min-w-[300px]'>
        <form onSubmit={requestForCode} className={`${changePass ? 'hidden' : 'flex'} flex-col gap-2 w-full`}>
          <div className='flex flex-col gap-2'>
            <label htmlFor="email">Email</label>
            <input type="email" name='email' id='email' onChange={handleChange} value={resetData.email} className='px-2 p-1 rounded-lg outline-none text-black border-2 border-black' />
          </div>
          <button type='submit' className='px-3 p-1 rounded-lg bg-black text-white hover:opacity-75'>Request</button>

        </form>



        <form className={`${changePass ? 'flex' : 'hidden'} flex-col gap-2 w-full`} onSubmit={resetPassword}>
          <div className='flex flex-col gap-2'>
            <label htmlFor="code">Code</label>
            <input type="text" name='code' id='code' value={resetData.code} onChange={handleChange} className='px-2 p-1 rounded-lg outline-none text-black border-2 border-black' />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor="newpass">New Password</label>
            <input type="text" name='newpass' id='newpass' value={resetData.newpass} onChange={handleChange} className='px-2 p-1 rounded-lg outline-none text-black border-2 border-black' />
          </div>
          <button type='submit' className='px-3 p-1 rounded-lg bg-black text-white hover:opacity-75'>Change Password</button>

        </form>
      </div>

    </div>
  )
}

export default Recover
