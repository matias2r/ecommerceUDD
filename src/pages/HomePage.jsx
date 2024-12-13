import { ProductList } from "../components/products/ProductList"
import NaviBlack from "../assets/bannerNaviBlack.webp"
import { Banner } from "../components/Banner"

export const HomePage = () => {
    
    return (
        <>  
        <Banner />
        <div className="w-full justify-center flex mt-4">
            <img src={NaviBlack} alt="NaviBlack" className="w-full hidden max-w-xl md:block lg:max-w-7xl cursor-pointer" />
        </div>

        <div className="w-full mt-12">
            <h2 className="text-xl items-center justify-center sm:text-2xl md:text-3xl lg:text-3xl font-bold text-center text-indigo-600">
                Ofertas Imperdibles
            </h2>
            <div className="border-b-4 border-cyan-400 mt-2 w-11 mx-auto"></div>
        </div>
        


            <ProductList />
        </>
    )
}