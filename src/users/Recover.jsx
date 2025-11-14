import React from 'react'
import UsePageTitle from '../Component/UsePageTitle'
import { useContext } from 'react'
import { ThemeContext } from '../Component/ThemeProvider'
import { useState } from 'react'

const Recover = () => {
    UsePageTitle("Recover Account")
    const {api, setNotification}= useContext(ThemeContext)
    const [changePass, setChangePass]= useState(false)


  return (
    <div className="w-full min-h-screen flex items-center justify-center px-4 md:px-20 bg-gradient-to-b ">
      
    </div>
  )
}

export default Recover
