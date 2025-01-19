import { Navigate } from 'react-router'
import { useAuth } from '../Context/AuthContext'

const PrivateRoutes = ({ children }) => {
  const { user } = useAuth()
  return user ? children : <Navigate to={'/login'}></Navigate>
}

export default PrivateRoutes
