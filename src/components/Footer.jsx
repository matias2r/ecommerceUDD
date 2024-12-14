import bancoEstado from '../assets/bancoEstado.svg';
import mercadoPago from '../assets/mercadoPago.svg';
import santander from '../assets/santander.svg';
import webpay from '../assets/webpay.svg';
import transferencia from '../assets/transferencia.svg';

export const Footer = () => {
    return (
        <footer className="bg-indigo-950 text-white">
            <div className="mx-auto grid max-w-screen-xl gap-y-8 gap-x-12 px-4 py-10 md:grid-cols-2 xl:px-10">
                <div>
                    <div className="mt-4 mb-2 font-medium xl:mb-4">Redes Sociales
                    <div className="border-b-4 border-cyan-400 mt-2 w-12"></div>
                    </div>
                    <div className="flex flex-row space-x-4">
                        <a href="https://www.facebook.com/SPDigital/" target="_blank" className='bg-indigo-500 rounded px-2 hover:bg-indigo-600 transition'><i className="fab fa-facebook-f"></i></a>
                        <a href="https://www.instagram.com/spdigital/" target="_blank" className='bg-indigo-500 rounded px-2 hover:bg-indigo-600 transition'><i className="fab fa-instagram"></i></a>
                        <a href="https://www.linkedin.com/company/sp-digital/" target="_blank" className='bg-indigo-500 rounded px-2 hover:bg-indigo-600 transition'><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div className="mt-4 mb-8">
                    <div className="mb-2 font-medium xl:mb-4">Medios de Pago
                    <div className="border-b-4 border-cyan-400 mt-2 w-12"></div>
                    </div>
                    
                    <div className="flex flex-wrap justify-center sm:justify-start gap-4">
                        <img src={bancoEstado} alt="bancoEstado" className="h-8" />
                        <img src={mercadoPago} alt="mercadoPago" className="h-8" />
                        <img src={santander} alt="santander" className="h-8" />
                        <img src={webpay} alt="webpay" className="h-8" />
                        <img src={transferencia} alt="transferencia" className="h-8" />
                    </div>
                </div>
            </div>
            <div className="bg-zinc-800">
                    <div className='w-full py-2 text-center justify-center text-gray-500'>© 2024 | SP Digital Todos los derechos reservados | Desarrollado con 💚 por <a className='font-bold hover:text-indigo-500 transition' href='https://github.com/matias2r'>Matias Espinoza</a></div>
            </div>
        </footer>
    );
}
