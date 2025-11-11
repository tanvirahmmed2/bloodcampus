
import { useContext } from 'react'
import { ThemeContext } from './ThemeProvider'

const ProtectedAdmin = ({ children }) => {
    const { isAdmin } = useContext(ThemeContext)
    if (!isAdmin) {
        window.location.replace('/')
    }
    return children
}

export default ProtectedAdmin
