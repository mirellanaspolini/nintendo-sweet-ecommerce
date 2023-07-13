import Botao from "componentes/Botao";
import useAuth from "contexts/useAuth";
import React from "react";
import { useNavigate } from "react-router-dom";

const PaginaInicial = () => {
    const { signout } = useAuth();
    const navigate = useNavigate();

    return (
        <>
            <Botao onclick={() => [signout(), navigate("/home")]}>
                Sair
            </Botao>
            <div>pagina inicial</div>
        </>
    );
};

export default PaginaInicial;
