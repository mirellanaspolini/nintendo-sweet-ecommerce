import BotaoIcone from "componentes/BotaoIcone";
import { Link } from "react-router-dom";

const CardProduto = ({ produto }) => {
    return (
        <div className="font-medium font-titulos rounded-3xl shadow-lg">
            <Link to={"/produtos/" + produto.slug}>
                <img
                    className="w-full h-[200px] object-cover rounded-t-3xl"
                    src={produto.images[0]}
                    alt={produto.name}
                />
            </Link>

            <div className="p-4 h-min">
                <p className="text-2xl text-rosa-01">
                    R$ {produto.price.toFixed(2)}
                </p>
                <Link to={"/produtos/" + produto.slug}>
                    <h3 className="mb-4 text-lg text-rosa-03 cardProduct_name">
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
        </div>
    );
};

export default CardProduto;
