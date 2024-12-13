import { AppRouter } from "./routes/AppRouter"
import { CartProvider } from "./context/Cart/CartGlobalState"
import { AuthProvider } from "./context/User/UserGlobalState"


export const App = () => {
  return (  
    <AuthProvider>
      <CartProvider>
        <AppRouter />
      </CartProvider>
    </AuthProvider>
  )
}