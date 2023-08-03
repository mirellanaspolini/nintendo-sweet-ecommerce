import BotaoIcone from "componentes/BotaoIcone";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Link } from "react-router-dom";

const CardProductPromotion = ({ produto }) => {
    const beforePrice = `before:content-[\"${produto.price.toString()}\"]`;
    console.log(beforePrice);
    console.log(produto.price);

    return (
        <Link to={"/produtos/" + produto.slug}>
            <div className="font-medium font-titulos rounded-3xl shadow-lg flex flex-row h-auto">
                <div className="w-3/5 sm:w-1/2 relative">
                    <span className="absolute right-0 bg-pink-600 py-1 px-2 sm:p-2 sm:px-4 rounded-bl-xl text-branco text-xl sm:text-3xl">
                        {`- ${produto.inPromotion[1] * 100}%`}
                    </span>
                    <img
                        className="w-full h-full object-cover rounded-l-3xl"
                        src={produto.images[0]}
                        alt={produto.name}
                    />
                </div>

                <div className="p-4 m-auto sm:w-1/2">
                    <p className="line-through text-lg text-lilas">
                        R$
                        {produto.price.toFixed(2)}
                    </p>
                    <p className={" text-xl sm:text-2xl mb-1 text-violeta-01"}>
                        R$
                        {(
                            produto.price -
                            produto.price * produto.inPromotion[1]
                        ).toFixed(2)}
                    </p>
                    <h3 className="mb-4 text-base sm:text-lg text-rosa-01">
                        {produto.name}
                    </h3>
                    <ReactMarkdown className="productDescription hidden sm:block font-400 text post-markdown-container font-textos text-cinza-05 ">
                        {produto.description}
                    </ReactMarkdown>
                </div>
            </div>
        </Link>
    );
};

export default CardProductPromotion;
