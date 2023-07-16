import React from "react";

const Botao = ({ onclick, children }) => {
    return <button 
        className="font-titulo bg-lavanda text-branco-puro font-medium text-xl rounded-full border-2 border-lavanda p-3 hover:bg-branco hover:text-lavanda ease-in"
        onClick={onclick}>{children}</button>;
};

export default Botao;
