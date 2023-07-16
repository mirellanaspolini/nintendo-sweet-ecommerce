import React from "react";

const BotaoIcone = ({ onclick, children }) => {
    return <button 
        className="font-titulo bg-branco rounded-full border-2 border-violeta-01 p-3 hover:bg-branco hover:text-lavanda ease-in"
        onClick={onclick}>{children}</button>;
};

export default BotaoIcone;
