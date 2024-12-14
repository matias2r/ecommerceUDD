import { Route, Routes } from "react-router-dom"
import { HomePage, LoginPage, CartPage } from "../pages"
import { Navbar, Header, Footer } from "../components"
import { PrivateRoute } from "./PrivateRoute"
import { ProductDetail } from "../components/products/ProductDetail"


export const AppRouter = () => {
    return (
        <>
            <Header />
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/login" element={<LoginPage />} />
                <Route 
                    path="/cart" 
                    element={
                        <PrivateRoute>
                            <CartPage />
                        </PrivateRoute>
                    } 
                />
            </Routes>
            <Footer />
        </>
    )
}