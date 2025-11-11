import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ThemeContext } from './ThemeProvider'

const ProtectedProfile = ({ children }) => {
  const { isLogin } = useContext(ThemeContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (!isLogin) {
      navigate('/login', { replace: true })
    }
  }, [isLogin, navigate])

  return isLogin ? children : null
}

export default ProtectedProfile
