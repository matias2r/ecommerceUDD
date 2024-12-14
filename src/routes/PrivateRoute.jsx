import { useContext } from "react"
import { AuthContext } from "../context/User/userContext"
import { Navigate } from "react-router-dom"

export const PrivateRoute = ({children}) => {
    const { user } = useContext(AuthContext)

    return user ? children : <Navigate to="/login" />
}