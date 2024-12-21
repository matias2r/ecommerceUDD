import { useContext } from "react"
import { AuthContext } from "../../context/User/userContext"
import googleIcon from "../../assets/google.png"

export const GoogleLoginButton = () => {

    const { loginWithGoogle } = useContext(AuthContext);

    return (
        <div className="mt-5">
        <button
            className="flex items-center justify-center w-full h-12 rounded-lg font-semibold text-black bg-white shadow-md hover:shadow-lg"
            onClick={loginWithGoogle}
        >
            <div className="flex items-center gap-2">
                <div className="w-6 h-6">
                    <img src={googleIcon} alt="Google icon" />
                </div>
                <p>Continuar con Google</p>
            </div>
        </button>
        </div>
    )
}