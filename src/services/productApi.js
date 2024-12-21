import axios from 'axios';

const URL_BASE = "http://localhost:3000/api";

const apiProductsClients = axios.create({
    baseURL: URL_BASE
});

// Obtener todos los productos
export const getAllProducts = async () => {
    try {
        const { data } = await apiProductsClients.get('/product/readall');
        return data;
    } catch (error) {
        console.error('Error al obtener todos los productos:', error);
        throw new Error('Error al obtener todos los productos');
    }
};

// Obtener producto por ID
export const getProductById = async (id) => {
    try {
        const { data } = await apiProductsClients.get(`/product/readone/${id}`);
        return data;
    } catch (error) {
        console.error(`Error al obtener el producto con ID ${id}:`, error);
        throw new Error('Error al obtener el producto');
    }
};
