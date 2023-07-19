import React from "react";

const BotaoIcone = ({ onclick, children, icon }) => {
    return (
        <button
            className={`${icon} duration-00 font-titulo bg-branco rounded-full border-2 border-violeta-01 px-5 py-3 hover:bg-violeta-01 hover:text-white text-violeta-01 text-medium before:content-[""] before:w-6 before:inline-block before:h-full before:bg-center before:bg-no-repeat before:bg-contain`}
            onClick={onclick}
        >
            {children}
        </button>
    );
};

export default BotaoIcone;
