
import { useContext } from 'react'
import { ThemeContext } from './ThemeProvider'

const ProtectedAdmin = ({ children }) => {
    const { isLogin } = useContext(ThemeContext)
    if (!isLogin) {
        window.location.replace('/login')
    }
    return children
}

export default ProtectedAdmin
