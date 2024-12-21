import { useContext } from "react"
import { CartContext } from "../../context/Cart/cartContext"
import { Link } from "react-router-dom"

export const ProductItem = ({ product }) => {
    
    const { _id, nombre, imagen, precio } = product; 

    
    const { addToCart } = useContext(CartContext)

    const oldprecio = precio * 1.25

    return(
        <div className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
            <Link className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" to={`/product/${_id}`}>
            <img className="object-cover" src={imagen} alt={nombre} />
                <span className="absolute bottom-0 right-0 m-2 rounded bg-green-100 px-1 text-center text-xs font-bold text-green-700">ENVÍO RÁPIDO</span>
            </Link>

            <div className="mt-4 px-5 pb-5">
                <Link to={`/product/${_id}`} className="text-md tracking-tight text-gray-600 font-semibold hover:text-indigo-500 transition">{nombre}</Link>
                <div className="mt-2 mb-5 flex items-center justify-between">
                <p>
                    <span className="text-2xl font-medium text-indigo-500">${precio.toFixed(2)}</span>
                    <span className="text-md text-gray-400 ml-2 line-through">${oldprecio.toFixed(2)}</span>
                </p>
                </div>
                <button className="flex items-center justify-center rounded-md bg-indigo-500 hover:bg-indigo-600 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none transition" onClick={() => addToCart(product)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="shrink-0 mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                        Añadir al Carrito
                    </button>

            </div>
        </div>
    )
}