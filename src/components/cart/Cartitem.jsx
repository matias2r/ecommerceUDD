import { useContext } from "react"
import { CartContext } from "../../context/Cart/cartContext"


export const CartItem = ({ product }) => {

    const { _id, nombre, imagen, precio } = product; 

    const { cart } = useContext(CartContext)
    
    const { removeFromCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);


    return (
        <>
        
                <div className="space-y-6 mt-5">
                    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm md:p-6">
                        <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                        <a className="shrink-0 md:order-1">
                            <img className="h-20 w-20" src={imagen} alt={nombre}/>
                        </a>
                        <div className="flex items-center justify-between md:order-3 md:justify-end">
                            <div className="flex items-center">
                            <button onClick={() => decreaseQuantity(product._id)} 
                            disabled={product.quantity === 1} type="button" id="decrement-button" data-input-counter-decrement="counter-input" className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100">
                                <svg className="h-2.5 w-2.5 text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
                                </svg>
                            </button>
                            <span className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0">{product.quantity}</span> 
                            <button onClick={() => increaseQuantity(product._id)} type="button" id="increment-button" data-input-counter-increment="counter-input" className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100">
                                <svg className="h-2.5 w-2.5 text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                                </svg>
                            </button>
                            </div>
                            <div className="text-end md:order-4 md:w-32">
                            <p className="text-base font-bold text-gray-900">${(precio * product.quantity).toFixed(2)}</p>
                            </div>
                        </div>

                        <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                            <a className="text-base font-medium text-gray-900 hover:text-indigo-500 transition">{nombre}</a>

                            <div className="flex items-center gap-4">
                            <button onClick={() => removeFromCart(_id)} type="button" className="inline-flex items-center text-sm font-semibold text-red-500 hover:text-red-600 transition">
                                <svg className="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" />
                                </svg>
                                Remover producto
                            </button>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
          </>
    )
}