import React from "react";

const BotaoIcone = ({ onclick, children, icon, arialabel}) => {
    return (
        <button
            className={`${icon} py-2 px-[.85rem] duration-100 sm:px-5 sm:py-3 duration-00 font-titulo bg-branco rounded-full border-2 border-violeta-01 hover:bg-violeta-01 hover:text-white text-violeta-01 text-medium before:content-[""] before:w-6 before:inline-block before:h-full before:bg-center before:bg-no-repeat before:bg-contain`}
            aria-label={arialabel}
            onClick={onclick}
        >
            {children}
        </button>
    );
};

export default BotaoIcone;
