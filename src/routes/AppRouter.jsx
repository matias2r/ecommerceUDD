import { Route, Routes } from "react-router-dom"
import { HomePage, AboutPage, ProductsPage } from "../pages"
import { Navbar, Header, Footer } from "../components"
import { CartPage } from "../pages/CartPage"
import { LoginPage } from "../pages/LoginPage"


export const AppRouter = () => {
    return (
        <>
            <Header />
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/product" element={<ProductsPage />} />
                <Route path="/login" element={<LoginPage />} />
            </Routes>
            <Footer />
        </>
    )
}