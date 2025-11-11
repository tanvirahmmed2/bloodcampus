import React from 'react'
import axios from 'axios';
import { useContext } from 'react';
import { ThemeContext } from '../Component/ThemeProvider';

const Profile = () => {
  const {api, setIsLogin, user, isLogin}= useContext(ThemeContext)

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
    window.location.replace('/login')
  }

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Profile
