import BotaoIcone from "componentes/BotaoIcone";
import React from "react";
import { Link } from "react-router-dom";

const CardProduto = ({ produto }) => {
    return (
        <li className="font-medium font-titulos rounded-3xl shadow-lg">
            <Link to={produto.slug}>
                <img
                    className="w-full h-[200px] object-cover rounded-t-3xl"
                    src={produto.images[0]}
                    alt={produto.name}
                />
            </Link>

            <div className="p-4">
                <p className="text-2xl text-rosa-01">
                    R$ {produto.price.toFixed(2)}
                </p>
                <Link to={produto.slug}>
                    <h3 className="mb-4 text-lg text-rosa-03">
                        {produto.name}
                    </h3>
                </Link>
                <div className="self-stretch w-full lg:w-auto relative">
                    <BotaoIcone
                        classe="w-full"
                        icon="before:bg-cart hover:before:bg-cartWhiteFilled"
                    >
                        Adicionar ao carrinho
                    </BotaoIcone>
                </div>
            </div>
        </li>
    );
};

export default CardProduto;
