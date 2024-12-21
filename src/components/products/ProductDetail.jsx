import { useParams } from 'react-router-dom';
import { getProductById } from '../../services/productApi';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { CartContext } from "../../context/Cart/cartContext"

export const ProductDetail = () => {

    const { addToCart } = useContext(CartContext)
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const productData = await getProductById(id);
                setProduct(productData);
            } catch (err) {
                setError('Error al cargar el producto');
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>{error}</p>;
    

    return (
        <>
        <section className="py-12 sm:py-16"> 
            <div className="container mx-auto px-52">

                <div className="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">
                <div className="lg:col-span-3 lg:row-end-1">
                    <div className="lg:flex lg:items-start">
                    <div className="lg:order-2 lg:ml-5">
                        <div className="max-w-xl overflow-hidden rounded-lg">
                        <img className="h-[350px] w-full max-w-full object-cover" src={product.imagen} alt={product.nombre} />
                        </div>
                    </div>
                    </div>
                </div>

                <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2">
                    <h1 className="sm: text-2xl font-bold text-gray-900 sm:text-3xl">{product.nombre}</h1>

                    <h2 className="mt-8 text-base text-gray-900">Categoria: <span className='font-semibold text-gray-900 hover:text-indigo-500 transition cursor-pointer'>{product.categoria}</span></h2>

                    <div className="mt-10 flex flex-col items-center justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0">
                    <div className="flex items-end">
                        <h1 className="text-3xl font-bold">${product.precio}</h1>
                    </div>
                    

                    <button className="flex items-center justify-center rounded-md bg-indigo-500 hover:bg-indigo-600 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none transition" onClick={() => addToCart(product)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="shrink-0 mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                        Añadir al Carrito
                    </button>
                    </div>

                    <ul className="mt-8 space-y-2">
                    <li className="flex items-center text-left text-sm font-medium text-gray-600">
                        <svg className="mr-2 block h-5 w-5 align-middle text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" className=""></path>
                        </svg>
                        Despacho a todo Chile.
                    </li>

                    <li className="flex items-center text-left text-sm font-medium text-gray-600">
                        <svg className="mr-2 block h-5 w-5 align-middle text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" className=""></path>
                        </svg>
                        Todo medio de pago.
                    </li>
                    </ul>
                </div>

                <div className="lg:col-span-3">
                    <div className="border-b border-gray-300">
                    <nav className="flex gap-4">
                        <a className="border-b-2 border-cyan-400 py-4 text-sm font-medium text-indigo-500 hover:border-cyan-500 hover:text-indigo-600 cursor-pointer"> Caracteristicas </a>
                    </nav>
                    </div>

                    <div className="flow-root sm:mt-12">
                    <h1 className="text-xl font-bold">{product.nombre}</h1>
                    <p className="mt-4">{product.descripcion}</p>
                    </div>
                </div>
                </div>
            </div>
        </section>
        </>
    );
};
