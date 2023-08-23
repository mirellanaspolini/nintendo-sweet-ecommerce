import ButtonIcone from "componentes/IconButton";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Link } from "react-router-dom";

const CardProductPromotion = ({ product }) => {
    const beforePrice = `before:content-[\"${product.price.toString()}\"]`;

    return (
        <Link to={"/produtos/" + product.slug}>
            <div className="font-medium font-titulos rounded-3xl shadow-lg bg-branco-puro flex flex-row h-auto">
                <div className="w-3/5 sm:w-1/2 relative">
                    <span className="absolute right-0 bg-pink-600 py-1 px-2 sm:p-2 sm:px-4 rounded-bl-xl text-branco text-xl sm:text-3xl">
                        {`- ${product.inPromotion[1] * 100}%`}
                    </span>
                    <img
                        className="w-full h-full object-cover rounded-l-3xl"
                        src={product.images[0]}
                        alt={product.name}
                    />
                </div>

                <div className="p-4 m-auto sm:w-1/2">
                    <p className="line-through text-lg text-lilas">
                        R$
                        {product.price.toFixed(2)}
                    </p>
                    <p className={" text-xl sm:text-2xl mb-1 text-violeta-01"}>
                        R$
                        {(
                            product.price -
                            product.price * product.inPromotion[1]
                        ).toFixed(2)}
                    </p>
                    <h3 className="mb-4 text-base sm:text-lg text-rosa-01">
                        {product.name}
                    </h3>
                    <ReactMarkdown className="productDescription hidden sm:block font-400 text post-markdown-container font-textos text-cinza-05 ">
                        {product.description}
                    </ReactMarkdown>
                </div>
            </div>
        </Link>
    );
};

export default CardProductPromotion;
