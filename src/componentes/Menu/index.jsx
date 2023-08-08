import Botao from "componentes/Botao";
import BotaoIcone from "componentes/BotaoIcone";
import Dropdown from "componentes/Dropdown";
import Input from "componentes/Input";
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
                    className="h-[38px] w-[38px] order-first duration-100 bg-logoMin bg-no-repeat bg-contain sm:bg-logo sm:w-[165px] sm:h-[50px]"
                ></Link>
                <div className="flex lg:gap-3 gap-2 lg:order-last">
                    {isLoggedIn() == false ? (
                        <>
                            <Botao classeBtn="secundario">
                                <Link to="/entrar">Entrar</Link>
                            </Botao>
                            <Botao>
                                <Link to="/cadastre-se">Criar conta</Link>
                            </Botao>
                        </>
                    ) : (
                        <>
                            <BotaoIcone
                                arialabel="Abrir carrinho"
                                icon="before:bg-cart"
                                rota="/carrinho"
                            ></BotaoIcone>
                            <BotaoIcone
                                arialabel="Abrir favoritos"
                                icon="before:bg-fav"
                                rota="/favoritos"
                            ></BotaoIcone>
                            <Dropdown />
                        </>
                    )}
                </div>
                <div className="self-stretch w-full lg:w-auto relative">
                    <form onSubmit={handleSearch}>
                        <Input
                            classe="order-last lg:order-2 min-w-auto md:min-w-[300px]"
                            placeholder="O que você procura?"
                            tipo="search"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </form>
                    <button className="p-3 absolute right-0 top-0">
                        <img src="/img/icons/Search_icon.svg" alt="Buscar" />
                    </button>
                </div>
            </header>
        </div>
    );
};

export default Menu;
