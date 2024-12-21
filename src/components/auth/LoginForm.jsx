import { useState, useContext } from "react";
import { AuthContext } from "../../context/User/userContext";
import { useNavigate } from "react-router-dom";
import { ErrorLogin } from "./ErrorLogin";
import { GoogleLoginButton } from "./GoogleLoginButton"; // Asegúrate de importar el botón de Google login

export const LoginForm = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (event) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await login(credentials); // Suponemos que login es una función que devuelve una promesa
      setSuccessMessage("Inicio de sesión exitoso. Redireccionando...");
      setTimeout(() => {
        navigate("/"); // Redirecciona después de mostrar el mensaje
      }, 3000); // Mensaje de éxito se muestra durante 3 segundos
    } catch (error) {
      setError(`Error al iniciar Sesión. Verifica tus credenciales. ERROR: ${error}`);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="flex min-h-screen items-center justify-center text-gray-600">
        <div className="relative">
          {/* SVG Patterns */}
          <div className="hidden sm:block h-56 w-56 text-indigo-300 absolute top-0 left-0 -z-10">
            {/* SVG Patterns */}
          </div>
          <div className="hidden sm:block h-28 w-28 text-indigo-300 absolute bottom-0 right-0 -z-10">
            {/* SVG Patterns */}
          </div>

          <div className="relative flex flex-col sm:w-[30rem] rounded-lg border-gray-400 bg-white shadow-lg px-4">
            <div className="flex-auto p-6">
              <div className="mb-10 flex items-center justify-center">
                <a className="flex items-center gap-2 text-indigo-500">
                  <span className="text-3xl font-black">Bienvenido</span>
                </a>
              </div>

              <form className="mb-4" onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="email" className="mb-2 text-xs font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Ingresa tu email"
                    value={credentials.email}
                    onChange={handleChange}
                    className="w-full border-gray-400 rounded-md py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600"
                    required
                  />
                </div>

                <div className="mb-4">
                  <div className="flex justify-between items-center">
                    <label htmlFor="password" className="text-xs font-medium text-gray-700">
                      Contraseña
                    </label>
                    <a
                      href="#"
                      className="text-indigo-500 hover:text-indigo-700 text-sm cursor-pointer"
                      onClick={() => alert("Función de olvido de contraseña")}
                    >
                      Olvidé mi contraseña
                    </a>
                  </div>
                  <div className="relative flex items-stretch">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      id="password"
                      placeholder="**********"
                      value={credentials.password}
                      onChange={handleChange}
                      className="w-full border-gray-400 rounded-md py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600"
                      required
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 flex items-center pr-3 text-indigo-500"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? (
                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 3a7 7 0 014.915 11.908l1.072 1.072a9 9 0 10-12.186 0l1.072-1.072A7 7 0 01110 3z" />
                          <path d="M10 5a5 5 0 00-4.47 7.539l.473.473a5 5 0 006.594 0l.473-.473A5 5 0 0010 5z" />
                        </svg>
                      ) : (
                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 3a7 7 0 014.915 11.908l1.072 1.072a9 9 0 10-12.186 0l1.072-1.072A7 7 0 01110 3z" />
                          <path d="M10 5a5 5 0 00-4.47 7.539l.473.473a5 5 0 006.594 0l.473-.473A5 5 0 0010 5z" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                <div className="mb-4">
                  {error && <ErrorLogin />}
                  {successMessage && <div className="text-green-600 text-center font-semibold">{successMessage}</div>}
                  <button
                    className="w-full bg-indigo-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-indigo-600"
                    type="submit"
                  >
                    Iniciar Sesión
                  </button>
                  <GoogleLoginButton /> {/* Aquí agregamos el botón de Google */}
                </div>
              </form>
            </div>

            <div className="border-t border-indigo-200 text-center px-4 py-2 text-sm text-gray-600">
              &copy; 2024 Todos los derechos reservados
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
