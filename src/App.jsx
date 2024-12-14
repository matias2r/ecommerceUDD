import { AppRouter } from "./routes/AppRouter"
import { CartProvider } from "./context/Cart/cartGlobalState"
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