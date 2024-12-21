import { useState, useEffect } from "react";
import { getAllProducts } from "../../services/productApi";
import { ProductItem } from "./ProductItem";

export const ProductList = () => {
    const [ products, setProducts ] = useState([]);

    useEffect(() => {
        getAllProducts().then((data) => setProducts(data))
    }, [])

    return (
<div className="flex justify-center items-center min-h-screen">
    <div className="w-full max-w-[1080px]">
        {products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 p-4">
                {products.map((product) => (
                    <ProductItem product={product} key={product._id} />
                ))}
            </div>
        ) : (
            <div className="flex items-center justify-center w-full">
                <div className="flex items-center justify-center gap-5">
                    <div className="w-6 h-6 rounded-full bg-indigo-500 animate-bounce"></div>
                    <div className="w-6 h-6 rounded-full bg-indigo-500 animate-bounce [animation-delay:-.3s]"></div>
                    <div className="w-6 h-6 rounded-full bg-indigo-500 animate-bounce [animation-delay:-.5s]"></div>
                </div>
            </div>
        )}
    </div>
</div>


    )
}