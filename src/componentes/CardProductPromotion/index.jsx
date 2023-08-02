import BotaoIcone from "componentes/BotaoIcone";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Link } from "react-router-dom";

const CardProductPromotion = ({ produto }) => {
    const price = produto.price;
    return (
        <Link to={"/produtos/" + produto.slug}>
            <div className="font-medium font-titulos rounded-3xl shadow-lg flex h-auto">
                <div>
                    <img
                        className="w-full h-full object-cover rounded-l-3xl"
                        src={produto.images[0]}
                        alt={produto.name}
                    />
                </div>

                <div className="p-4">
                    <p
                        className={`text-2xl text-violeta-01 before:content-[dasda]} before:block before:line-through before:text-lg before:text-lilas`}
                    >
                        R$
                        {(
                            produto.price -
                            produto.price * produto.inPromotion[1]
                        ).toFixed(2)}
                    </p>
                    <h3 className="mb-4 text-lg text-rosa-01">
                        {produto.name}
                    </h3>
                    <ReactMarkdown className="font-400 text post-markdown-container font-textos text-cinza-05 ">
                        {produto.description}
                    </ReactMarkdown>
                </div>
            </div>
        </Link>
    );
};

export default CardProductPromotion;
