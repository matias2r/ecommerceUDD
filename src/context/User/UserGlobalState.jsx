import { useReducer } from "react"
import { authenticate, registerUser } from "../../services/userApi";
import { AuthContext } from "./userContext";
import { AuthReducer } from "./userReducer";

const initialState = {
    user: null,
    token: null
}

export const AuthProvider = ({ children }) => {

    const [ state, dispatch ] = useReducer(AuthReducer, initialState);


    const register = async(userData) => {
        try {
            const data = await registerUser(userData);
            const { token } = data

            if(token) {
                const user = { email: userData.email };
                localStorage.setItem('token', token);
                localStorage.setItem('user', JSON.stringify(user))

                dispatch({
                    type: 'REGISTER_USER',
                    payload: { user, token }
                })
            } else {
                throw new Error('Token no recibido');
            }
        } catch (error) {
            throw new Error(`Error al registrar el usuario: ERROR: ${error}`)
        }
    }

    const loginWithGoogle = async() => {
        const provider = new GoogleAuthProvider()
        try {
            await signInWithPopup(auth, provider)
        } catch (error) {
            console.error("Error al loguear con Google", error)
        }
    }


    const login = async(credentials) => {
        try {
            const data = await authenticate(credentials)
            const { token } = data;

            if (token) {
              const user = { email: credentials.email };
              localStorage.setItem("token", token);
              localStorage.setItem("user", JSON.stringify(user));

              dispatch({
                type: "LOGIN_USER",
                payload: { user, token },
              });
            } else {
              throw new Error("Token no recibido");
            }
        } catch (error) {
             throw new Error(`Error al autenticar el usuario: ERROR: ${error}`);
        }
    }

    const logout = async() => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');

        dispatch({ type: 'LOGOUT_USER' })
    }


    return (
        <AuthContext.Provider 
            value={{
                user: state.user,
                token: state.token,
                register,
                login,
                logout,
                loginWithGoogle
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}