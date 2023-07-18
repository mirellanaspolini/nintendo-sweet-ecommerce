import React from "react";
import BotaoIcone from "componentes/BotaoIcone";
import Input from "componentes/Input";

const Menu = () => {
    return (
        <div className="w-full block bg-lavanda">
            <header className="flex flex-wrap m-auto px-5 gap-x-9 gap-y-6 py-5 justify-between items-center max-w-5xl">
                <img
                    className="h-[40px] md:h-[60px] order-first"
                    src="./img/NS-logo.svg"
                    alt="Logo da Nintendo Sweet"
                />
                <div className="flex lg:gap-5 gap-2 lg:order-last">
                    <BotaoIcone icon="before:bg-cart hover:before:bg-cartWhiteFilled"></BotaoIcone>
                    <BotaoIcone icon="before:bg-favFilled hover:before:bg-favWhiteFilled"></BotaoIcone>
                    <BotaoIcone icon="flex items-center gap-2 before:bg-profile hover:before:bg-profileWhite before:rounded-full">
                        Minha conta
                        <svg
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
                </div>
                <Input
                    classe="order-last lg:order-2 lg:w-full min-w-[300px]"
                    placeholder="O que você procura?"
                    tipo="search"
                />
            </header>
        </div>
    );
};

export default Menu;
