import Botao from "componentes/Botao";
import Titulos from "componentes/Titulo";
import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/");
    };
    return (
        <section className="h-screen gap-6 flex items-center justify-center flex flex-col items-center m-auto">
            <Titulos corTexto="rosa">Página não encontrada!</Titulos>
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
                Ir para a página principal
            </Botao>
        </section>
    );
};

export default NotFound;
