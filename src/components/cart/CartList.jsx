import { useContext } from "react"
import { CartContext } from "../../context/Cart/cartContext"
import { CartItem } from "./Cartitem"
import { Link } from 'react-router-dom'
import emptyCart from '../../assets/emptyCart.svg'

export const CartList = () => {
    const { cart, clearCart } = useContext(CartContext)
    
    const total = cart.reduce((accum, product) => accum + product.price * product.quantity, 0)

    const totalTrans = cart.reduce((accum, product) => accum + product.price * product.quantity * 0.96, 0)

    const totalProducts = cart.reduce((accum, product) => accum + product.quantity, 0);

    if (!cart || cart.length === 0) {
        return (
            <div className="cart-list empty w-full flex items-center justify-center mb-32 mt-20">
                <div className="text-center">
                    <img src={emptyCart} alt="Carrito Vacío" className="mx-auto w-60 mb-12" />
                    <h2 className="text-2xl font-semibold">Tu Carrito está vacío</h2>
                    <p className="text-gray-700 mt-2 font-semibold">Por favor, agrega productos para verlos aquí</p>
                    <Link to={"/"}>
                        <button className="bg-indigo-500 px-3 py-2 mt-5 rounded text-white font-medium hover:bg-indigo-700 transition">Volver al Catálogo</button>
                    </Link>
                </div>
            </div>

        )
    }

    return (
        
        <section className="bg-white py-8 antialiased md:py-16">
            <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                <h2 className="text-xl font-bold text-gray-800 sm:text-2xl">Tus Productos
                    <div className="border-b-4 border-cyan-400 mt-2 w-12"></div>
                </h2>

                <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
                    <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
                        {cart.map((product) => (
                            <CartItem product={product} key={product.id} />
                        ))}
                        <button className="mt-6 button button-clear bg-indigo-500 hover:bg-indigo-600 font-medium text-white rounded px-3 py-1 ml-auto transition" onClick={clearCart}>Vaciar Carrito</button>
                    </div>

                    <div className="mx-auto mt-8 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
                        <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
                            <span className="text-xl font-semibold text-gray-900">Resumen ({totalProducts} Productos)
                                <div className="border-b-4 border-cyan-400 mt-2 w-12"></div>
                            </span>

                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <dt className="text-base font-bold text-gray-900">Pago con Transferencia</dt>
                                    <p className="text-sm font-medium text-gray-500">Transferencia y Banco Estado</p>
                                    <dd className="text-base font-bold text-indigo-500">${totalTrans.toFixed(2)}</dd>
                                    <dt className="text-base font-bold text-gray-900">Otros medios de pago</dt>
                                    <p className="text-sm font-medium text-gray-500">Webpay/Onepay</p>
                                    <dd className="text-base font-bold text-gray-900">${total.toFixed(2)}</dd>
                                </div>

                                <a href="#" className="flex w-full items-center justify-center rounded-lg bg-indigo-500 hover:bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 transition">Pagar</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
    )
}
