import { useState, useContext } from "react";
import { AuthContext } from "../../context/User/userContext";
import { useNavigate } from "react-router-dom";
import { ErrorLogin } from "./ErrorLogin";

export const LoginForm = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false); // Estado para mostrar/ocultar la contraseña

  const handleChange = (event) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await login(credentials);
      navigate("/");
    } catch (error) {
      setError(`Error al iniciar Sesión. Verifica tus credenciales. ERROR: ${error}`);
    }
  };

  // Alterna el tipo de input para mostrar u ocultar la contraseña
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="flex min-h-screen items-center justify-center text-gray-600">
        <div className="relative">
          <div className="hidden sm:block h-56 w-56 text-indigo-300 absolute a-z-10 -left-20 -top-20">
            <svg
              id="patternId"
              width="100%"
              height="100%"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id="a"
                  patternUnits="userSpaceOnUse"
                  width="40"
                  height="40"
                  patternTransform="scale(0.6) rotate(0)"
                >
                  <rect x="0" y="0" width="100%" height="100%" fill="none" />
                  <path
                    d="M11 6a5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5 5 5 0 015 5"
                    strokeWidth="1"
                    stroke="none"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect width="800%" height="800%" transform="translate(0,0)" fill="url(#a)" />
            </svg>
          </div>
          <div className="hidden sm:block h-28 w-28 text-indigo-300 absolute a-z-10 -right-20 -bottom-20">
            <svg
              id="patternId"
              width="100%"
              height="100%"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id="b"
                  patternUnits="userSpaceOnUse"
                  width="40"
                  height="40"
                  patternTransform="scale(0.5) rotate(0)"
                >
                  <rect x="0" y="0" width="100%" height="100%" fill="none" />
                  <path
                    d="M11 6a5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5 5 5 0 015 5"
                    strokeWidth="1"
                    stroke="none"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect width="800%" height="800%" transform="translate(0,0)" fill="url(#b)" />
            </svg>
          </div>
          <div className="relative flex flex-col sm:w-[30rem] rounded-lg border-gray-400 bg-white shadow-lg px-4">
            <div className="flex-auto p-6">
              <div className="mb-10 flex flex-shrink-0 flex-grow-0 items-center justify-center overflow-hidden">
                <a className="flex items-center gap-2 text-indigo-500 no-underline hover:text-indigo-500">
                  <span className="flex-shrink-0 text-3xl font-black lowercase tracking-tight opacity-100">
                    Bienvenido.
                  </span>
                </a>
              </div>

              <form className="mb-4" onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="mb-2 inline-block text-xs font-medium uppercase text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    className="block w-full cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Por favor Ingresa tu email"
                    value={credentials.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <div className="flex justify-between">
                    <label
                      className="mb-2 inline-block text-xs font-medium uppercase text-gray-700"
                      htmlFor="password"
                    >
                      Contraseña
                    </label>
                    <a
                      href="auth-forgot-password-basic.html"
                      className="cursor-pointer text-indigo-500 no-underline hover:text-indigo-500"
                    >
                      <small className="">Olvidé mi contraseña</small>
                    </a>
                  </div>
                  <div className="relative flex w-full flex-wrap items-stretch">
                    <input
                      className="relative block flex-auto cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow"
                      type={showPassword ? "text" : "password"} // Cambia el tipo dependiendo del estado
                      name="password"
                      id="password"
                      placeholder="**********"
                      value={credentials.password}
                      onChange={handleChange}
                      required
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 flex items-center pr-3"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? (
                        <svg
                          className="h-5 w-5 text-indigo-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 3a7 7 0 014.915 11.908l1.072 1.072a9 9 0 10-12.186 0l1.072-1.072A7 7 0 0110 3z"
                            clipRule="evenodd"
                          />
                          <path d="M10 5a5 5 0 00-4.47 7.539l.473.473a5 5 0 006.594 0l.473-.473A5 5 0 0010 5z" />
                        </svg>
                      ) : (
                        <svg
                          className="h-5 w-5 text-indigo-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 3a7 7 0 014.915 11.908l1.072 1.072a9 9 0 10-12.186 0l1.072-1.072A7 7 0 0110 3z"
                            clipRule="evenodd"
                          />
                          <path
                            fillRule="evenodd"
                            d="M3.172 4.757a7 7 0 0110.607 0l1.05 1.05A5 5 0 0010 5a5 5 0 00-4.47 7.539l.473.473a5 5 0 006.594 0l.473-.473A5 5 0 0010 5z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
                <div className="mb-4">
                  {error && <div className="mb-5"><ErrorLogin /></div>}
                  <button
                    className="grid w-full cursor-pointer select-none rounded-md border border-indigo-500 bg-indigo-500 py-2 px-5 text-center align-middle text-sm text-white shadow hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus:border-indigo-600 focus:bg-indigo-600 focus:text-white focus:shadow-none"
                    type="submit"
                  >
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
