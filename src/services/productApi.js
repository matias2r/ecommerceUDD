import axios from 'axios';

const URL_BASE = "https://fakestoreapi.com/";

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


