import Button from "componentes/Button";
import ButtonIcone from "componentes/IconButton";
import Dropdown from "componentes/Dropdown";
import useAuth from "contexts/useAuth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Menu = () => {
    const { signed } = useAuth();
    const isLoggedIn = () => (signed > 0 ? true : false);

    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
    };

    return (
        <div className="w-full block bg-lavanda">
            <header className="flex flex-wrap m-auto gap-x-9 gap-y-6 px-4 md:px-6 py-5 justify-between items-center max-w-5xl">
                <Link
                    to="/"
                    className="h-[38px] w-[38px] order-first duration-100 bg-logoMin bg-no-repeat bg-contain sm:bg-logo sm:w-[90px] sm:h-[50px]"
                >
                    <span className="sr-only">Ir para a página inicial</span>
                </Link>
                <div className="flex lg:gap-3 gap-2 lg:order-last">
                    {isLoggedIn() === false ? (
                        <>
                            <Button classes="secundary">
                                <Link to="/entrar">Entrar</Link>
                            </Button>
                            <Button>
                                <Link to="/cadastre-se">Criar conta</Link>
                            </Button>
                        </>
                    ) : (
                        <>
                            <ButtonIcone
                                arialabel="Abrir carrinho"
                                icon="before:bg-cart"
                                rota="/carrinho"
                            ></ButtonIcone>
                            <ButtonIcone
                                arialabel="Abrir favoritos"
                                icon="before:bg-fav"
                                rota="/favoritos"
                            ></ButtonIcone>
                            <Dropdown />
                        </>
                    )}
                </div>
                <div className="flex self-stretch w-full lg:w-auto relative border-2 border-violeta-01 bg-branco rounded-2xl">
                    <form onSubmit={handleSearch} className=" w-full">
                        <input
                            type="search"
                            className="font-textos focus-visible:outline-none outline-none w-full text-base bg-transparent py-3 pl-4 pr-2 text-cinza-06 order-last lg:order-2 min-w-auto md:min-w-[300px]"
                            placeholder="O que você procura?"
                            aria-label="Pesquisar no site"
                            id="txtSearch"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </form>
                    <button
                        className="p-3 relative right-0 top-0"
                        onClick={handleSearch}
                    >
                        <img src="/img/icons/Search_icon.svg" alt="Buscar" />
                    </button>
                </div>
            </header>
        </div>
    );
};

export default Menu;
