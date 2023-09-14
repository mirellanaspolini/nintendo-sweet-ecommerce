import Footer from 'componentes/Footer';
import Menu from 'componentes/Menu';
import { Outlet } from 'react-router-dom';

const DefaultPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <a
                href="#content"
                className="sr-only bg-violeta-02 w-full text-white"
            >
                pular para o conteudo
            </a>
            <Menu />

            <main
                id="content"
                className="flex-grow p-4 md:p-6 max-w-5xl lg:m-auto"
            >
                <Outlet />
            </main>

            <Footer />
        </div>
    );
};

export default DefaultPage;
