import Botao from "componentes/Botao";
import BotaoIcone from "componentes/BotaoIcone";
import React from "react";
import { Link } from "react-router-dom";

const CardProduto = ({ produto }) => {
    return (
        // imagem dentro de link pra pagina do produto
        // nome do produto dentro de link
        <li
            className="font-medium font-titulos rounded-xl p-4 shadow-lg"
            key={produto.id}
        >
            {produto.images.map((image, index) => {
                <>
                    <Link to={produto.slug}>{/* arrumar path */}</Link>
                </>;
            })}
            <div>
                <p className="text-2xl text-rosa-01">
                    R$ {produto.price.toFixed(2)}
                </p>
                <h3 className="text-xl text-rosa-03">{produto.name}</h3>
                <Botao classeBtn="secundario">Adicionar ao Carrinho</Botao>
                <BotaoIcone icon="before:bg-cart hover:before:bg-cartWhiteFilled">
                    adicionar ao carrinho
                </BotaoIcone>
            </div>
        </li>
    );
};

export default CardProduto;
