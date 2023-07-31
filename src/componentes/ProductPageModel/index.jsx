import Botao from "componentes/Botao";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const ProductPageModel = ({ product }) => {
    const fullStars = Math.floor(product.rating);
    console.log(fullStars);
    const emptyStars = 5 - fullStars;
    console.log(emptyStars);

    const renderFullStars = () => {
        const stars = [];
        for (let i = 0; i < fullStars; i++) {
            stars.push(<img src="/img/icons/star-filled_icon.svg" alt />);
        }
        return stars;
    };
    const renderEmptyStars = () => {
        const stars = [];
        for (let i = 0; i < emptyStars; i++) {
            stars.push(<img src="/img/icons/star_icon.svg" alt />);
        }
        return stars;
    };

    return (
        <>
            <article className="flex gap-5 mb-9">
                <div className="w-2/5 flex flex-wrap">
                    {product.images.map((img) => {
                        return (
                            <img
                                className="border-4 border-amarelo-01 rounded-xl w-1/2"
                                src={img}
                                alt
                            />
                        );
                    })}
                </div>
                <div className="w-3/5">
                    <h3 className="text-xl font-titulos mb-2">
                        {product.name}
                    </h3>
                    <div className="flex gap-1 mb-4">
                        {renderFullStars()}
                        {renderEmptyStars()}
                    </div>
                    <h2 className="text-3xl text-rosa-01 font-titulos">
                        R$ {product.price.toFixed(2)}
                    </h2>

                    {/* ------------------------------------ */}
                    <p>Quantidade</p>
                    <span className="flex gap-2 items-center">
                        <Botao classeBtn="secundario">-</Botao>
                        {product.quantity}
                        <Botao>+</Botao>
                    </span>
                </div>
            </article>

            <article>
                <h4 className="text-rosa-01 font-titulos text-xl mb-1">
                    Descrição
                </h4>
                <ReactMarkdown className="font-400 text-lg post-markdown-container font-textos text-cinza-06 ">
                    {product.description}
                </ReactMarkdown>
            </article>
        </>
    );
};

export default ProductPageModel;
