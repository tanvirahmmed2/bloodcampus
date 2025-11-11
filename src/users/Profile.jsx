import React from 'react'
import axios from 'axios';
import { useContext } from 'react';
import { ThemeContext } from '../Component/ThemeProvider';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const {api, setIsLogin, user, isLogin}= useContext(ThemeContext)
  const navigate= useNavigate()

    const handleLogout = async () => {
    try {
      const response= await axios.post(`${api}/user/logout`, {}, {withCredentials: true})
      if(response.data.sucess){
        setIsLogin(true)
      }else{
        setIsLogin(true)
      }
      window.location.replace('/login')
      alert(response.data.message)
    } catch (error) {
      alert(error?.response?.data?.message || 'Failed to logout')
      console.log(error)
    }
  };

  if(!isLogin) {
    return navigate('/login')
  }

  const {name}= user
  return (
    <div className='w-full min-h-screen flex flex-col items-center'>
      <div>
        <div>
          <p>{name}</p>
        </div>
      </div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Profile
