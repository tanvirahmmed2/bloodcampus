import React, { useContext, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { ThemeContext } from './ThemeProvider'

const Notification = () => {
  const { notification, setNotification } = useContext(ThemeContext)

  
  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification('')
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [notification, setNotification])

  if (!notification) return null

  return (
    <div className='w-full fixed top-0 left-0 h-8 bg-emerald-100 text-black flex flex-row items-center justify-around px-2 z-30'>
      <p className=''>{notification}</p>
      <button
        onClick={() => setNotification(null)}
        className=''
      >
        <FontAwesomeIcon icon={faXmark} />
      </button>
    </div>
  )
}

export default Notification
