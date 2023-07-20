import React from "react";
import BotaoIcone from "componentes/BotaoIcone";
import Input from "componentes/Input";
import useAuth from "contexts/useAuth";
import Botao from "componentes/Botao";
import { Link } from "react-router-dom";

const Menu = () => {
    const { signed } = useAuth();
    const isLoggedIn = () => (signed > 0 ? true : false);
    // alert(isLoggedIn())
    return (
        <div className="w-full block bg-lavanda">
            <header className="flex flex-wrap m-auto px-5 gap-x-9 gap-y-6 py-5 justify-between items-center max-w-5xl">
                <div className="h-[38px] w-[38px] order-first duration-100 bg-logoMin bg-no-repeat bg-contain sm:bg-logo sm:w-[190px] sm:h-[60px]"></div>
                <div className="flex lg:gap-5 gap-2 lg:order-last">
                    {isLoggedIn() == false ? (
                        <>
                            <Botao classeBtn="secundaria">
                                <Link to="/entrar">Entrar</Link>
                            </Botao>
                            <Botao>
                                <Link to="/cadastre-se">Criar conta</Link>
                            </Botao>
                        </>
                    ) : (
                        <>
                            <BotaoIcone arialabel="Abrir carrinho" icon="before:bg-cart hover:before:bg-cartWhiteFilled"></BotaoIcone>
                            <BotaoIcone arialabel="Abrir favoritos" icon="before:bg-fav hover:before:bg-favWhiteFilled"></BotaoIcone>
                            <BotaoIcone arialabel="Minha conta" icon="flex items-center gap-2 before:bg-profile hover:before:bg-profileWhite before:rounded-full">
                                <p className="sm:inline hidden"> Minha conta</p>
                                <svg aria-label="Ver opções"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12"
                                    height="8"
                                    viewBox="0 0 15 9"
                                    fill="none"
                                >
                                    <path
                                        d="M14 1L7.5 7.5L1 1"
                                        stroke="#4F359B"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </BotaoIcone>
                        </>
                    )}
                </div>
                <div className="self-stretch w-full lg:w-auto relative">
                    <Input
                        classe="mt-2 order-last lg:order-2 min-w-auto md:min-w-[300px]"
                        placeholder="O que você procura?"
                        tipo="search"
                    />
                    <button className="p-3 absolute right-0 top-3"><img src="/img/icons/Search_icon.svg" alt="Buscar" /></button>
                </div>
            </header>
        </div>
    );
};

export default Menu;
