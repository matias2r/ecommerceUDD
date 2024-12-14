import axios from 'axios';

const URL_BASE = "https://fakestoreapi.com";

const apiProductsClients = axios.create({
    baseURL: URL_BASE
})


export const getAllProducts = async () => {
    try {
        const { data } = await apiProductsClients.get('/products/category/electronics')
        return data
    } catch (error) {
        
    }
}

export const getProductById = async (id) => {
    try {
        const response = await fetch(`${URL_BASE}/products/${id}`);
        if (!response.ok) {
            throw new Error('Error al obtener el producto');
        }
        const product = await response.json();
        return product;
    } catch (error) {
        throw new Error('Error al obtener el producto');
    }
};



