import { useContext } from "react"
import { CartContext } from "../../context/Cart/cartContext"

export const ProductItem = ({ product }) => {
    const { title, image, price } = product; 

    const { addToCart } = useContext(CartContext)

    const oldPrice = price * 1.25



    return(
        <div className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
            <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
                <img className="object-cover" src={image} alt={title} />
                <span className="absolute bottom-0 right-0 m-2 rounded bg-green-100 px-1 text-center text-xs font-bold text-green-700">ENVÍO RÁPIDO</span>
            </a>

            <div className="mt-4 px-5 pb-5">
                <a href="#">
                <h5 className="text-md tracking-tight text-gray-600">{title}</h5>
                </a>
                <div className="mt-2 mb-5 flex items-center justify-between">
                <p>
                    <span className="text-2xl font-medium text-purple-700">${price}</span>
                    <span className="text-md text-gray-400 ml-2 line-through">${oldPrice}</span>
                </p>
                </div>
                <button className="flex items-center justify-center rounded-md bg-indigo-500 hover:bg-indigo-600 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none transition" onClick={() => addToCart(product)}>
                Añadir al Carrito </button>
            </div>
        </div>
    )
}