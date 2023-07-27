import Botao from "componentes/Botao";
import Header from "componentes/Header";
import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(-1);
    };
    return (
        <section className="h-screen gap-6 flex items-center justify-center flex flex-col items-center m-auto">
            <Header corTexto="rosa">Página não encontrada!</Header>
            <p className="text-center text-lg text-cinza-06">
                Eita... parece que houve algum erro ou página que você procurou
                não existe.
            </p>
            <div className="md:w-1/2 w-4/5">
                <img
                    src="../img/ilustracoes/gato.svg"
                    alt="Gato branco brincando com um novelo de lã amarelo"
                />
            </div>
            <Botao classeBtn="rosa" onclick={handleClick}>
                Voltar
            </Botao>
        </section>
    );
};

export default NotFound;
