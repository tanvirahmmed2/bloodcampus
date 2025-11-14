
import { useContext } from 'react'
import { ThemeContext } from './ThemeProvider'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const ProtectedAdmin = ({ children }) => {
  const { isAdmin } = useContext(ThemeContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAdmin) {
      navigate('/', { replace: true })
    }
  }, [isAdmin, navigate])

  return isAdmin ? children : null
}


export default ProtectedAdmin
