import React from "react";
import BotaoIcone from "componentes/BotaoIcone";
import Input from "componentes/Input";

const Menu = () => {
    return (
        <div className="w-full block">
            <header className="flex flex-wrap bg-roxo-01 px-5 md:px-0 gap-4 py-5 justify-between items-center">
                <img
                    className="h-[40px] md:h-[60px] order-first"
                    src="./img/NS-logo.svg"
                    alt="Logo da Nintendo Sweet"
                />
                <div className="flex gap-5 md:order-last">
                    <BotaoIcone>
                        <img src="./img/icons/cart_icon.svg" alt="" />
                    </BotaoIcone>
                    <BotaoIcone>
                        <img src="./img/icons/fav-filled_icon.svg" alt="" />
                    </BotaoIcone>
                    <BotaoIcone>
                        <img src="./img/icons/Profile_icon.svg" alt="" />
                        Minha conta
                    </BotaoIcone>
                </div>
                <Input
                    classe="order-last md:order-2 w-full md:w-auto m-auto"
                    placeholder="O que você procura?"
                    tipo="search"
                    name=""
                    id=""
                />
            </header>
        </div>
    );
};

export default Menu;
