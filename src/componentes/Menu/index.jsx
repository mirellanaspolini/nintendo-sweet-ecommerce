import React from "react";
import BotaoIcone from "componentes/BotaoIcone";

const Menu = () => {
    return (
        <div className="w-full block">
            <header className="bg-roxo-01">
                <img className="w-[180px]" src="./img/NS-logo.svg" alt="Logo da Nintendo Sweet" />
                <input type="search" name="" id="" />
                <div>
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
            </header>
        </div>
    );
}

export default Menu;