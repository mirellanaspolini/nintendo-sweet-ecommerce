import Footer from 'componentes/Footer';
import Menu from 'componentes/Menu';
import { Outlet } from 'react-router-dom';

const DefaultPage = () => {
    return (
        <div className="relative min-h-screen flex flex-col">
            <a
                href="#content"
                className="sr-only bg-violeta-02 w-full text-white"
            >
                pular para o conteudo
            </a>
            <Menu />

            <main
                id="content"
                className="flex-grow pb-[11rem] p-4 md:p-6 max-w-5xl lg:m-auto"
            >
                <Outlet />
            </main>

            <Footer />
        </div>
    );
};

export default DefaultPage;
