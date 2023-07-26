import BotaoIcone from "componentes/BotaoIcone";
import React from "react";
import { Link } from "react-router-dom";

const CardProduto = ({ produto }) => {
    return (
        <li
            className="font-medium font-titulos rounded-3xl p-4 shadow-lg"
            key={produto.id}
        >
            <img src={produto.images[0]} alt={produto.name} />

            <div>
                <p className="text-2xl text-rosa-01">
                    R$ {produto.price.toFixed(2)}
                </p>
                <Link to={produto.slug}>
                    <h3 className="text-xl text-rosa-03">{produto.name}</h3>
                </Link>
                <BotaoIcone icon="before:bg-cart hover:before:bg-cartWhiteFilled">
                    adicionar ao carrinho
                </BotaoIcone>
            </div>
        </li>
    );
};

export default CardProduto;
