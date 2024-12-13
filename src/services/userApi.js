import axios from 'axios';

const API_URL = "https://reqres.in/api";


const apiCLient = axios.create({
    baseURL: API_URL,
})

apiCLient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if(token){
            config.headers["Authorization"] = `Bearer ${token}`
        }
        return config
    },
    (error) => Promise.reject(error)
)


export const registerUser = async(userData) => {
    try {
        const { data } = await apiCLient.post('/register', userData)
        return data
    } catch (error) {
        throw new Error(`No pudimos registrar al usuario. ${error}`)
    }
}


export const authenticate = async(credentials) => {
    try {
        const { data } = await apiCLient.post('/login', credentials)
        return data
    } catch (error) {
        throw new Error(`Credenciales Invalidas. ${error}`);
    }
}