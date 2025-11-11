import React, { useContext } from 'react'
import { ThemeContext } from '../Component/ThemeProvider'
import { useParams } from 'react-router-dom'

const DonorProfile = () => {
    const {donors}= useContext(ThemeContext)
    const {id}= useParams()
    const data= donors.find((e)=> e._id === id)
    console.log(data)
  return (
    <div>
      <h1>{data.name}</h1>
    </div>
  )
}

export default DonorProfile
