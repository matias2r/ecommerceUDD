import { useContext } from "react"
import { CartContext } from "../../context/Cart/cartContext"
import { CartItem } from "./Cartitem"
import { Link } from 'react-router-dom'

export const CartList = () => {
    const { cart, clearCart } = useContext(CartContext)
    
    const total = cart.reduce((accum, product) => accum + product.price * product.quantity, 0)

    const totalTrans = cart.reduce((accum, product) => accum + product.price * product.quantity * 0.96, 0)

    const totalProducts = cart.reduce((accum, product) => accum + product.quantity, 0);

    if (!cart || cart.length === 0) {
        return (
            <div className="cart-list empty w-full h-[600px] flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-semibold">Tu Carrito está vacío</h2>
                    <p className="text-gray-400 mt-2">Por favor, agrega productos para verlos aquí</p>
                    <Link to={"/"}>
                    <button className="bg-indigo-500 px-3 py-2 mt-5 rounded text-white font-medium hover:bg-indigo-700 transition">Volver al Catálogo</button>
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <>
        <section className="bg-white py-8 antialiased md:py-16">
            <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">Tus Productos</h2>

                <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
                <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
                    {/* Aquí los productos en columna o fila según el tamaño */}
                    {cart.map((product) => (
                            <CartItem product={product} key={product.id} />
                        ))}
                    <button className="mt-6 button button-clear bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg px-3 py-1 ml-auto transition" onClick={clearCart}>Vaciar Carrito</button>
                </div>

                <div className="mx-auto mt-8 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
                    <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
                    <p className="text-xl font-semibold text-gray-900">Resumen ({totalProducts} Productos)</p>

                    <div className="space-y-4">
                        <div className="space-y-2">
                        <dt className="text-base font-bold text-gray-900">Pago con Transferencia</dt>
                        <p className="text-sm font-medium text-gray-500">Transferencia y Banco Estado</p>
                        <dd className="text-base font-bold text-indigo-500">${totalTrans.toFixed(2)}</dd>
                        <dt className="text-base font-bold text-gray-900">Otros medios de pago</dt>
                        <p className="text-sm font-medium text-gray-500">Webpay/Onepay</p>
                        <dd className="text-base font-bold text-gray-900">${total.toFixed(2)}</dd>
                    </div>

                    <a href="#" className="flex w-full items-center justify-center rounded-lg bg-indigo-500 hover:bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 transition">Pagar</a>

                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
