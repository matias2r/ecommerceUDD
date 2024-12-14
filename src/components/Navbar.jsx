import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/User/userContext'
import Logo from "../assets/logo.svg"


export const Navbar = () => {

  const { user, logout } = useContext(AuthContext)
  

    return (
        <nav className="bg-indigo-950 shadow h-20 pt-6 pb-3 w-full">
        <div className="container mx-auto px-4 flex items-center justify-between h-full">

          <Link to="/" className="flex items-center">
          <img src={Logo} alt="Logo" />
          </Link>
          <div className="flex items-center space-x-8">

            <Link to="/cart" className="text-center text-white transition relative rounded-full p-2 px-3">
              <div className="text-2xl">
                <i className="fa-solid fa-cart-shopping"></i>
              </div>
            </Link>
            {
              !user ? (
                <Link to="/login" className="text-center text-white transition relative rounded-full p-2 px-3">
                  <div className="text-2xl">
                    <i className="fa-solid fa-user"></i>
                  </div>
                </Link>
              ) : (
                <button onClick={logout} className="text-center text-white transition relative rounded-full p-2 px-3">
                  <div className="text-2xl">
                    <i className="fa-solid fa-sign-out"></i>
                  </div>
                </button>
              )
            }
          </div>
        </div>
      </nav>
    )
}