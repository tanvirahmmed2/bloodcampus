import React from 'react'
import axios from 'axios'
import { useContext } from 'react'
import { ThemeContext } from '../Component/ThemeProvider'
import { MdDeleteOutline } from "react-icons/md";
import { useState } from 'react'
import { useEffect } from 'react'
import UsePageTitle from '../Component/UsePageTitle';


const Admin = () => {
  const { api, setNotification, donors, districts } = useContext(ThemeContext)
  const [state, setState] = useState('message')
  const [messages, setMessages] = useState([])
  const [newAdminEmail, setNewAdminEmail] = useState('')
  const [banUserEmail, setBanUserEmail] = useState('')
  const [deleteUserEmail, setDeleteUserEmail] = useState('')
  UsePageTitle("Admin")

  const admins = donors.filter((e) => e.isAdmin)

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await axios.get(`${api}/message`, { withCredentials: true })
        setMessages(response.data.payload)
        setNotification(response.data.message)

      } catch (error) {
        setNotification(error?.response?.data.message || "failed to fetch message")

      }
    }
    fetchMessage()
  }, [api, setNotification])

  const addNewAdmin = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(`${api}/user/newaccess`, { newAdminEmail }, { withCredentials: true })
      setNotification(response.data.message)
    } catch (error) {
      setNotification(error?.response?.data.message || "Failed to add new Admin")
      console.log(error)
    }

  }

  const removeAdmin = async (id) => {
    try {
      const response = await axios.post(`${api}/user/removeaccess`, { id }, { withCredentials: true })
      setNotification(response.data.message)
    } catch (error) {
      setNotification(error?.response?.data?.message || "failed to remove admin")

    }
  }

  const banUser = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(`${api}/user/banuser`, { banUserEmail }, { withCredentials: true })
      setNotification(response.data.message)
    } catch (error) {
      setNotification(error?.response?.data?.message || "failed to ban/unban user")

    }

  }

  const deleteUser = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(`${api}/user/deleteuser`, { deleteUserEmail }, { withCredentials: true })
      setNotification(response.data.message)
    } catch (error) {
      setNotification(error?.response?.data?.message || "failed to delete user")

    }

  }

  return (
    <div className='w-full min-h-screen flex flex-col items-center justify-start gap-6 py-6 p-1'>
      <div className='w-full flex flex-row items-center justify-center gap-4'>
        <button className={`w-full  ${state === 'message' ? 'bg-white' : 'bg-white/30'} text-black py-3`} onClick={() => setState('message')}>Message</button>
        <button className={`w-full  ${state === 'user' ? 'bg-white' : 'bg-white/30'} text-black py-3`} onClick={() => setState('user')}>User</button>
        <button className={`w-full  ${state === 'access' ? 'bg-white' : 'bg-white/30'} text-black py-3`} onClick={() => setState('access')}>Access</button>
      </div>
      {
        state === 'message' && <div className='w-full flex flex-col items-center justify-center gap-4'>
          <h1 className='text-2xl font-semibold text-center'>Get Back to Members Faster</h1>
          {
            messages === null || messages.length === 0 ? <p>No message found</p> : <div className='w-full flex flex-col items-center justify-center gap-2 bg-white/20 py-4 px-2'>
              <div className='w-full grid grid-cols-1 md:grid-cols-5 gap-2 mb-4 text-center'>
                <h1 className='bg-white text-black px-1'>Name</h1>
                <p className='bg-white text-black px-1'>Subject</p>
                <p className='bg-white text-black px-1'>Message</p>
                <p className=' bg-white text-black px-1'>Email</p>
                <p className='bg-white text-black'>Action</p>
              </div>
              {
                messages.map((e) => {
                  const { _id, name, subject, email, message } = e
                  return <div key={_id} className='w-full grid grid-cols-1 md:grid-cols-5 gap-2 text-center rounded-lg'>
                    <h1 className='w-full px-1'>{name}</h1>
                    <p className='w-full px-1'>{subject}</p>
                    <p className='w-full px-1'>{message}</p>
                    <a href={`mailto:${email}`} className='px-1'>{email}</a>
                    <button><MdDeleteOutline className='w-auto px-1 text-xl' /></button>
                  </div>
                })
              }
            </div>
          }
        </div>
      }
      {
        state === 'user' && <div className='w-full py-6 flex flex-col items-center justify-center gap-6'>
          <h1 className='text-2xl font-semibold text-center'>User Management</h1>
          <div className='w-full flex flex-col items-center justify-center gap-4 bg-white text-black py-4'>
            <h1 className='text-xl font-semibold text-center'>Ban/Unban user</h1>
            <form onSubmit={banUser} className='flex flex-col gap-2'>
              <label htmlFor="email">Email</label>
              <input type="email" name='email' id='email' className='px-3 p-1 rounded-md outline-none border-2' value={banUserEmail} onChange={(e) => setBanUserEmail(e.target.value)} />
              <button type='submit' className='px-3 p-1 rounded-lg bg-black text-white'>Submit</button>
            </form>
          </div>
          <div className='w-full flex flex-col items-center justify-center gap-4 bg-white text-black py-4'>
            <h1 className='text-xl font-semibold text-center'>Delete user account</h1>
            <form onSubmit={deleteUser} className='flex flex-col gap-2'>
              <label htmlFor="email">Email</label>
              <input type="email" name='email' id='email' className='px-3 p-1 rounded-md outline-none border-2' value={deleteUserEmail} onChange={(e) => setDeleteUserEmail(e.target.value)} />
              <button type='submit' className='px-3 p-1 rounded-lg bg-black text-white'>Submit</button>
            </form>
          </div>

          <div className='w-full flex flex-col items-center justify-center gap-4 bg-white text-black py-4'>
            <h1 className='text-xl font-semibold text-center'>User Statistics</h1>

            <div className='w-full grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-2'>
              {districts.map((district) => {
              const count = donors.filter((d) => d.district === district).length;

              if (count === 0) return null;

              return (
                <div key={district} className='w-full flex flex-row gap-2 items-center justify-center bg-black text-white rounded-lg p-2'>
                  {district}: {count} donor
                </div>
              );
            })}

            </div>
          </div>




        </div>
      }
      {
        state === 'access' && <div className='w-full flex flex-col items-center justify-center gap-6'>
          <div className='w-full flex flex-col items-center justify-center gap-4 bg-white text-black py-4'>
            <h1 className='text-2xl font-semibold text-center'>Admins</h1>
            {
              admins !== null ? <div className=' w-full flex flex-col items-center justify-center gap-2 bg-white text-black py-4'>
                {admins.map((e) => {
                  return <div key={e._id} className='w-full flex flex-row items-center justify-between p-2'>
                    <h1>{e.name}</h1>
                    <p>{e.phone}</p>
                    <p>{e.email}</p>
                    <button onClick={() => removeAdmin(e._id)} className='text-2xl '><MdDeleteOutline /></button>
                  </div>
                })}
              </div> : <span>No admin available</span>
            }
          </div>
          <form onSubmit={addNewAdmin} className='w-full flex flex-col items-center justify-center gap-4 bg-white text-black py-4'>
            <h1>Add New Admin</h1>
            <div className='w-auto flex flex-col gap-2'>
              <label htmlFor="email">Email</label>
              <input type="email" name='email' id='email' value={newAdminEmail} onChange={(e) => setNewAdminEmail(e.target.value)} className='outline-none px-2 p-1 rounded-lg border-2' />

            </div>
            <button type='submit' className='px-4 p-1 bg-black text-white rounded-lg'>Submit</button>
          </form>
        </div>
      }

    </div>
  )
}

export default Admin
