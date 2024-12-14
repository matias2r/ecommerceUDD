import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/User/userContext'
import { CartContext } from '../context/Cart/cartContext'
import Logo from "../assets/logo.svg"

export const Navbar = () => {

  const { user, logout } = useContext(AuthContext)
  const { cart } = useContext(CartContext)
  
  const totalProducts = cart.reduce((accum, product) => accum + product.quantity, 0);

  return (
    <>
      <section className="sticky top-0 z-50 w-full">
        <nav className="bg-indigo-950 shadow-md h-20 pt-6 pb-3 w-full">
          <div className="container mx-auto px-4 flex items-center justify-between h-full">
            <Link to="/" className="flex items-center">
              <img src={Logo} alt="Logo" />
            </Link>
            <div className="flex items-center space-x-8">
              <Link to="/cart" className="relative flex items-center text-white p-2 rounded-full transition">
                <i className="fa-solid fa-cart-shopping text-2xl"></i>
                <span className="absolute top-[-5px] right-[-5px] flex items-center justify-center h-6 w-6 bg-red-500 text-white text-xs font-bold rounded-full">
                  {totalProducts}
                </span>
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
      </section>
      
      <main className="">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mt-2"></h1>
        </div>
      </main>
    </>
  )
}
