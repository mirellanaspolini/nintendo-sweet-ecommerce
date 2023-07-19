import React from "react";

const Botao = ({ onclick, children, classeBtn ="padrao" }) => {
    // const classeBotao = () => classeBtn === "padrao" ? true : false;

    const classes =
        classeBtn === "padrao"
            ? "bg-violeta-01 text-branco-puro border-violeta-01 hover:bg-branco hover:text-violeta-01"
            : "bg-branco-puro text-violeta-01 border-violeta-01 hover:bg-violeta-01 hover:text-branco-puro";
    return (
        <>
            <button
                className={`font-titulo font-medium text-lg sm:text-xl rounded-full border-2 px-3 py-2 sm:py-3 duration-200 ${classes}`}
                onClick={onclick}
            >
                {children}
            </button>
        </>
    );
};

export default Botao;
